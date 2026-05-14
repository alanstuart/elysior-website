/**
 * GA4-ready dataLayer + optional gtag bootstrap (loads only when VITE_GA_MEASUREMENT_ID is set).
 * CTA events use delegated click capture so anchors stay unchanged visually.
 */

const DL_KEY = 'dataLayer'

function ensureDataLayer() {
  if (typeof window === 'undefined') return
  window[DL_KEY] = window[DL_KEY] || []
}

/**
 * @param {Record<string, unknown>} payload
 */
export function pushDataLayer(payload) {
  ensureDataLayer()
  window[DL_KEY].push(payload)
}

let gaInitStarted = false

export function initGoogleAnalytics() {
  if (gaInitStarted || typeof document === 'undefined') return
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID
  if (!id || typeof id !== 'string' || !id.trim()) return
  gaInitStarted = true
  ensureDataLayer()
  const w = window
  w.gtag = function gtag() {
    w[DL_KEY].push(arguments)
  }
  w.gtag('js', new Date())
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`
  script.dataset.elysiorGa = id
  script.onload = () => {
    w.gtag('config', id, {
      send_page_view: true,
      anonymize_ip: true,
    })
  }
  document.head.appendChild(script)
}

/** @param {string} href */
function inferCtaFromHref(href) {
  if (!href || typeof href !== 'string') return null
  const h = href.trim()
  if (h.includes('cal.com/elysior/strategy-call')) {
    return { cta_type: 'cal_strategy_call', cta_flow: 'booking', link_domain: 'cal.com' }
  }
  if (h.includes('cal.com/elysior/project-consultation')) {
    return { cta_type: 'cal_project_consultation', cta_flow: 'booking', link_domain: 'cal.com' }
  }
  if (h.includes('wa.me')) {
    return { cta_type: 'whatsapp', cta_flow: 'messaging', link_domain: 'wa.me' }
  }
  if (h.startsWith('mailto:')) {
    return { cta_type: 'email', cta_flow: 'contact', link_domain: 'mailto' }
  }
  if (h === '#lead' || h.endsWith('#lead')) {
    return { cta_type: 'lead_form_anchor', cta_flow: 'lead', link_domain: 'onsite' }
  }
  return null
}

/**
 * Delegated capture-phase listener: tracks qualifying outbound / conversion anchors.
 */
export function attachCtaClickTracking() {
  if (typeof document === 'undefined') return () => {}
  const onClick = (e) => {
    const t = e.target
    if (!(t instanceof Element)) return
    const a = t.closest('a[href]')
    if (!(a instanceof HTMLAnchorElement)) return
    const inferred = inferCtaFromHref(a.getAttribute('href') || '')
    if (!inferred) return
    pushDataLayer({
      event: 'cta_click',
      event_category: 'engagement',
      event_label: inferred.cta_type,
      ...inferred,
      page_path: typeof window !== 'undefined' ? window.location.pathname + window.location.search : '',
    })
  }
  document.addEventListener('click', onClick, true)
  return () => document.removeEventListener('click', onClick, true)
}

/**
 * @param {Record<string, unknown>} [extra]
 */
export function trackLeadFormSuccess(extra = {}) {
  pushDataLayer({
    event: 'generate_lead',
    event_category: 'conversion',
    event_label: 'lead_form',
    ...extra,
  })
}
