import { HeroCosmos } from './HeroCosmos.jsx'

/**
 * Futuristic space hero backdrop: gas nebula, dual aurora, horizon grid, haze, stars, canvas dust.
 * Pointer parallax: `--hero-mx` / `--hero-my` on the anchor (see HeroCosmos).
 */
export function HeroAtmosphere({ anchorRef, reducedMotion }) {
  return (
    <>
      <div className="hero__spacebase" aria-hidden />
      <div className="hero__gradient" aria-hidden />
      <div className="hero__gas" aria-hidden>
        <div className="hero__gasBlob hero__gasBlob--1" />
        <div className="hero__gasBlob hero__gasBlob--2" />
        <div className="hero__gasBlob hero__gasBlob--3" />
        <div className="hero__gasBlob hero__gasBlob--4" />
        <div className="hero__gasBlob hero__gasBlob--5" />
        <div className="hero__gasBlob hero__gasBlob--6" />
      </div>
      <div className="hero__aurora" aria-hidden>
        <div className="hero__aurora-band hero__aurora-band--1" />
        <div className="hero__aurora-band hero__aurora-band--2" />
      </div>
      <div className="hero__horizon" aria-hidden />
      <div className="hero__haze" aria-hidden />
      <div className="hero__starfield" aria-hidden>
        <div className="hero__stars hero__stars--deep" />
        <div className="hero__stars hero__stars--mid" />
        <div className="hero__stars hero__stars--near" />
      </div>
      <div className="hero__parallaxGlow" aria-hidden />
      <HeroCosmos reducedMotion={reducedMotion} anchorRef={anchorRef} />
      <div className="hero__vignette" aria-hidden />
    </>
  )
}
