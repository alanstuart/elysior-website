import { useEffect, useRef } from 'react'

function clamp(n, lo, hi) {
  return Math.max(lo, Math.min(hi, n))
}

function particleCount() {
  if (typeof window === 'undefined') return 72
  if (window.matchMedia('(max-width: 639px)').matches) return 34
  if (window.matchMedia('(max-width: 1023px)').matches) return 68
  return 96
}

function velocityScale() {
  if (typeof window === 'undefined') return 1
  if (window.matchMedia('(max-width: 639px)').matches) return 0.5
  if (window.matchMedia('(max-width: 1023px)').matches) return 0.72
  return 1
}

function initParticles(w, h, n) {
  const vs = velocityScale()
  const out = []
  for (let i = 0; i < n; i += 1) {
    const depth = Math.random()
    out.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.12 * vs,
      vy: (Math.random() - 0.5) * 0.12 * vs,
      r: (Math.random() * 1.1 + 0.2) * (0.65 + depth * 0.55),
      tw: Math.random() * Math.PI * 2,
      twSpeed: (0.008 + Math.random() * 0.018) * vs,
      hue: Math.random(),
      depth,
    })
  }
  return out
}

/**
 * Nebula dust + pointer parallax; disabled when `reducedMotion` is true.
 * @param {{ reducedMotion: boolean, anchorRef: import('react').RefObject<HTMLElement | null> }} props
 */
export function HeroCosmos({ reducedMotion, anchorRef }) {
  const canvasRef = useRef(null)
  const wrapRef = useRef(null)

  useEffect(() => {
    if (reducedMotion) return undefined
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
      targetTy = clamp(ny, -0.5, 0.5) * 12
      anchor.style.setProperty('--hero-mx', String(nx * 2))
      anchor.style.setProperty('--hero-my', String(ny * 2))
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

      tx += (targetTx - tx) * 0.065
      ty += (targetTy - ty) * 0.065
      wrap.style.transform = `translate3d(${tx}px, ${ty}px, 0)`

      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < -8) p.x = w + 8
        if (p.x > w + 8) p.x = -8
        if (p.y < -8) p.y = h + 8
        if (p.y > h + 8) p.y = -8

        p.tw += p.twSpeed
        const twinkle = 0.32 + Math.sin(p.tw) * 0.38
        const baseA = twinkle * (0.16 + p.hue * 0.32) * (0.55 + p.depth * 0.55)
        if (p.hue < 0.34) {
          ctx.fillStyle = `rgba(243, 230, 204, ${baseA})`
        } else if (p.hue < 0.67) {
          ctx.fillStyle = `rgba(186, 200, 255, ${baseA})`
        } else {
          ctx.fillStyle = `rgba(210, 190, 252, ${baseA})`
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)

    const onVisibility = () => {
      if (document.visibilityState === 'visible') {
        resize()
        if (!raf) raf = requestAnimationFrame(tick)
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

  if (reducedMotion) return null

  return (
    <div className="hero-cosmos" aria-hidden>
      <div className="hero-cosmos__wrap" ref={wrapRef}>
        <canvas ref={canvasRef} className="hero-cosmos__canvas" />
      </div>
    </div>
  )
}
