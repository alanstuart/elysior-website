import { useEffect, useRef } from 'react'

function clamp(n, lo, hi) {
  return Math.max(lo, Math.min(hi, n))
}

function particleCount() {
  if (typeof window === 'undefined') return 105
  if (window.matchMedia('(max-width: 639px)').matches) return 48
  if (window.matchMedia('(max-width: 1023px)').matches) return 72
  return 105
}

function velocityScale() {
  if (typeof window === 'undefined') return 1
  if (window.matchMedia('(max-width: 639px)').matches) return 0.62
  if (window.matchMedia('(max-width: 1023px)').matches) return 0.78
  return 1
}

function useLighterComposite() {
  if (typeof window === 'undefined') return true
  return window.matchMedia('(min-width: 640px)').matches
}

function initParticles(w, h, n) {
  const vs = velocityScale()
  const out = []
  const macroRatio = 0.12
  const macroN = Math.max(2, Math.round(n * macroRatio))
  for (let i = 0; i < n; i += 1) {
    const depth = Math.random()
    const isMacro = i < macroN
    const vy = -(0.022 + Math.random() * 0.055) * vs * (isMacro ? 0.55 : 1)
    const vx = (Math.random() - 0.5) * 0.048 * vs * (isMacro ? 0.65 : 1)
    const baseR = isMacro ? 1.15 + Math.random() * 1.35 : 0.35 + Math.random() * 0.75
    out.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx,
      vy,
      r: baseR * (0.55 + depth * 0.5) * (isMacro ? 1 : 0.85),
      tw: Math.random() * Math.PI * 2,
      twSpeed: (0.006 + Math.random() * 0.016) * vs * (isMacro ? 0.7 : 1),
      drift: (Math.random() - 0.5) * 0.012 * vs,
      hue: Math.random(),
      depth,
      macro: isMacro,
    })
  }
  return out
}

function paintParticles(ctx, particles, w, h, lighter) {
  ctx.clearRect(0, 0, w, h)
  const prev = ctx.globalCompositeOperation
  if (lighter) {
    ctx.globalCompositeOperation = 'lighter'
  }
  for (let i = 0; i < particles.length; i += 1) {
    const p = particles[i]
    const twinkle = 0.38 + Math.sin(p.tw) * 0.34
    const macroBoost = p.macro ? 1.45 : 1
    const baseA = twinkle * (0.14 + p.hue * 0.18) * (0.42 + p.depth * 0.52) * macroBoost
    if (p.hue < 0.34) {
      ctx.fillStyle = `rgba(236, 224, 200, ${Math.min(0.85, baseA)})`
    } else if (p.hue < 0.67) {
      ctx.fillStyle = `rgba(165, 188, 245, ${Math.min(0.85, baseA)})`
    } else {
      ctx.fillStyle = `rgba(205, 188, 248, ${Math.min(0.85, baseA)})`
    }
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.globalCompositeOperation = prev
}

/**
 * Dense drifting starfield dust + macro motes; pointer parallax on canvas wrap.
 * @param {{ reducedMotion: boolean, anchorRef: import('react').RefObject<HTMLElement | null> }} props
 */
export function HeroCosmos({ reducedMotion, anchorRef }) {
  const canvasRef = useRef(null)
  const wrapRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    const anchor = anchorRef?.current
    if (!canvas || !wrap || !anchor) return undefined

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return undefined

    let raf = 0
    let particles = []
    let w = 1
    let h = 1
    let targetTx = 0
    let targetTy = 0
    let tx = 0
    let ty = 0
    let moveTick = 0

    const resize = () => {
      const rect = anchor.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = Math.max(1, Math.floor(rect.width))
      h = Math.max(1, Math.floor(rect.height))
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      particles = initParticles(w, h, particleCount())
    }

    const ro = new ResizeObserver(() => {
      resize()
    })
    ro.observe(anchor)
    resize()

    const onPointerMove = (e) => {
      const r = anchor.getBoundingClientRect()
      if (r.width < 1 || r.height < 1) return
      const nx = (e.clientX - r.left) / r.width - 0.5
      const ny = (e.clientY - r.top) / r.height - 0.5
      targetTx = clamp(nx, -0.5, 0.5) * 18
      targetTy = clamp(ny, -0.5, 0.5) * 13
      anchor.style.setProperty('--hero-mx', String(nx * 1.55))
      anchor.style.setProperty('--hero-my', String(ny * 1.45))
    }

    const onPointerLeave = () => {
      targetTx = 0
      targetTy = 0
      anchor.style.setProperty('--hero-mx', '0')
      anchor.style.setProperty('--hero-my', '0')
    }

    anchor.addEventListener('pointermove', onPointerMove)
    anchor.addEventListener('pointerleave', onPointerLeave)

    const tick = () => {
      if (document.visibilityState === 'hidden') {
        raf = 0
        return
      }

      tx += (targetTx - tx) * 0.048
      ty += (targetTy - ty) * 0.048
      wrap.style.transform = `translate3d(${tx}px, ${ty}px, 0)`

      moveTick += 1
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i]
        p.x += p.vx + p.drift * Math.sin(moveTick * 0.0016 + i)
        p.y += p.vy
        p.tw += p.twSpeed
        if (p.x < -14) p.x = w + 14
        if (p.x > w + 14) p.x = -14
        if (p.y < -14) p.y = h + 14
        if (p.y > h + 14) p.y = -14
      }

      paintParticles(ctx, particles, w, h, useLighterComposite())
      raf = requestAnimationFrame(tick)
    }

    const tickReduced = () => {
      tx += (targetTx - tx) * 0.035
      ty += (targetTy - ty) * 0.035
      wrap.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i]
        p.tw += p.twSpeed * 0.2
      }
      paintParticles(ctx, particles, w, h, false)
      raf = requestAnimationFrame(tickReduced)
    }

    if (reducedMotion) {
      raf = requestAnimationFrame(tickReduced)
    } else {
      raf = requestAnimationFrame(tick)
    }

    const onVisibility = () => {
      if (document.visibilityState === 'visible') {
        resize()
        if (!raf) {
          raf = requestAnimationFrame(reducedMotion ? tickReduced : tick)
        }
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(raf)
      raf = 0
      ro.disconnect()
      anchor.removeEventListener('pointermove', onPointerMove)
      anchor.removeEventListener('pointerleave', onPointerLeave)
      document.removeEventListener('visibilitychange', onVisibility)
      wrap.style.transform = ''
      anchor.style.removeProperty('--hero-mx')
      anchor.style.removeProperty('--hero-my')
    }
  }, [reducedMotion, anchorRef])

  return (
    <div className={`hero-cosmos${reducedMotion ? ' hero-cosmos--reduced' : ''}`} aria-hidden>
      <div className="hero-cosmos__wrap" ref={wrapRef}>
        <canvas ref={canvasRef} className="hero-cosmos__canvas" />
      </div>
    </div>
  )
}
