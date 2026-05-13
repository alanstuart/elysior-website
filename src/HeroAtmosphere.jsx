import { HeroCosmos } from './HeroCosmos.jsx'

/**
 * Cinematic hero backdrop: layered gas nebula, aurora, volumetric beams,
 * depth fog, star haze, canvas motes. Pointer parallax via `--hero-mx` / `--hero-my` (HeroCosmos).
 */
export function HeroAtmosphere({ anchorRef, reducedMotion }) {
  const rm = reducedMotion ? ' hero-atmosphere--reduced' : ''
  return (
    <div className={`hero-atmosphere${rm}`} aria-hidden>
      <div className="hero__spacebase" />
      <div className="hero__gradient" />

      <div className="hero__depth hero__depth--far">
        <div className="hero__gas">
          <div className="hero__gasBlob hero__gasBlob--1" />
          <div className="hero__gasBlob hero__gasBlob--2" />
          <div className="hero__gasBlob hero__gasBlob--3" />
          <div className="hero__gasBlob hero__gasBlob--4" />
          <div className="hero__gasBlob hero__gasBlob--5" />
          <div className="hero__gasBlob hero__gasBlob--6" />
          <div className="hero__gasBlob hero__gasBlob--7" />
        </div>
      </div>

      <div className="hero__depth hero__depth--aurora">
        <div className="hero__aurora">
          <div className="hero__aurora-band hero__aurora-band--1" />
          <div className="hero__aurora-band hero__aurora-band--2" />
        </div>
      </div>

      <div className="hero__beams">
        <div className="hero__beam hero__beam--1" />
        <div className="hero__beam hero__beam--2" />
        <div className="hero__beam hero__beam--3" />
      </div>

      <div className="hero__depth hero__depth--stars">
        <div className="hero__starfield">
          <div className="hero__stars hero__stars--deep" />
          <div className="hero__stars hero__stars--mid" />
          <div className="hero__stars hero__stars--near" />
        </div>
      </div>

      <div className="hero__haze" />
      <div className="hero__fog hero__fog--deep" />
      <div className="hero__parallaxGlow" />
      <HeroCosmos reducedMotion={reducedMotion} anchorRef={anchorRef} />
      <div className="hero__fog hero__fog--lift" />

      <div className="hero__glassField">
        <span className="hero__glassOrb hero__glassOrb--a" />
        <span className="hero__glassOrb hero__glassOrb--b" />
        <span className="hero__glassOrb hero__glassOrb--c" />
      </div>

      <div className="hero__vignette" />
    </div>
  )
}
