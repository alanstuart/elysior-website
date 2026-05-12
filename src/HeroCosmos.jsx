import { useEffect, useRef } from 'react'

function clamp(n, lo, hi) {
  return Math.max(lo, Math.min(hi, n))
}

function particleCount() {
  if (typeof window === 'undefined') return 48
  if (window.matchMedia('(max-width: 639px)').matches) return 28
  if (window.matchMedia('(max-width: 1023px)').matches) return 38
  return 48
}

function velocityScale() {
  if (typeof window === 'undefined') return 1
  if (window.matchMedia('(max-width: 639px)').matches) return 0.55
  if (window.matchMedia('(max-width: 1023px)').matches) return 0.72
  return 1
}

function initParticles(w, h, n) {
  const vs = velocityScale()
  const out = []
  for (let i = 0; i < n; i += 1) {
    const depth = Math.random()
    const vy = -(0.018 + Math.random() * 0.04) * vs
    const vx = (Math.random() - 0.5) * 0.035 * vs
    out.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx,
      vy,
      r: (Math.random() * 0.85 + 0.18) * (0.65 + depth * 0.45),
      tw: Math.random() * Math.PI * 2,
      twSpeed: (0.004 + Math.random() * 0.01) * vs,
      drift: (Math.random() - 0.5) * 0.006 * vs,
      hue: Math.random(),
      depth,
    })
  }
  return out
}

function paintParticles(ctx, particles, w, h) {
  ctx.clearRect(0, 0, w, h)
  for (let i = 0; i < particles.length; i += 1) {
    const p = particles[i]
    const twinkle = 0.35 + Math.sin(p.tw) * 0.28
    const baseA = twinkle * (0.12 + p.hue * 0.14) * (0.45 + p.depth * 0.45)
    if (p.hue < 0.34) {
      ctx.fillStyle = `rgba(230, 218, 190, ${baseA})`
    } else if (p.hue < 0.67) {
      ctx.fillStyle = `rgba(170, 186, 230, ${baseA})`
    } else {
      ctx.fillStyle = `rgba(198, 184, 232, ${baseA})`
    }
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
    ctx.fill()
  }
}

/**
 * Soft drifting dust; gentle pointer parallax on canvas wrap.
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
      targetTx = clamp(nx, -0.5, 0.5) * 12
      targetTy = clamp(ny, -0.5, 0.5) * 9
      anchor.style.setProperty('--hero-mx', String(nx * 1.4))
      anchor.style.setProperty('--hero-my', String(ny * 1.4))
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

      tx += (targetTx - tx) * 0.04
      ty += (targetTy - ty) * 0.04
      wrap.style.transform = `translate3d(${tx}px, ${ty}px, 0)`

      moveTick += 1
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i]
        p.x += p.vx + p.drift * Math.sin(moveTick * 0.0012 + i)
        p.y += p.vy
        p.tw += p.twSpeed
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10
      }

      paintParticles(ctx, particles, w, h)
      raf = requestAnimationFrame(tick)
    }

    const tickReduced = () => {
      tx += (targetTx - tx) * 0.03
      ty += (targetTy - ty) * 0.03
      wrap.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i]
        p.tw += p.twSpeed * 0.18
      }
      paintParticles(ctx, particles, w, h)
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
