import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
/**
 * Multilingual copy: full `TRANSLATIONS` / `getCopy` live in `./elysiorTranslations.js`
 * (same project, imported here per maintainability).
 */
import { getCopy, LANG_CODES, LANG_STORAGE_KEY } from './elysiorTranslations.js'
import { HeroAtmosphere } from './HeroAtmosphere.jsx'
import {
  attachCtaClickTracking,
  initGoogleAnalytics,
  trackLeadFormSuccess,
} from './analytics.js'

const WHATSAPP_PREFILL = 'Hola, quiero más información sobre sus servicios.'
const WHATSAPP_URL = `https://wa.me/50660256080?text=${encodeURIComponent(WHATSAPP_PREFILL)}`
const WHATSAPP_LINK_REL = 'noopener noreferrer'
const CONTACT_EMAIL = 'contact@elysiorglobal.com'
const CAL_STRATEGY = 'https://cal.com/elysior/strategy-call'
const CAL_PROJECT = 'https://cal.com/elysior/project-consultation'
const CAL_LINK_REL = 'noopener noreferrer'

function calHref(kind) {
  return kind === 'project' ? CAL_PROJECT : CAL_STRATEGY
}
const HERO_MOTION_VIDEO_SRC =
  'https://res.cloudinary.com/dxkathdnc/video/upload/q_auto:eco,f_auto,w_1200/v1778717928/hero-motion_uzxyws.mp4'
/** Mobile hero background: 1080-wide transcode for sharper retina cover (still q_auto:eco). */
const HERO_MOTION_VIDEO_SRC_MOBILE =
  'https://res.cloudinary.com/dxkathdnc/video/upload/q_auto:eco,f_auto,w_1080/v1778717928/hero-motion_uzxyws.mp4'
/** First-frame still from the same Cloudinary asset (poster / reduced motion). */
const HERO_MOTION_POSTER_SRC =
  'https://res.cloudinary.com/dxkathdnc/video/upload/so_0,w_900,h_506,c_fill,q_auto:eco,f_auto/v1778717928/hero-motion_uzxyws.jpg'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqengele'
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61586996964376'
const INSTAGRAM_URL = 'https://www.instagram.com/elysiorglobal/'
const EXTERNAL_LINK_REL = 'noopener noreferrer'

function SocialLinks({ className = '' }) {
  return (
    <div className={`social-links${className ? ` ${className}` : ''}`}>
      <a
        href={FACEBOOK_URL}
        className="social-links__item"
        target="_blank"
        rel={EXTERNAL_LINK_REL}
      >
        <svg className="social-links__icon social-links__icon--fb" viewBox="0 0 24 24" aria-hidden>
          <path
            fill="currentColor"
            d="M24 12.073C24 5.446 18.627 0 12 0S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 22.027 24 17.062 24 12.073z"
          />
        </svg>
        <span className="social-links__label">Facebook</span>
      </a>
      <a
        href={INSTAGRAM_URL}
        className="social-links__item"
        target="_blank"
        rel={EXTERNAL_LINK_REL}
      >
        <svg className="social-links__icon social-links__icon--ig" viewBox="0 0 24 24" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.65" />
          <circle cx="12" cy="12" r="3.35" fill="none" stroke="currentColor" strokeWidth="1.65" />
          <circle cx="17.25" cy="6.75" r="1.1" fill="currentColor" stroke="none" />
        </svg>
        <span className="social-links__label">Instagram</span>
      </a>
    </div>
  )
}

const EMPTY_LEAD_FORM = {
  nombre: '',
  empresa: '',
  email: '',
  tipoNegocio: '',
  presupuesto: '',
  objetivo: '',
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false,
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const fn = () => setReduced(mq.matches)
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])
  return reduced
}

/** Desktop (≥769px): autoplay video in the hero grid column. */
function useHeroMotionVideoEnabled(reducedMotion) {
  const [enabled, setEnabled] = useState(() => {
    if (typeof window === 'undefined') return false
    if (reducedMotion) return false
    return window.matchMedia('(min-width: 769px)').matches
  })
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)')
    const sync = () => setEnabled(mq.matches && !reducedMotion)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [reducedMotion])
  return enabled
}

/** Mobile / narrow (≤768px): background motion layer uses this breakpoint. */
function useHeroMotionPosterMobile() {
  const [active, setActive] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 768px)').matches : false,
  )
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const sync = () => setActive(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])
  return active
}

const MAG_MAX_PX = 10
const MAG_STRENGTH = 0.24

/** Subtle pointer pull on fine pointers only; no-op when `reducedMotion`. */
function MagneticCta({ reducedMotion, className = '', children }) {
  const wrapRef = useRef(null)

  useEffect(() => {
    if (reducedMotion) return undefined
    const wrap = wrapRef.current
    if (!wrap) return undefined
    const inner = wrap.firstElementChild
    if (!(inner instanceof HTMLElement)) return undefined
    if (typeof window.matchMedia === 'function' && window.matchMedia('(pointer: coarse)').matches) {
      return undefined
    }

    const move = (e) => {
      const r = wrap.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = Math.max(-MAG_MAX_PX, Math.min(MAG_MAX_PX, (e.clientX - cx) * MAG_STRENGTH))
      const dy = Math.max(-MAG_MAX_PX, Math.min(MAG_MAX_PX, (e.clientY - cy) * MAG_STRENGTH))
      inner.style.transform = `translate3d(${dx}px, ${dy}px, 0)`
    }
    const leave = () => {
      inner.style.transform = ''
    }
    wrap.addEventListener('pointermove', move)
    wrap.addEventListener('pointerleave', leave)
    return () => {
      wrap.removeEventListener('pointermove', move)
      wrap.removeEventListener('pointerleave', leave)
      inner.style.transform = ''
    }
  }, [reducedMotion])

  return (
    <span ref={wrapRef} className={`magnetic-cta${className ? ` ${className}` : ''}`}>
      {children}
    </span>
  )
}

function LanguageSwitcher({ lang, setLang, copy, className = '', onPick }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [open])

  const options = [
    { code: 'es', label: copy.lang.es },
    { code: 'en', label: copy.lang.en },
    { code: 'pt', label: copy.lang.pt },
    { code: 'fr', label: copy.lang.fr },
  ]

  return (
    <div className={`lang-switcher ${className}`.trim()} ref={ref}>
      <button
        type="button"
        className="lang-switcher__btn"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={copy.lang.label}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="lang-switcher__current">{lang.toUpperCase()}</span>
        <span className="lang-switcher__chev" aria-hidden />
      </button>
      {open ? (
        <ul className="lang-switcher__menu" role="listbox">
          {options.map((o) => (
            <li key={o.code} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={lang === o.code}
                className={`lang-switcher__opt${lang === o.code ? ' lang-switcher__opt--active' : ''}`}
                onClick={() => {
                  setLang(o.code)
                  setOpen(false)
                  onPick?.()
                }}
              >
                {o.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

function App() {
  const reducedMotion = usePrefersReducedMotion()
  const heroMotionVideo = useHeroMotionVideoEnabled(reducedMotion)
  const heroMotionPosterMobile = useHeroMotionPosterMobile()
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'es'
    const s = localStorage.getItem(LANG_STORAGE_KEY)
    return LANG_CODES.includes(s) ? s : 'es'
  })
  const copy = getCopy(lang)

  const [navOpen, setNavOpen] = useState(false)
  const navOpenRef = useRef(false)
  useEffect(() => {
    navOpenRef.current = navOpen
  }, [navOpen])
  const [navScrolled, setNavScrolled] = useState(false)
  const [loaded, setLoaded] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false,
  )
  const [carousel, setCarousel] = useState(0)
  const [carouselPause, setCarouselPause] = useState(false)
  const [faqOpen, setFaqOpen] = useState(null)

  const [form, setForm] = useState({ ...EMPTY_LEAD_FORM })
  /** @type {null | 'loading' | 'success' | 'error'} */
  const [formStatus, setFormStatus] = useState(null)
  const formGotchaRef = useRef(null)
  const successCloseRef = useRef(null)
  const heroRef = useRef(null)

  const langRef = useRef(lang)
  useEffect(() => {
    langRef.current = lang
  }, [lang])

  const changeLang = useCallback((code) => {
    if (langRef.current === code) return
    setLang(code)
    setCarousel(0)
    setFaqOpen(null)
  }, [])

  useEffect(() => {
    localStorage.setItem(LANG_STORAGE_KEY, lang)
    document.documentElement.lang = copy.htmlLang
  }, [lang, copy.htmlLang])

  useEffect(() => {
    initGoogleAnalytics()
    return attachCtaClickTracking()
  }, [])

  useEffect(() => {
    if (reducedMotion) return undefined
    const t = window.setTimeout(() => setLoaded(true), 900)
    return () => window.clearTimeout(t)
  }, [reducedMotion])

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      setNavScrolled(window.scrollY > 32)
    }
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 1200px)').matches) setNavOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [navOpen])

  const testimonialCount = copy.testimonios.items.length

  useEffect(() => {
    if (carouselPause || reducedMotion) return undefined
    const id = window.setInterval(() => {
      setCarousel((i) => (i + 1) % testimonialCount)
    }, 6500)
    return () => window.clearInterval(id)
  }, [carouselPause, reducedMotion, testimonialCount])

  const closeNav = useCallback(() => setNavOpen(false), [])

  const closeSuccessModal = useCallback(() => {
    setFormStatus(null)
  }, [])

  useEffect(() => {
    if (formStatus !== 'success') return undefined
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') closeSuccessModal()
    }
    window.addEventListener('keydown', onKey)
    const t = window.requestAnimationFrame(() => {
      successCloseRef.current?.focus()
    })
    return () => {
      window.cancelAnimationFrame(t)
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = navOpenRef.current ? 'hidden' : ''
    }
  }, [formStatus, closeSuccessModal])

  const onFormChange = (e) => {
    const { name, value } = e.target
    if (formStatus === 'error') setFormStatus(null)
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onFormSubmit = async (e) => {
    e.preventDefault()
    if (formStatus === 'loading') return
    setFormStatus('loading')
    const pickLabel = (rows, val) => rows.find((r) => r.value === val)?.label ?? val
    const utm = {}
    try {
      const sp = new URLSearchParams(window.location.search)
      for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']) {
        const v = sp.get(key)
        if (v) utm[key] = v
      }
    } catch {
      /* ignore */
    }
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: form.nombre.trim(),
          empresa: form.empresa.trim(),
          email: form.email.trim(),
          tipoNegocio: form.tipoNegocio,
          presupuesto: form.presupuesto,
          objetivo: form.objetivo,
          _replyto: form.email.trim(),
          _subject: `ELYSIOR lead — ${form.empresa.trim() || '—'}`,
          _gotcha: formGotchaRef.current?.value ?? '',
          lead_full_name: form.nombre.trim(),
          lead_company: form.empresa.trim(),
          lead_email: form.email.trim(),
          lead_business_type: form.tipoNegocio,
          lead_business_type_label: pickLabel(copy.lead.businessType, form.tipoNegocio),
          lead_budget_tier: form.presupuesto,
          lead_budget_label: pickLabel(copy.lead.budget, form.presupuesto),
          lead_goal: form.objetivo,
          lead_goal_label: pickLabel(copy.lead.objective, form.objetivo),
          marketing_site_language: lang,
          marketing_page_url: typeof window !== 'undefined' ? window.location.href : '',
          marketing_referrer: typeof document !== 'undefined' ? document.referrer || '' : '',
          marketing_form_name: 'elysior_lead_v1',
          marketing_zap_source: 'elysior_website',
          submitted_at: new Date().toISOString(),
          ...utm,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(typeof data.error === 'string' ? data.error : 'submit_failed')
      setForm({ ...EMPTY_LEAD_FORM })
      if (formGotchaRef.current) formGotchaRef.current.value = ''
      setFormStatus('success')
      trackLeadFormSuccess({
        marketing_site_language: lang,
        lead_business_type: form.tipoNegocio,
        lead_budget_tier: form.presupuesto,
        lead_goal: form.objetivo,
      })
    } catch {
      setFormStatus('error')
    }
  }

  const toggleFaq = (i) => setFaqOpen((x) => (x === i ? null : i))

  const t = copy.testimonios.items[carousel]
  const heroWords = copy.hero.titleWords

  return (
    <div className={`landing${loaded ? ' landing--loaded' : ''}`}>
      {!loaded ? (
        <div className="loadscreen" aria-busy="true" aria-live="polite">
          <div className="loadscreen__inner">
            <span className="loadscreen__brand">ELYSIOR</span>
            <div className="loadscreen__track">
              <div className="loadscreen__bar" />
            </div>
            <span className="loadscreen__hint">{copy.loadscreen.hint}</span>
          </div>
        </div>
      ) : null}

      <div className="landing__grain" aria-hidden />
      <div className="landing__vignette" aria-hidden />
      <div className="landing__glow landing__glow--one" aria-hidden />
      <div className="landing__glow landing__glow--two" aria-hidden />
      <div className="landing__glow landing__glow--gold" aria-hidden />
      <div className="landing__grid" aria-hidden />

      <div
        className={`nav-backdrop${navOpen ? ' nav-backdrop--open' : ''}`}
        aria-hidden
        onClick={closeNav}
      />

      <header className={`nav${navScrolled ? ' nav--scrolled' : ''}`}>
        <div className="nav__shell glass-nav">
          <div className="nav__inner">
            <a className="nav__logo" href="#top" onClick={closeNav}>
              <span className="nav__logo-mark">ELYSIOR</span>
            </a>
            <LanguageSwitcher
              lang={lang}
              setLang={changeLang}
              copy={copy}
              className="lang-switcher--desktop"
            />
            <button
              type="button"
              className="nav__toggle"
              aria-expanded={navOpen}
              aria-controls="primary-nav"
              aria-label={copy.nav.menuAria}
              onClick={() => setNavOpen((o) => !o)}
            >
              <span className="nav__toggle-bar" />
              <span className="nav__toggle-bar" />
            </button>
            <nav
              id="primary-nav"
              className={`nav__links${navOpen ? ' nav__links--open' : ''}`}
            >
              <div className="nav__links-lang">
                <LanguageSwitcher
                  lang={lang}
                  setLang={changeLang}
                  copy={copy}
                  className="lang-switcher--mobile"
                  onPick={closeNav}
                />
              </div>
              <a href="#servicios" onClick={closeNav}>
                {copy.nav.services}
              </a>
              <a href="#sistema" onClick={closeNav}>
                {copy.nav.system}
              </a>
              <a href="#industrias" onClick={closeNav}>
                {copy.nav.industries}
              </a>
              <a href="#proyectos" onClick={closeNav}>
                {copy.nav.projects}
              </a>
              <a href="#pagos" onClick={closeNav}>
                {copy.nav.flexibility}
              </a>
              <a href="#precios" onClick={closeNav}>
                {copy.nav.pricing}
              </a>
              <a href="#agenda" onClick={closeNav}>
                {copy.nav.booking}
              </a>
              <a href="#faq" onClick={closeNav}>
                {copy.nav.faq}
              </a>
              <a href="#lead" onClick={closeNav}>
                {copy.nav.contact}
              </a>
              <a
                className="nav__cta"
                href={CAL_STRATEGY}
                target="_blank"
                rel={CAL_LINK_REL}
                onClick={closeNav}
              >
                {copy.nav.ctaProposal}
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="nav-spacer" aria-hidden />

      <main id="top">
        <section ref={heroRef} className="hero section hero--cinema hero--lux">
          <HeroAtmosphere reducedMotion={reducedMotion} />

          {heroMotionPosterMobile && reducedMotion ? (
            <div className="hero__motionPoster" aria-hidden>
              <img
                className="hero__motionPosterImg"
                src={HERO_MOTION_POSTER_SRC}
                alt=""
                width={900}
                height={506}
                decoding="async"
                fetchPriority="low"
              />
              <div className="hero__motionPosterScrim" />
            </div>
          ) : null}
          {heroMotionPosterMobile && !reducedMotion ? (
            <div className="hero__motionMobileVideo" aria-hidden>
              <video
                className="hero__motionMobileVideoEl"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={HERO_MOTION_POSTER_SRC}
                width={900}
                height={506}
                fetchPriority="low"
                disablePictureInPicture
                controls={false}
              >
                <source src={HERO_MOTION_VIDEO_SRC_MOBILE} type="video/mp4" />
              </video>
              <div className="hero__motionPosterScrim" />
            </div>
          ) : null}

          <div className="section__inner hero__shell">
            <div className="hero__inner">
              <p className="eyebrow hero__eyebrow">
                {copy.hero.eyebrow}{' '}
                <span className="eyebrow__en">{copy.hero.eyebrowAccent}</span>
              </p>
              <h1 className="hero__title">{heroWords.join(' ')}</h1>
              <p className="hero__sub">{copy.hero.sub}</p>
              <div className="hero__cta">
                <MagneticCta reducedMotion={reducedMotion}>
                  <a
                    className="btn btn--primary btn--glow btn--heroPrimary magnetic-cta__target"
                    href={CAL_STRATEGY}
                    target="_blank"
                    rel={CAL_LINK_REL}
                  >
                    <span className="btn__shine">{copy.hero.ctaPrimary}</span>
                  </a>
                </MagneticCta>
                <MagneticCta reducedMotion={reducedMotion}>
                  <a
                    className="btn btn--ghost btn--heroGhost magnetic-cta__target"
                    href="#lead"
                  >
                    {copy.hero.ctaSecondary}
                  </a>
                </MagneticCta>
              </div>
            </div>

            {heroMotionVideo ? (
              <div className="hero__motion" aria-hidden>
                <div className="hero__motionFrame">
                  <video
                    className="hero__motionVideo"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    disablePictureInPicture
                    controls={false}
                  >
                    <source src={HERO_MOTION_VIDEO_SRC} type="video/mp4" />
                  </video>
                  <div className="hero__motionOverlay" />
                </div>
              </div>
            ) : null}
          </div>
        </section>

        <section className="section section--trust trust-bar" aria-label={copy.trustBar.aria}>
          <div className="section__inner trust-bar__inner">
            <div className="trust-bar__track">
              {copy.trustBar.items.map((label) => (
                <span key={label} className="trust-bar__item glass">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="problema" className="section section--problem">
          <div className="section__inner problem">
            <div className="problem__copy">
              <p className="eyebrow">{copy.problem.eyebrow}</p>
              <h2 className="section__title section__title--lg">{copy.problem.title}</h2>
              <p className="section__lead">{copy.problem.lead}</p>
              <p className="problem__note">{copy.problem.brandLine}</p>
            </div>
            <div className="problem__panel glass lift-hover">
              <h3 className="problem__panel-title">{copy.problem.panelTitle}</h3>
              <ul className="problem__list">
                {copy.problem.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="sistema" className="section">
          <div className="section__inner">
            <header className="section__head section__head--center">
              <p className="eyebrow eyebrow--center">{copy.sistema.eyebrow}</p>
              <h2 className="section__title">{copy.sistema.title}</h2>
              <p className="section__lead section__lead--center">{copy.sistema.lead}</p>
            </header>
            <div className="cards cards--system">
              {copy.sistema.cards.map((item) => (
                <article
                  key={`${lang}-${item.title}`}
                  className="glass card card--system system-card lift-hover"
                >
                  <span className="card__icon card__icon--gold" aria-hidden>
                    {item.icon}
                  </span>
                  <h3 className="card__title">{item.title}</h3>
                  <p className="card__text">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="servicios" className="section section--tight">
          <div className="section__inner">
            <header className="section__head">
              <p className="eyebrow">{copy.servicios.eyebrow}</p>
              <h2 className="section__title">{copy.servicios.title}</h2>
              <p className="section__lead">{copy.servicios.lead}</p>
            </header>
            <div className="cards cards--8">
              {copy.servicios.cards.map((s) => (
                <article key={`${lang}-${s.title}`} className="glass card lift-hover">
                  <span className="card__icon" aria-hidden>
                    {s.icon}
                  </span>
                  <h3 className="card__title">{s.title}</h3>
                  <p className="card__text">{s.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="industrias" className="section section--tight section--industries">
          <div className="section__inner">
            <header className="section__head section__head--center">
              <p className="eyebrow eyebrow--center">{copy.industrias.eyebrow}</p>
              <h2 className="section__title">{copy.industrias.title}</h2>
              <p className="section__lead section__lead--center">{copy.industrias.lead}</p>
            </header>
            <div className="built-for">
              {copy.industrias.items.map((label) => (
                <div key={`${lang}-${label}`} className="built-for__pill glass lift-hover">
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="section section--portfolio">
          <div className="section__inner">
            <header className="section__head section__head--center">
              <p className="eyebrow eyebrow--center">{copy.portfolio.eyebrow}</p>
              <h2 className="section__title">{copy.portfolio.title}</h2>
              <p className="section__lead section__lead--center">{copy.portfolio.lead}</p>
            </header>
            <div className="portfolio-grid">
              {copy.portfolio.cards.map((c) => (
                <article
                  key={c.key}
                  className="glass portfolio-card lift-hover"
                >
                  <div className="portfolio-card__top">
                    <p className="portfolio-card__category">{c.category}</p>
                    <span className="portfolio-card__badge">{c.badge}</span>
                  </div>
                  <h3 className="portfolio-card__name">{c.name}</h3>
                  <p className="portfolio-card__desc">{c.description}</p>
                  <ul className="portfolio-card__tags">
                    {c.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a
                    className="btn btn--ghost portfolio-card__link"
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {copy.portfolio.viewProject}
                  </a>
                </article>
              ))}
            </div>
            <div className="portfolio-note glass lift-hover">
              <h3 className="portfolio-note__title">{copy.portfolio.noteTitle}</h3>
              <p className="portfolio-note__text">{copy.portfolio.noteBody}</p>
              <a
                className="btn btn--primary btn--glow portfolio-note__cta"
                href={CAL_PROJECT}
                target="_blank"
                rel={CAL_LINK_REL}
              >
                {copy.portfolio.noteCta}
              </a>
            </div>
          </div>
        </section>

        <section id="pagos" className="section section--payments">
          <div className="section__inner">
            <header className="section__head section__head--center">
              <p className="eyebrow eyebrow--center">{copy.pagos.eyebrow}</p>
              <h2 className="section__title">{copy.pagos.title}</h2>
              <p className="section__lead section__lead--center">{copy.pagos.lead}</p>
            </header>
            <div className="flex-payments">
              {copy.pagos.cards.map((item) => (
                <article key={`${lang}-${item.title}`} className="glass payment-card lift-hover">
                  <h3 className="payment-card__title">{item.title}</h3>
                  <p className="payment-card__text">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="precios" className="section section--tight">
          <div className="section__inner">
            <header className="section__head section__head--center">
              <p className="eyebrow eyebrow--center">{copy.precios.eyebrow}</p>
              <h2 className="section__title">{copy.precios.title}</h2>
              <p className="section__lead section__lead--center">{copy.precios.lead}</p>
            </header>
            <div className="cards cards--3 cards--pricing">
              {copy.precios.packages.map((pkg) => (
                <article
                  key={pkg.name}
                  className={`glass pricing-card lift-hover${pkg.highlighted ? ' pricing-card--featured' : ''}`}
                >
                  {pkg.highlighted ? (
                    <span className="pricing-card__badge">{copy.precios.badge}</span>
                  ) : null}
                  <h3 className="pricing-card__name">{pkg.name}</h3>
                  <p className="pricing-card__price">{pkg.price}</p>
                  <p className="pricing-card__blurb">{pkg.blurb}</p>
                  <ul className="pricing-card__list">
                    {pkg.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <a
                    className="btn btn--block btn--primary btn--glow"
                    href={calHref(pkg.ctaKind)}
                    target="_blank"
                    rel={CAL_LINK_REL}
                  >
                    {pkg.ctaLabel}
                  </a>
                </article>
              ))}
            </div>
            <p className="pricing-footnote">
              {copy.precios.footnote}
              <span className="pricing-footnote__en">{copy.precios.footnoteAccent}</span>
            </p>
          </div>
        </section>

        <section id="agenda" className="section section--booking">
          <div className="section__inner booking-section">
            <header className="section__head section__head--center booking-section__head">
              <h2 className="section__title">{copy.booking.title}</h2>
              <p className="section__lead section__lead--center booking-section__subtitle">{copy.booking.lead}</p>
            </header>
            <div className="booking-options">
              <article className="booking-card glass lift-hover">
                <div className="booking-card__sheen" aria-hidden />
                <p className="booking-card__duration">{copy.booking.strategy.duration}</p>
                <h3 className="booking-card__title">{copy.booking.strategy.title}</h3>
                <p className="booking-card__desc">{copy.booking.strategy.description}</p>
                <a
                  className="btn btn--primary btn--glow booking-card__cta"
                  href={CAL_STRATEGY}
                  target="_blank"
                  rel={CAL_LINK_REL}
                >
                  {copy.booking.strategy.cta}
                </a>
              </article>
              <article className="booking-card glass lift-hover booking-card--violet">
                <div className="booking-card__sheen booking-card__sheen--violet" aria-hidden />
                <p className="booking-card__duration">{copy.booking.project.duration}</p>
                <h3 className="booking-card__title">{copy.booking.project.title}</h3>
                <p className="booking-card__desc">{copy.booking.project.description}</p>
                <a
                  className="btn btn--primary btn--glow booking-card__cta"
                  href={CAL_PROJECT}
                  target="_blank"
                  rel={CAL_LINK_REL}
                >
                  {copy.booking.project.cta}
                </a>
              </article>
            </div>
            <div className="booking-trust" role="list">
              {copy.booking.trust.map((label) => (
                <span key={label} className="booking-trust__pill" role="listitem">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="lead" className="section section--lead">
          <div className="section__inner">
            <div className="lead-grid">
              <div className="lead-grid__copy">
                <p className="eyebrow">{copy.lead.eyebrow}</p>
                <h2 className="section__title">{copy.lead.title}</h2>
                <p className="section__lead">{copy.lead.lead}</p>
                <ul className="lead-points">
                  {copy.lead.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="lead-contact-card glass">
                  <a className="lead-contact-card__email" href={`mailto:${CONTACT_EMAIL}`}>
                    {CONTACT_EMAIL}
                  </a>
                  <p className="lead-contact-card__hint">{copy.lead.whatsappNote}</p>
                  <a
                    className="btn btn--ghost btn--sm lead-contact-card__wa"
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel={WHATSAPP_LINK_REL}
                  >
                    {copy.footer.whatsapp}
                  </a>
                </div>
                <SocialLinks className="social-links--lead" />
              </div>
              <form
                className="lead-form glass"
                onSubmit={onFormSubmit}
                noValidate
                aria-busy={formStatus === 'loading'}
              >
                <input
                  ref={formGotchaRef}
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="lead-form__hp"
                />
                <div className="lead-form__grid">
                  <label className="field">
                    <span className="field__label">{copy.lead.labels.nombre}</span>
                    <input
                      className="field__input"
                      name="nombre"
                      autoComplete="name"
                      value={form.nombre}
                      onChange={onFormChange}
                      disabled={formStatus === 'loading'}
                      required
                    />
                  </label>
                  <label className="field">
                    <span className="field__label">{copy.lead.labels.empresa}</span>
                    <input
                      className="field__input"
                      name="empresa"
                      autoComplete="organization"
                      value={form.empresa}
                      onChange={onFormChange}
                      disabled={formStatus === 'loading'}
                      required
                    />
                  </label>
                  <label className="field field--full">
                    <span className="field__label">{copy.lead.labels.email}</span>
                    <input
                      className="field__input"
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={onFormChange}
                      disabled={formStatus === 'loading'}
                      required
                    />
                  </label>
                  <label className="field">
                    <span className="field__label">{copy.lead.labels.tipo}</span>
                    <select
                      className="field__input field__select"
                      name="tipoNegocio"
                      value={form.tipoNegocio}
                      onChange={onFormChange}
                      disabled={formStatus === 'loading'}
                      required
                    >
                      {copy.lead.businessType.map((o) => (
                        <option key={o.value || 'placeholder'} value={o.value} disabled={o.value === ''}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="field">
                    <span className="field__label">{copy.lead.labels.presupuesto}</span>
                    <select
                      className="field__input field__select"
                      name="presupuesto"
                      value={form.presupuesto}
                      onChange={onFormChange}
                      disabled={formStatus === 'loading'}
                      required
                    >
                      {copy.lead.budget.map((o) => (
                        <option key={o.value || 'placeholder'} value={o.value} disabled={o.value === ''}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="field field--full">
                    <span className="field__label">{copy.lead.labels.objetivo}</span>
                    <select
                      className="field__input field__select"
                      name="objetivo"
                      value={form.objetivo}
                      onChange={onFormChange}
                      disabled={formStatus === 'loading'}
                      required
                    >
                      {copy.lead.objective.map((o) => (
                        <option key={o.value || 'placeholder'} value={o.value} disabled={o.value === ''}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn--primary btn--block btn--glow"
                  disabled={formStatus === 'loading'}
                >
                  {formStatus === 'loading' ? (
                    <>
                      <span className="btn__spinner" aria-hidden />
                      <span>{copy.lead.submitting}</span>
                    </>
                  ) : (
                    copy.lead.submit
                  )}
                </button>
                {formStatus === 'error' ? (
                  <p className="form-feedback form-feedback--error" role="alert">
                    {copy.lead.error}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </section>

        <section
          id="testimonios"
          className="section section--testimonials"
          onMouseEnter={() => setCarouselPause(true)}
          onMouseLeave={() => setCarouselPause(false)}
        >
          <div className="section__inner">
            <header className="section__head section__head--center">
              <p className="eyebrow eyebrow--center">{copy.testimonios.eyebrow}</p>
              <h2 className="section__title">{copy.testimonios.title}</h2>
              <p className="section__lead section__lead--center">{copy.testimonios.lead}</p>
            </header>
            <div className="carousel glass lift-hover">
              <blockquote className="carousel__quote">
                <p className="carousel__text" key={`${lang}-${t.name}`}>
                  “{t.quote}”
                </p>
                <footer className="carousel__foot">
                  <span className="carousel__name">{t.name}</span>
                  <span className="carousel__role">{t.role}</span>
                </footer>
              </blockquote>
              <div className="carousel__controls">
                <button
                  type="button"
                  className="carousel__arrow"
                  aria-label={copy.testimonios.prevAria}
                  onClick={() =>
                    setCarousel((i) => (i - 1 + testimonialCount) % testimonialCount)
                  }
                >
                  ‹
                </button>
                <div className="carousel__dots">
                  {copy.testimonios.items.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`carousel__dot${i === carousel ? ' carousel__dot--on' : ''}`}
                      aria-label={`${copy.testimonios.dotAria} ${i + 1}`}
                      aria-current={i === carousel}
                      onClick={() => setCarousel(i)}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className="carousel__arrow"
                  aria-label={copy.testimonios.nextAria}
                  onClick={() => setCarousel((i) => (i + 1) % testimonialCount)}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section section--tight">
          <div className="section__inner">
            <header className="section__head section__head--center">
              <p className="eyebrow eyebrow--center">{copy.faq.eyebrow}</p>
              <h2 className="section__title">{copy.faq.title}</h2>
              <p className="section__lead section__lead--center">
                {copy.faq.leadPrefix}
                <span className="subtle-en">{copy.faq.leadAccent}</span>
              </p>
            </header>
            <div className="faq">
              {copy.faq.items.map((item, i) => {
                const open = faqOpen === i
                return (
                  <div key={i} className={`faq__item glass${open ? ' faq__item--open' : ''}`}>
                    <button
                      type="button"
                      className="faq__q"
                      aria-expanded={open}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => toggleFaq(i)}
                    >
                      <span>{item.q}</span>
                      <span className="faq__icon" aria-hidden />
                    </button>
                    <div className={`faq__a-wrap${open ? ' faq__a-wrap--open' : ''}`}>
                      <div className="faq__a-inner" id={`faq-panel-${i}`}>
                        <p className="faq__a">{item.a}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="cierre" className="section section--cta">
          <div className="section__inner">
            <div className="glass cta-panel lift-hover">
              <p className="eyebrow eyebrow--center">{copy.cierre.eyebrow}</p>
              <h2 className="cta-panel__title">{copy.cierre.title}</h2>
              <p className="cta-panel__text">{copy.cierre.text}</p>
              <div className="cta-panel__actions">
                <a
                  className="btn btn--primary btn--lg btn--glow"
                  href={CAL_STRATEGY}
                  target="_blank"
                  rel={CAL_LINK_REL}
                >
                  {copy.cierre.ctaPrimary}
                </a>
                <a className="btn btn--ghost btn--lg" href={`mailto:${CONTACT_EMAIL}`}>
                  {copy.cierre.ctaEmail}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <span className="footer__logo">ELYSIOR</span>
            <p className="footer__tagline">{copy.footer.tagline}</p>
            <p className="footer__geo-line">{copy.footer.geoLine}</p>
            <div className="footer__social">
              <SocialLinks />
            </div>
            <a className="footer__email" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            <a
              className="footer__wa btn btn--ghost btn--sm"
              href={WHATSAPP_URL}
              target="_blank"
              rel={WHATSAPP_LINK_REL}
            >
              {copy.footer.whatsapp}
            </a>
          </div>
          <div className="footer__cols">
            <div>
              <span className="footer__label">{copy.footer.map}</span>
              <ul className="footer__list">
                <li>
                  <a href="#servicios">{copy.footer.nav.servicios}</a>
                </li>
                <li>
                  <a href="#sistema">{copy.footer.nav.sistema}</a>
                </li>
                <li>
                  <a href="#industrias">{copy.footer.nav.industrias}</a>
                </li>
                <li>
                  <a href="#proyectos">{copy.footer.nav.proyectos}</a>
                </li>
                <li>
                  <a href="#pagos">{copy.footer.nav.pagos}</a>
                </li>
                <li>
                  <a href="#precios">{copy.footer.nav.precios}</a>
                </li>
                <li>
                  <a href="#agenda">{copy.footer.nav.agenda}</a>
                </li>
                <li>
                  <a href="#testimonios">{copy.footer.nav.testimonios}</a>
                </li>
                <li>
                  <a href="#lead">{copy.footer.nav.contacto}</a>
                </li>
              </ul>
            </div>
            <div>
              <span className="footer__label">{copy.footer.legal}</span>
              <ul className="footer__list">
                <li>
                  <a href="#top">{copy.footer.privacy}</a>
                </li>
                <li>
                  <a href="#top">{copy.footer.terms}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bar">
          <span>
            © {new Date().getFullYear()} ELYSIOR. {copy.footer.rights}
          </span>
        </div>
      </footer>

      <a
        className="fab-wa"
        href={WHATSAPP_URL}
        target="_blank"
        rel={WHATSAPP_LINK_REL}
        aria-label={copy.fabWa}
      >
        <span className="fab-wa__icon" aria-hidden />
      </a>

      {formStatus === 'success' ? (
        <div
          className="success-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-modal-title"
          aria-describedby="success-modal-desc"
        >
          <button
            type="button"
            className="success-modal__backdrop"
            aria-label={copy.lead.successModal.ariaHeading}
            onClick={closeSuccessModal}
          />
          <div className="success-modal__panel glass">
            <div className="success-modal__ambient" aria-hidden />
            <div className="success-modal__icon" aria-hidden>
              <span className="success-modal__icon-ring" />
              <span className="success-modal__icon-glow" />
              <svg className="success-modal__check" viewBox="0 0 56 56" fill="none" aria-hidden>
                <circle className="success-modal__check-bg" cx="28" cy="28" r="26" />
                <path
                  className="success-modal__check-path"
                  d="M17 29.5L24.5 37L39 21"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 id="success-modal-title" className="success-modal__line1">
              {copy.lead.successModal.line1}
            </h2>
            <p id="success-modal-desc" className="success-modal__line2">
              {copy.lead.successModal.line2}
            </p>
            <button
              ref={successCloseRef}
              type="button"
              className="btn btn--ghost success-modal__close"
              onClick={closeSuccessModal}
            >
              {copy.lead.successModal.close}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default App
