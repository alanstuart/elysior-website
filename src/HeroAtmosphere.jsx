/**
 * Hero backdrop: deep space gradient + a few subtle floating gas/nebula blobs
 * and a soft vignette. Pointer-events disabled and absolutely positioned so it
 * never affects layout width or interactivity.
 */
export function HeroAtmosphere({ reducedMotion }) {
  const rm = reducedMotion ? ' hero-atmosphere--reduced' : ''
  return (
    <div className={`hero-atmosphere${rm}`} aria-hidden>
      <div className="hero__spacebase" />
      <div className="hero__gradient" />
      <div className="hero__gas">
        <div className="hero__gasBlob hero__gasBlob--1" />
        <div className="hero__gasBlob hero__gasBlob--2" />
        <div className="hero__gasBlob hero__gasBlob--3" />
        <div className="hero__gasBlob hero__gasBlob--4" />
      </div>
      <div className="hero__vignette" />
    </div>
  )
}
