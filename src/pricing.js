/**
 * Public GBP starting prices for the #precios section.
 * Edit amounts here. English and Spanish share the same tiers.
 */
const packages = {
  en: {
    lead: "Transparent GBP starting points. Every project can adapt to your business's size, budget and goals.",
    badge: 'Recommended',
    cta: 'Book a free strategy call',
    packages: [
      {
        name: 'Launch',
        price: 'From £990',
        monthly: 'one-off',
        blurb: 'A premium landing page or small multi-page site for UK businesses that need a clear online presence.',
        features: [
          'Premium landing page or small multi-page site',
          'Responsive design',
          'Contact form',
          'WhatsApp button',
          'Basic SEO',
          'Speed optimisation',
        ],
        ctaKind: 'strategy',
        highlighted: false,
      },
      {
        name: 'Growth System',
        price: 'From £1,990',
        monthly: '£199/month — hosting, updates and chatbot maintenance',
        blurb: 'A multi-page website and lead system for UK businesses ready to capture enquiries.',
        features: [
          'Multi-page website',
          'Google Ads landing page',
          'Conversion copywriting',
          'Lead capture forms',
          'Analytics setup',
          'Calendar booking (Cal.com)',
          'FAQ and lead-capture chatbot',
        ],
        ctaKind: 'strategy',
        highlighted: true,
      },
      {
        name: 'Elysior Elite',
        price: 'From £3,990',
        monthly: '£399/month — ad spend is paid separately by the client',
        blurb: 'Everything in Growth, plus an initial Google Ads campaign setup. Setup only, not ongoing management.',
        features: [
          'Everything in Growth System',
          'Initial Google Ads campaign setup',
          'Setup only, not ongoing management',
        ],
        ctaKind: 'project',
        highlighted: false,
      },
    ],
  },
  es: {
    lead: 'Puntos de partida transparentes en GBP. Cada proyecto puede adaptarse al tamaño, presupuesto y objetivos de tu negocio.',
    badge: 'Recomendado',
    cta: 'Reservar una llamada de estrategia gratuita',
    packages: [
      {
        name: 'Launch',
        price: 'Desde £990',
        monthly: 'pago único',
        blurb: 'Una landing page premium o un sitio pequeño de varias páginas para empresas del Reino Unido.',
        features: [
          'Landing page premium o sitio pequeño de varias páginas',
          'Diseño adaptable',
          'Formulario de contacto',
          'Botón de WhatsApp',
          'SEO básico',
          'Optimización de velocidad',
        ],
        ctaKind: 'strategy',
        highlighted: false,
      },
      {
        name: 'Growth System',
        price: 'Desde £1,990',
        monthly: '£199/mes — hosting, actualizaciones y mantenimiento del chatbot',
        blurb: 'Un sitio de varias páginas y un sistema de captación para empresas del Reino Unido.',
        features: [
          'Sitio web de varias páginas',
          'Landing page para Google Ads',
          'Copywriting de conversión',
          'Formularios de captación',
          'Configuración de analítica',
          'Reserva en calendario (Cal.com)',
          'Chatbot de preguntas frecuentes y captación',
        ],
        ctaKind: 'strategy',
        highlighted: true,
      },
      {
        name: 'Elysior Elite',
        price: 'Desde £3,990',
        monthly: '£399/mes — la inversión publicitaria la paga el cliente',
        blurb: 'Todo lo de Growth, más la configuración inicial de una campaña de Google Ads. Solo la configuración, no la gestión continua.',
        features: [
          'Todo lo incluido en Growth System',
          'Configuración inicial de una campaña de Google Ads',
          'Solo configuración, no gestión continua',
        ],
        ctaKind: 'project',
        highlighted: false,
      },
    ],
  },
}

export function getPricing(lang) {
  return packages[lang] || packages.en
}
