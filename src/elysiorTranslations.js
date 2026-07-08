/**
 * ELYSIOR — multilingual site copy (ES primary).
 * Imported into App.jsx as the single translations source.
 */

const PACK_NAMES = ['FOUNDATION', 'GROWTH SYSTEM', 'ELYSIOR ELITE']

const ICONS_SISTEMA = ['◆', '◎', '✦', '⬡', '◇', '◉']
const ICONS_SERVICES = ['◇', '▢', '◉', '✧', '◈', '⎔', '✦', '◎']

function sistemaCards(es, en, pt, fr) {
  return [
    { es: es[0], en: en[0], pt: pt[0], fr: fr[0] },
    { es: es[1], en: en[1], pt: pt[1], fr: fr[1] },
    { es: es[2], en: en[2], pt: pt[2], fr: fr[2] },
    { es: es[3], en: en[3], pt: pt[3], fr: fr[3] },
    { es: es[4], en: en[4], pt: pt[4], fr: fr[4] },
    { es: es[5], en: en[5], pt: pt[5], fr: fr[5] },
  ].map((row, i) => ({
    icon: ICONS_SISTEMA[i],
    title: { es: row.es.t, en: row.en.t, pt: row.pt.t, fr: row.fr.t },
    description: { es: row.es.d, en: row.en.d, pt: row.pt.d, fr: row.fr.d },
  }))
}

function serviceCards(rows) {
  return rows.map((row, i) => ({
    icon: ICONS_SERVICES[i],
    title: { es: row.es.t, en: row.en.t, pt: row.pt.t, fr: row.fr.t },
    description: { es: row.es.d, en: row.en.d, pt: row.pt.d, fr: row.fr.d },
  }))
}

const SISTEMA_ROWS = sistemaCards(
  [
    { t: 'Presencia Premium', d: 'Diseño, narrativa y detalle que transmiten autoridad desde el primer segundo — sin sensación de plantilla.' },
    { t: 'Captación de Leads', d: 'Formularios y flujos pensados para convertir intención en datos accionables y oportunidades reales.' },
    { t: 'Google Ads Ready', d: 'Estructura, mensajes y páginas alineados con campañas de pago para que cada clic tenga contexto y propósito.' },
    { t: 'Automatización Inteligente', d: 'Reglas y disparadores que mueven cada lead al siguiente paso: seguimiento, CRM o reserva.' },
    { t: 'Seguimiento Profesional', d: 'Rutas claras para responder con rigor, sin perder conversaciones ni oportunidades en el buzón.' },
    { t: 'Optimización Continua', d: 'Mejora sistemática con datos: copy, embudo y rendimiento afinados con criterio de agencia internacional.' },
  ],
  [
    { t: 'Premium Presence', d: 'Design, narrative, and detail that signal authority from the first second — never a template feel.' },
    { t: 'Lead Capture', d: 'Forms and flows built to turn intent into actionable data and real opportunities.' },
    { t: 'Google Ads Ready', d: 'Structure, messaging, and pages aligned with paid campaigns so every click has context and purpose.' },
    { t: 'Smart Automation', d: 'Rules and triggers that move each lead to the next step: follow-up, CRM, or booking.' },
    { t: 'Professional Follow-Up', d: 'Clear paths to respond with discipline — no conversations or opportunities lost in the inbox.' },
    { t: 'Continuous Optimisation', d: 'Systematic improvement from data: copy, funnel, and performance refined with international-grade judgment.' },
  ],
  [
    { t: 'Presença Premium', d: 'Design, narrativa e detalhe que transmitem autoridade desde o primeiro segundo — longe de template.' },
    { t: 'Captação de Leads', d: 'Formulários e fluxos pensados para transformar intenção em dados acionáveis e oportunidades reais.' },
    { t: 'Google Ads Ready', d: 'Estrutura, mensagens e páginas alinhadas a campanhas pagas para que cada clique tenha contexto e propósito.' },
    { t: 'Automação Inteligente', d: 'Regras e gatilhos que levam cada lead ao próximo passo: acompanhamento, CRM ou reserva.' },
    { t: 'Acompanhamento Profissional', d: 'Rotas claras para responder com rigor, sem perder conversas nem oportunidades na caixa de entrada.' },
    { t: 'Otimização Contínua', d: 'Melhoria sistemática com dados: copy, funil e performance afinados com critério de agência internacional.' },
  ],
  [
    { t: 'Présence premium', d: 'Design, récit et détails qui affichent l’autorité dès la première seconde — jamais l’effet « template ».' },
    { t: 'Capture de leads', d: 'Formulaires et parcours pensés pour transformer l’intention en données exploitables et opportunités réelles.' },
    { t: 'Google Ads Ready', d: 'Structure, messages et pages alignés sur le paid pour que chaque clic ait contexte et intention.' },
    { t: 'Automatisation intelligente', d: 'Règles et déclencheurs qui font passer chaque lead à l’étape suivante : suivi, CRM ou réservation.' },
    { t: 'Suivi professionnel', d: 'Des chemins clairs pour répondre avec rigueur — sans perdre fil ou opportunités dans la boîte mail.' },
    { t: 'Optimisation continue', d: 'Amélioration systématique guidée par les données : copy, tunnel et performance affinés avec exigence mondiale.' },
  ],
)

const SERVICE_ROWS = serviceCards([
  {
    es: { t: 'Websites Premium', d: 'Sitios a medida con arquitectura de conversión, rendimiento y una estética que refleja tu nivel.' },
    en: { t: 'Premium Websites', d: 'Tailored sites with conversion architecture, performance, and aesthetics that reflect your level.' },
    pt: { t: 'Websites Premium', d: 'Sites sob medida com arquitetura de conversão, performance e estética que refletem o seu nível.' },
    fr: { t: 'Sites web premium', d: 'Sites sur mesure avec architecture de conversion, performance et esthétique à la hauteur de votre marque.' },
  },
  {
    es: { t: 'Landing Pages', d: 'Páginas enfocadas en una oferta, con prueba social y captura clara para campañas y lanzamientos.' },
    en: { t: 'Landing Pages', d: 'Offer-focused pages with social proof and clear capture for campaigns and launches.' },
    pt: { t: 'Landing Pages', d: 'Páginas focadas numa oferta, com prova social e captura clara para campanhas e lançamentos.' },
    fr: { t: 'Pages d’atterrissage', d: 'Pages centrées sur une offre, avec preuve sociale et capture claire pour campagnes et lancements.' },
  },
  {
    es: { t: 'Google Ads', d: 'Estructura de campañas, creatividad coherente y mediciones para entender qué impulsa resultados.' },
    en: { t: 'Google Ads', d: 'Campaign structure, coherent creative, and measurement to see what drives results.' },
    pt: { t: 'Google Ads', d: 'Estrutura de campanhas, criatividade coerente e medição para entender o que gera resultados.' },
    fr: { t: 'Google Ads', d: 'Structure de campagnes, créations cohérentes et mesure pour comprendre ce qui génère des résultats.' },
  },
  {
    es: { t: 'Diseño Personalizado', d: 'Identidad visual, tipografía y componentes que escalan — sin sensación de plantilla genérica.' },
    en: { t: 'Custom Design', d: 'Visual identity, typography, and components that scale — never a generic template feel.' },
    pt: { t: 'Design Personalizado', d: 'Identidade visual, tipografia e componentes que escalam — sem sensação de template genérico.' },
    fr: { t: 'Design sur mesure', d: 'Identité visuelle, typographie et composants évolutifs — loin du rendu « template ».' },
  },
  {
    es: { t: 'Sistemas con IA', d: 'Asistentes y flujos inteligentes que responden, filtran y agendan con el tono de tu marca.' },
    en: { t: 'AI-Powered Systems', d: 'Smart assistants and flows that answer, qualify, and book in your brand’s tone.' },
    pt: { t: 'Sistemas com IA', d: 'Assistentes e fluxos inteligentes que respondem, qualificam e agendam no tom da sua marca.' },
    fr: { t: 'Systèmes IA', d: 'Assistants et parcours intelligents qui répondent, qualifient et planifient avec le ton de votre marque.' },
  },
  {
    es: { t: 'Automatización de Leads', d: 'Conexión entre formularios, CRM y seguimiento para que cada oportunidad tenga su próximo paso.' },
    en: { t: 'Lead Automation', d: 'Connect forms, CRM, and follow-up so every opportunity has a clear next step.' },
    pt: { t: 'Automação de Leads', d: 'Ligação entre formulários, CRM e acompanhamento para que cada oportunidade tenha o próximo passo.' },
    fr: { t: 'Automatisation des leads', d: 'Relier formulaires, CRM et suivi pour que chaque opportunité ait une étape suivante claire.' },
  },
  {
    es: { t: 'Branding', d: 'Narrativa y elementos visuales alineados para que tu propuesta se entienda en segundos.' },
    en: { t: 'Branding', d: 'Narrative and visual elements aligned so your offer is understood in seconds.' },
    pt: { t: 'Branding', d: 'Narrativa e elementos visuais alinhados para que a sua proposta seja entendida em segundos.' },
    fr: { t: 'Branding', d: 'Récit et éléments visuels alignés pour que votre proposition se comprenne en quelques secondes.' },
  },
  {
    es: { t: 'Optimización de Conversión', d: 'Análisis y ajustes del embudo para reducir fricción y aumentar consultas y ventas calificadas.' },
    en: { t: 'Conversion Optimisation', d: 'Funnel analysis and tweaks to reduce friction and lift qualified enquiries and sales.' },
    pt: { t: 'Otimização de Conversão', d: 'Análise e ajustes do funil para reduzir fricção e aumentar consultas e vendas qualificadas.' },
    fr: { t: 'Optimisation de conversion', d: 'Analyse et ajustements du tunnel pour réduire les frictions et augmenter demandes et ventes qualifiées.' },
  },
])

function pick(lang, bundle) {
  return bundle[lang] || bundle.es
}

function buildCopy(lang) {
  const L = (b) => pick(lang, b)
  return {
    htmlLang: lang === 'es' ? 'es' : lang === 'pt' ? 'pt' : lang === 'fr' ? 'fr' : 'en',
    nav: {
      services: L({ es: 'Servicios', en: 'Services', pt: 'Serviços', fr: 'Services' }),
      system: L({ es: 'Sistema', en: 'System', pt: 'Sistema', fr: 'Système' }),
      industries: L({ es: 'Industrias', en: 'Industries', pt: 'Setores', fr: 'Secteurs' }),
      flexibility: L({ es: 'Flexibilidad', en: 'Flexibility', pt: 'Flexibilidade', fr: 'Flexibilité' }),
      pricing: L({ es: 'Precios', en: 'Pricing', pt: 'Preços', fr: 'Tarifs' }),
      faq: 'FAQ',
      contact: L({ es: 'Contacto', en: 'Contact', pt: 'Contacto', fr: 'Contact' }),
      projects: L({ es: 'Proyectos', en: 'Projects', pt: 'Projetos', fr: 'Projets' }),
      booking: L({ es: 'Agenda', en: 'Book', pt: 'Agenda', fr: 'Agenda' }),
      ctaProposal: L({
        es: 'Solicitar estrategia',
        en: 'Request strategy',
        pt: 'Solicitar estratégia',
        fr: 'Demander une stratégie',
      }),
      menuAria: L({
        es: 'Abrir menú',
        en: 'Open menu',
        pt: 'Abrir menu',
        fr: 'Ouvrir le menu',
      }),
    },
    loadscreen: {
      hint: L({
        es: 'Cargando experiencia…',
        en: 'Loading experience…',
        pt: 'A carregar experiência…',
        fr: 'Chargement de l’expérience…',
      }),
    },
    trustBar: {
      aria: L({
        es: 'Alcance y capacidades ELYSIOR',
        en: 'ELYSIOR reach and capabilities',
        pt: 'Alcance e capacidades ELYSIOR',
        fr: 'Portée et capacités ELYSIOR',
      }),
      items: L({
        es: [
          'Costa Rica',
          'United Kingdom',
          'Global Clients',
          'Websites Premium',
          'Google Ads',
          'AI Lead Systems',
        ],
        en: [
          'Costa Rica',
          'United Kingdom',
          'Global Clients',
          'Premium Websites',
          'Google Ads',
          'AI Lead Systems',
        ],
        pt: [
          'Costa Rica',
          'Reino Unido',
          'Clientes globais',
          'Websites premium',
          'Google Ads',
          'AI Lead Systems',
        ],
        fr: [
          'Costa Rica',
          'Royaume-Uni',
          'Clients mondiaux',
          'Sites premium',
          'Google Ads',
          'Systèmes de leads IA',
        ],
      }),
    },
    hero: {
      eyebrow: L({
        es: 'Empresa digital internacional',
        en: 'International digital growth company',
        pt: 'Empresa digital internacional',
        fr: 'Entreprise digitale internationale',
      }),
      eyebrowAccent: L({
        es: '· Costa Rica · UK · Global',
        en: '· Costa Rica · UK · Global',
        pt: '· Costa Rica · UK · Global',
        fr: '· Costa Rica · UK · Global',
      }),
      titleWords: L({
        es: ['Websites', 'Premium', 'Diseñadas', 'Para', 'Generar', 'Clientes'],
        en: ['Premium', 'Websites', 'Built', 'To', 'Win', 'Clients'],
        pt: ['Websites', 'Premium', 'Feitas', 'Para', 'Gerar', 'Clientes'],
        fr: ['Sites', 'Premium', 'Conçus', 'Pour', 'Attirer', 'Clients'],
      }),
      sub: L({
        es: 'Construimos websites, campañas de Google Ads y sistemas inteligentes de captación para ayudar a empresas en Costa Rica, Reino Unido y mercados globales a crecer con más confianza, claridad y conversión.',
        en: 'We build websites, Google Ads campaigns, and intelligent lead systems so businesses in Costa Rica, the UK, and global markets grow with more confidence, clarity, and conversion.',
        pt: 'Construímos websites, campanhas Google Ads e sistemas inteligentes de captação para empresas na Costa Rica, no Reino Unido e em mercados globais crescerem com mais confiança, clareza e conversão.',
        fr: 'Nous créons sites, campagnes Google Ads et systèmes intelligents de capture pour aider les entreprises au Costa Rica, au Royaume-Uni et sur les marchés mondiaux à croître avec confiance, clarté et conversion.',
      }),
      ctaPrimary: L({
        es: 'Agendar Diagnóstico Gratuito',
        en: 'Book a Free Strategy Call',
        pt: 'Agendar Diagnóstico Gratuito',
        fr: 'Réserver un diagnostic gratuit',
      }),
      ctaSecondary: L({
        es: 'Solicitar Propuesta',
        en: 'Request Proposal',
        pt: 'Solicitar Proposta',
        fr: 'Demander une proposition',
      }),
      badgesAria: L({
        es: 'Señales de confianza',
        en: 'Trust signals',
        pt: 'Sinais de confiança',
        fr: 'Signaux de confiance',
      }),
      mockupUrl: 'elysiorglobal.com · growth',
      mockupLabel: L({
        es: 'Stack unificado',
        en: 'Unified stack',
        pt: 'Stack unificado',
        fr: 'Stack unifié',
      }),
      mockupTitle: L({
        es: 'Web + Ads + IA + Automation',
        en: 'Web + Ads + AI + Automation',
        pt: 'Web + Ads + IA + Automation',
        fr: 'Web + Ads + IA + Automation',
      }),
      mockupText: L({
        es: 'Diseño, datos y automatización trabajando en conjunto — el nivel que esperas de una agencia global, no de una plantilla.',
        en: 'Design, data, and automation working as one — the level you expect from a global agency, not a template.',
        pt: 'Design, dados e automação a trabalhar em conjunto — o nível que se espera de uma agência global, não de um template.',
        fr: 'Design, données et automatisation au service d’un même système — le niveau attendu d’une agence mondiale, pas d’un template.',
      }),
      mockupTags: L({
        es: ['Web', 'Ads', 'IA', 'Automation'],
        en: ['Web', 'Ads', 'AI', 'Automation'],
        pt: ['Web', 'Ads', 'IA', 'Automation'],
        fr: ['Web', 'Ads', 'IA', 'Automation'],
      }),
      mockupStatusChips: L({
        es: ['Pipeline activo', 'Leads capturados', 'Automatización lista'],
        en: ['Active pipeline', 'Leads captured', 'Automation ready'],
        pt: ['Pipeline ativo', 'Leads qualificados', 'Automação pronta'],
        fr: ['Pipeline actif', 'Leads capturés', 'Automatisation prête'],
      }),
      mockupStatusAria: L({
        es: 'Estado del sistema de crecimiento',
        en: 'Growth system status',
        pt: 'Estado do sistema de crescimento',
        fr: 'État du système de croissance',
      }),
      mockupPill: L({
        es: 'Sistema en vivo',
        en: 'Live system',
        pt: 'Sistema ao vivo',
        fr: 'Système en direct',
      }),
      mockupStat: L({
        es: '+ conversión',
        en: '+ conversion',
        pt: '+ conversão',
        fr: '+ conversion',
      }),
    },
    problem: {
      eyebrow: L({
        es: 'Diagnóstico',
        en: 'Diagnosis',
        pt: 'Diagnóstico',
        fr: 'Diagnostic',
      }),
      title: L({
        es: 'Una website bonita no es suficiente.',
        en: 'A beautiful website isn’t enough.',
        pt: 'Um site bonito não é suficiente.',
        fr: 'Un beau site ne suffit pas.',
      }),
      lead: L({
        es: 'Muchas empresas pierden oportunidades porque su website no comunica confianza, no captura leads correctamente o no tiene un sistema de seguimiento. ELYSIOR combina diseño, estrategia y automatización para convertir visitas en oportunidades reales.',
        en: 'Many businesses lose opportunities because their site doesn’t build trust, doesn’t capture leads properly, or lacks a follow-up system. ELYSIOR combines design, strategy, and automation to turn visits into real opportunities.',
        pt: 'Muitas empresas perdem oportunidades porque o site não transmite confiança, não capta leads corretamente ou não tem sistema de acompanhamento. A ELYSIOR combina design, estratégia e automação para transformar visitas em oportunidades reais.',
        fr: 'Beaucoup d’entreprises perdent des opportunités : le site ne rassure pas, ne capture pas les leads correctement ou n’a pas de suivi structuré. ELYSIOR allie design, stratégie et automatisation pour transformer les visites en opportunités réelles.',
      }),
      brandLine: L({
        es: 'ELYSIOR ayuda a empresas a convertir su presencia digital en un sistema real de captación de clientes.',
        en: 'ELYSIOR helps businesses turn digital presence into a real client acquisition system.',
        pt: 'A ELYSIOR ajuda empresas a transformar a presença digital num sistema real de captação de clientes.',
        fr: 'ELYSIOR aide les entreprises à transformer leur présence digitale en un véritable système d’acquisition clients.',
      }),
      panelTitle: L({
        es: 'Por qué se estancan los resultados',
        en: 'Why results stall',
        pt: 'Por que os resultados estagnam',
        fr: 'Pourquoi les résultats stagnent',
      }),
      bullets: L({
        es: [
          'Velocidad y experiencia que alejan visitantes',
          'Mensajes que no conectan con la oferta real',
          'Poca o nula automatización tras el primer contacto',
          'Ausencia de embudo y seguimiento estructurado',
        ],
        en: [
          'Speed and UX that push visitors away',
          'Messaging that doesn’t match the real offer',
          'Little or no automation after first contact',
          'No funnel or structured follow-up',
        ],
        pt: [
          'Velocidade e experiência que afastam visitantes',
          'Mensagens que não ligam à oferta real',
          'Pouca ou nenhuma automação após o primeiro contacto',
          'Ausência de funil e acompanhamento estruturado',
        ],
        fr: [
          'Vitesse et expérience qui éloignent les visiteurs',
          'Messages déconnectés de l’offre réelle',
          'Peu ou pas d’automatisation après le premier contact',
          'Absence d’entonnoir et de suivi structuré',
        ],
      }),
    },
    sistema: {
      eyebrow: L({ es: 'Solución', en: 'Solution', pt: 'Solução', fr: 'Solution' }),
      title: L({
        es: 'Un sistema digital construido para vender mejor.',
        en: 'A digital system built to sell better.',
        pt: 'Um sistema digital feito para vender melhor.',
        fr: 'Un système digital conçu pour mieux vendre.',
      }),
      lead: L({
        es: 'Arquitectura de conversión, captación y automatización — con el estándar de una agencia internacional, no de un freelance genérico.',
        en: 'Conversion architecture, capture, and automation — with the standard of an international agency, not a generic freelancer.',
        pt: 'Arquitetura de conversão, captação e automação — com o padrão de uma agência internacional, não de um freelance genérico.',
        fr: 'Architecture de conversion, capture et automatisation — au niveau d’une agence internationale, pas d’un freelance générique.',
      }),
      cards: SISTEMA_ROWS.map((c) => ({
        icon: c.icon,
        title: c.title[lang],
        description: c.description[lang],
      })),
    },
    servicios: {
      eyebrow: L({ es: 'Servicios', en: 'Services', pt: 'Serviços', fr: 'Services' }),
      title: L({
        es: 'Lo que construimos cuando el estándar no puede ser mediocre',
        en: 'What we build when the standard cannot be mediocre',
        pt: 'O que construímos quando o padrão não pode ser medíocre',
        fr: 'Ce que nous bâtissons quand l’exigence refuse la médiocrité',
      }),
      lead: L({
        es: 'Websites premium, campañas de Google Ads, sistemas de leads con IA y automatización — integrados para que tu marca compita con claridad en mercados internacionales.',
        en: 'Premium websites, Google Ads, AI lead systems, and automation — integrated so your brand competes with clarity in international markets.',
        pt: 'Websites premium, Google Ads, leads com IA e automação — integrados para a sua marca competir com clareza em mercados internacionais.',
        fr: 'Sites premium, Google Ads, leads IA et automatisation — intégrés pour que votre marque rivalise avec clarté sur les marchés internationaux.',
      }),
      cards: SERVICE_ROWS.map((c) => ({
        icon: c.icon,
        title: c.title[lang],
        description: c.description[lang],
      })),
      iaPagesAria: L({
        es: 'Páginas de servicios con IA',
        en: 'AI service pages',
        pt: 'Páginas de serviços com IA',
        fr: 'Pages de services IA',
      }),
      iaPagesTitle: L({
        es: 'Servicios con IA',
        en: 'AI-powered services',
        pt: 'Serviços com IA',
        fr: 'Services avec IA',
      }),
      iaPages: [
        {
          href: '/servicios/chatbots-ia/',
          label: L({
            es: 'Chatbots con IA',
            en: 'AI Chatbots',
            pt: 'Chatbots com IA',
            fr: 'Chatbots IA',
          }),
          description: L({
            es: 'Atención 24/7, calificación y captación de leads.',
            en: '24/7 support, qualification, and lead capture.',
            pt: 'Atendimento 24/7, qualificação e captação de leads.',
            fr: 'Accueil 24/7, qualification et capture de leads.',
          }),
        },
        {
          href: '/servicios/marketing-ia/',
          label: L({
            es: 'Marketing con IA',
            en: 'AI Marketing',
            pt: 'Marketing com IA',
            fr: 'Marketing IA',
          }),
          description: L({
            es: 'Campañas y contenido para más leads calificados.',
            en: 'Campaigns and content for more qualified leads.',
            pt: 'Campanhas e conteúdo para mais leads qualificados.',
            fr: 'Campagnes et contenu pour plus de leads qualifiés.',
          }),
        },
        {
          href: '/servicios/automatizacion-procesos/',
          label: L({
            es: 'Automatización de procesos',
            en: 'Process automation',
            pt: 'Automação de processos',
            fr: 'Automatisation des processus',
          }),
          description: L({
            es: 'Formularios, CRM y seguimiento conectados.',
            en: 'Connected forms, CRM, and follow-up.',
            pt: 'Formulários, CRM e acompanhamento ligados.',
            fr: 'Formulaires, CRM et suivi connectés.',
          }),
        },
      ],
    },
    industrias: {
      eyebrow: L({ es: 'Alcance', en: 'Reach', pt: 'Alcance', fr: 'Portée' }),
      title: L({
        es: 'Trabajamos con empresas modernas',
        en: 'We work with modern businesses',
        pt: 'Trabalhamos com empresas modernas',
        fr: 'Nous travaillons avec des entreprises modernes',
      }),
      lead: L({
        es: 'Negocios locales y marcas con visión internacional. Lo que nos importa es el compromiso con crecer con orden — no el tamaño del equipo.',
        en: 'Local businesses and brands with a global outlook. What matters is the commitment to grow with clarity — not team size.',
        pt: 'Negócios locais e marcas com visão internacional. O que importa é o compromisso em crescer com ordem — não o tamanho da equipa.',
        fr: 'Entreprises locales et marques à vocation internationale. Ce qui compte, c’est l’engagement à grandir avec méthode — pas la taille de l’équipe.',
      }),
      items: L({
        es: ['Clínicas', 'Restaurantes', 'Empresas Locales', 'Marcas Personales', 'Empresas de Servicios', 'Negocios en crecimiento'],
        en: ['Clinics', 'Restaurants', 'Local Businesses', 'Personal Brands', 'Service Companies', 'Growing Businesses'],
        pt: ['Clínicas', 'Restaurantes', 'Empresas Locais', 'Marcas Pessoais', 'Empresas de Serviços', 'Negócios em crescimento'],
        fr: ['Cliniques', 'Restaurants', 'Entreprises locales', 'Marques personnelles', 'Entreprises de services', 'Entreprises en croissance'],
      }),
    },
    pagos: {
      eyebrow: L({ es: 'Modelo comercial', en: 'Commercial model', pt: 'Modelo comercial', fr: 'Modèle commercial' }),
      title: L({
        es: 'Soluciones flexibles para empresas en crecimiento',
        en: 'Flexible solutions for growing businesses',
        pt: 'Soluções flexíveis para empresas em crescimento',
        fr: 'Solutions flexibles pour entreprises en croissance',
      }),
      lead: L({
        es: 'Trabajamos con negocios en diferentes etapas. Podemos estructurar pagos por fases, adaptar el alcance del proyecto y crear soluciones escalables según el presupuesto y objetivos de cada empresa.',
        en: 'We work with businesses at different stages. We can structure phased payments, adapt project scope, and build scalable solutions aligned with each company’s budget and goals.',
        pt: 'Trabalhamos com negócios em fases diferentes. Podemos estruturar pagamentos por fases, adaptar o âmbito do projeto e criar soluções escaláveis conforme orçamento e objetivos.',
        fr: 'Nous accompagnons des entreprises à des stades différents : paiements échelonnés, périmètre adapté, solutions évolutives selon budget et objectifs.',
      }),
      cards: L({
        es: [
          { title: 'Pagos por etapas', text: 'Inviertes con claridad: hitos definidos, entregas visibles y control del flujo de caja.' },
          { title: 'Proyectos escalables', text: 'Empieza con lo esencial y amplía módulos cuando tu operación esté lista para el siguiente nivel.' },
          { title: 'Opciones personalizadas', text: 'Ajustamos alcance, ritmo y prioridades a tu realidad — sin paquetes rígidos que no encajan.' },
          { title: 'Soporte estratégico', text: 'Decisiones con criterio: menos ruido, más foco en lo que realmente mueve ingresos.' },
        ],
        en: [
          { title: 'Phased payments', text: 'Projects split into clear milestones so you invest with order and visibility.' },
          { title: 'Scalable solutions', text: 'Start where you are today and add modules when your business is ready.' },
          { title: 'Tailored options', text: 'We adjust scope and deliverables to priorities, timelines, and budget.' },
          { title: 'Strategic support', text: 'Human guidance — direct answers, no unnecessary jargon.' },
        ],
        pt: [
          { title: 'Pagamentos por fases', text: 'Projetos divididos em marcos claros para investir com ordem e visibilidade.' },
          { title: 'Soluções escaláveis', text: 'Comece onde está hoje e amplie módulos quando o negócio estiver pronto.' },
          { title: 'Opções personalizadas', text: 'Ajustamos âmbito e entregas a prioridades, prazos e orçamento.' },
          { title: 'Suporte estratégico', text: 'Acompanhamento humano: respostas diretas, sem jargão desnecessário.' },
        ],
        fr: [
          { title: 'Paiements échelonnés', text: 'Projets découpés en jalons clairs pour investir avec visibilité.' },
          { title: 'Solutions évolutives', text: 'Commencez aujourd’hui et ajoutez des modules quand vous êtes prêts.' },
          { title: 'Options sur mesure', text: 'Nous adaptons le périmètre et les livrables aux priorités, délais et budget.' },
          { title: 'Accompagnement stratégique', text: 'Un soutien humain : réponses directes, sans jargon inutile.' },
        ],
      }),
    },
    portfolio: {
      eyebrow: L({
        es: 'Trabajo Real',
        en: 'Real Client Work',
        pt: 'Trabalho Real',
        fr: 'Travail réel',
      }),
      title: L({
        es: 'Proyectos Recientes',
        en: 'Recent Projects',
        pt: 'Projetos Recentes',
        fr: 'Projets récents',
      }),
      lead: L({
        es: 'Cada proyecto fue diseñado según las necesidades, estilo y objetivos específicos de cada cliente. Estos ejemplos muestran trabajos reales entregados, y también reflejan cómo cada sistema puede seguir evolucionando con SEO, automatización, reservas, ecommerce, campañas y captación de leads.',
        en: 'Each project was shaped around that client’s specific needs, visual style, and goals. These examples show real work we have delivered — and how each build can keep evolving with SEO, automation, bookings, e-commerce, campaigns, and lead capture.',
        pt: 'Cada projeto foi desenhado às necessidades, estilo e objetivos específicos de cada cliente. Estes exemplos mostram trabalhos reais entregues — e como cada sistema pode continuar a evoluir com SEO, automação, reservas, e-commerce, campanhas e captação de leads.',
        fr: 'Chaque projet a été conçu selon les besoins, le style et les objectifs propres à chaque client. Ces exemples montrent des livrables réels — et comment chaque système peut encore évoluer avec le SEO, l’automatisation, les réservations, l’e-commerce, les campagnes et la capture de leads.',
      }),
      viewProject: L({
        es: 'Ver Proyecto',
        en: 'View Project',
        pt: 'Ver Projeto',
        fr: 'Voir le projet',
      }),
      cards: [
        {
          key: 'escorial',
          name: 'ESCORIAL RESTAURANT',
          url: 'https://escorialrestaurant.co.uk/',
          category: L({
            es: 'Restaurante en Londres',
            en: 'Restaurant in London',
            pt: 'Restaurante em Londres',
            fr: 'Restaurant à Londres',
          }),
          badge: L({
            es: 'Sitio web de restaurante',
            en: 'Restaurant Website',
            pt: 'Website de restaurante',
            fr: 'Site web restaurant',
          }),
          description: L({
            es: 'Website para restaurante latino en Londres, desarrollado para presentar la marca, mostrar el menú, destacar la ubicación y facilitar el contacto rápido con clientes locales.',
            en: 'Website for a Latin restaurant in London, built to present the brand, showcase the menu, highlight the location, and make it easy for local guests to get in touch quickly.',
            pt: 'Website para restaurante latino em Londres, desenvolvido para apresentar a marca, mostrar o menu, destacar a localização e facilitar contacto rápido com clientes locais.',
            fr: 'Site pour un restaurant latino à Londres, pensé pour présenter la marque, afficher la carte, mettre en avant l’adresse et faciliter un contact rapide avec la clientèle locale.',
          }),
          tags: L({
            es: ['Website informativa', 'Menú digital', 'Contacto rápido', 'Presencia local'],
            en: ['Informational website', 'Digital menu', 'Quick contact', 'Local presence'],
            pt: ['Website informativa', 'Menu digital', 'Contacto rápido', 'Presença local'],
            fr: ['Site vitrine', 'Menu numérique', 'Contact rapide', 'Présence locale'],
          }),
        },
        {
          key: 'anthonys',
          name: "ANTHONY'S GRILL",
          url: 'https://anthonysgrill.co.uk/',
          category: L({
            es: 'Restaurante en Londres',
            en: 'Restaurant in London',
            pt: 'Restaurante em Londres',
            fr: 'Restaurant à Londres',
          }),
          badge: L({
            es: 'Web de restaurante',
            en: 'London Restaurant',
            pt: 'Website de restaurante',
            fr: 'Site restaurant Londres',
          }),
          description: L({
            es: 'Website para restaurante latino en Londres, creada para comunicar la identidad del negocio, presentar su oferta gastronómica y ayudar a que nuevos clientes lo encuentren online.',
            en: 'Website for a Latin restaurant in London, created to express the business identity, present its food offering, and help new customers find it online.',
            pt: 'Website para restaurante latino em Londres, criada para comunicar a identidade do negócio, apresentar a oferta gastronómica e ajudar novos clientes a encontrá-lo online.',
            fr: 'Site pour un restaurant latino à Londres, créé pour traduire l’identité du lieu, présenter l’offre culinaire et aider de nouveaux clients à le découvrir en ligne.',
          }),
          tags: L({
            es: ['Branding digital', 'Menú', 'Ubicación', 'Experiencia mobile'],
            en: ['Digital branding', 'Menu', 'Location', 'Mobile experience'],
            pt: ['Branding digital', 'Menu', 'Localização', 'Experiência mobile'],
            fr: ['Branding digital', 'Menu', 'Localisation', 'Expérience mobile'],
          }),
        },
        {
          key: 'artistilu',
          name: 'ARTISTILU',
          url: 'https://artistilu.com/',
          category: L({
            es: 'Tienda online / Ecommerce',
            en: 'Online store / E-commerce',
            pt: 'Loja online / E-commerce',
            fr: 'Boutique en ligne / E-commerce',
          }),
          badge: L({
            es: 'Ecommerce',
            en: 'Ecommerce',
            pt: 'E-commerce',
            fr: 'E-commerce',
          }),
          description: L({
            es: 'Tienda online creada para presentar productos, construir confianza visual y ofrecer una experiencia de compra digital clara, ordenada y profesional.',
            en: 'Online store built to present products, build visual trust, and offer a clear, orderly, professional shopping experience.',
            pt: 'Loja online criada para apresentar produtos, gerar confiança visual e oferecer uma experiência de compra digital clara, organizada e profissional.',
            fr: 'Boutique en ligne créée pour présenter les produits, renforcer la confiance visuelle et offrir un parcours d’achat clair, structuré et professionnel.',
          }),
          tags: L({
            es: ['Ecommerce', 'Catálogo de productos', 'Diseño visual', 'Compra online'],
            en: ['E-commerce', 'Product catalogue', 'Visual design', 'Online checkout'],
            pt: ['E-commerce', 'Catálogo de produtos', 'Design visual', 'Compra online'],
            fr: ['E-commerce', 'Catalogue produits', 'Design visuel', 'Achat en ligne'],
          }),
        },
      ],
      noteTitle: L({
        es: 'Construido según cada brief. Escalable para crecer.',
        en: 'Built to each brief. Designed to scale.',
        pt: 'Construído para cada brief. Pronto para crescer.',
        fr: 'Construit selon chaque brief. Pensé pour évoluer.',
      }),
      noteBody: L({
        es: 'Estos proyectos fueron desarrollados según el brief, presupuesto y prioridades de cada cliente. En ELYSIOR también podemos mejorar o expandir cada sistema con SEO avanzado, campañas de Google Ads, reservas online, automatización, formularios inteligentes, ecommerce avanzado y seguimiento de leads.',
        en: 'These projects were delivered according to each client’s brief, budget, and priorities. At ELYSIOR we can also refine or extend each system with advanced SEO, Google Ads campaigns, online bookings, automation, smart forms, fuller e-commerce, and lead follow-up.',
        pt: 'Estes projetos foram desenvolvidos conforme o brief, orçamento e prioridades de cada cliente. Na ELYSIOR também podemos melhorar ou expandir cada sistema com SEO avançado, campanhas Google Ads, reservas online, automação, formulários inteligentes, e-commerce mais completo e acompanhamento de leads.',
        fr: 'Ces projets ont été réalisés selon le brief, le budget et les priorités de chaque client. Chez ELYSIOR nous pouvons aussi enrichir ou étendre chaque système avec du SEO avancé, des campagnes Google Ads, des réservations en ligne, de l’automatisation, des formulaires intelligents, un e-commerce plus poussé et le suivi des leads.',
      }),
      noteCta: L({
        es: 'Consulta de Proyecto',
        en: 'Discuss a Custom Project',
        pt: 'Consulta de Projeto',
        fr: 'Consultation sur mesure',
      }),
    },
    precios: {
      eyebrow: L({ es: 'Inversión', en: 'Investment', pt: 'Investimento', fr: 'Investissement' }),
      title: L({
        es: 'Planes de partida — sin rigidez',
        en: 'Starting points — not rigid',
        pt: 'Planos iniciais — sem rigidez',
        fr: 'Points de départ — sans rigidité',
      }),
      lead: L({
        es: 'Referencias transparentes en USD. Cada proyecto puede adaptarse según el tamaño, presupuesto y objetivos del negocio.',
        en: 'Transparent USD starting points. Every project can adapt to your company’s size, budget, and goals.',
        pt: 'Referências transparentes em USD. Cada projeto pode adaptar-se ao tamanho, orçamento e objetivos do negócio.',
        fr: 'Repères transparents en USD. Chaque projet s’adapte à la taille, au budget et aux objectifs de l’entreprise.',
      }),
      badge: L({ es: 'Recomendado', en: 'Recommended', pt: 'Recomendado', fr: 'Recommandé' }),
      footnote: L({
        es: 'Cada propuesta se ajusta a tu contexto. Hablemos sin compromiso — en español o inglés, según prefieras. ',
        en: 'Every proposal fits your context. Let’s talk with no obligation — in Spanish or English, as you prefer. ',
        pt: 'Cada proposta adapta-se ao seu contexto. Vamos conversar sem compromisso — em espanhol ou inglês, como preferir. ',
        fr: 'Chaque proposition s’adapte à votre contexte. Parlons sans engagement — en espagnol ou en anglais, selon votre préférence. ',
      }),
      footnoteAccent: L({
        es: 'Flexible by design.',
        en: 'Flexible by design.',
        pt: 'Flexible by design.',
        fr: 'Flexible by design.',
      }),
      packages: [
        {
          name: PACK_NAMES[0],
          ctaKind: 'strategy',
          price: L({
            es: 'Desde $497 USD',
            en: 'From $497 USD',
            pt: 'A partir de $497 USD',
            fr: 'À partir de 497 $ USD',
          }),
          blurb: L({
            es: 'Para negocios que necesitan una presencia online premium y clara.',
            en: 'For small businesses that need a premium online presence.',
            pt: 'Para negócios que precisam de uma presença online premium e clara.',
            fr: 'Pour les entreprises qui veulent une présence en ligne premium et claire.',
          }),
          features: L({
            es: [
              'Landing page premium',
              'Diseño responsive',
              'Formulario de contacto',
              'Integración WhatsApp',
              'SEO básico',
              'Optimización de velocidad',
            ],
            en: [
              'Premium landing page',
              'Responsive design',
              'Contact form',
              'WhatsApp integration',
              'Basic SEO',
              'Speed optimisation',
            ],
            pt: [
              'Landing page premium',
              'Design responsivo',
              'Formulário de contacto',
              'Integração WhatsApp',
              'SEO básico',
              'Otimização de velocidade',
            ],
            fr: [
              'Landing page premium',
              'Design responsive',
              'Formulaire de contact',
              'Intégration WhatsApp',
              'SEO de base',
              'Optimisation vitesse',
            ],
          }),
          ctaLabel: L({
            es: 'Agendar Diagnóstico Gratuito',
            en: 'Book a Free Strategy Call',
            pt: 'Agendar Diagnóstico Gratuito',
            fr: 'Réserver un diagnostic gratuit',
          }),
          highlighted: false,
        },
        {
          name: PACK_NAMES[1],
          ctaKind: 'strategy',
          price: L({
            es: 'Desde $997 USD',
            en: 'From $997 USD',
            pt: 'A partir de $997 USD',
            fr: 'À partir de 997 $ USD',
          }),
          blurb: L({
            es: 'Para empresas listas para generar leads con estructura y medición.',
            en: 'For businesses ready to generate leads.',
            pt: 'Para empresas prontas para gerar leads com estrutura e medição.',
            fr: 'Pour les entreprises prêtes à générer des leads avec structure et mesure.',
          }),
          features: L({
            es: [
              'Website multipágina',
              'Landing page para Google Ads',
              'Copywriting de conversión',
              'Formularios de captación',
              'Configuración de analítica',
              'Integración con calendario',
            ],
            en: [
              'Multi-page website',
              'Google Ads landing page',
              'Conversion copywriting',
              'Lead capture forms',
              'Analytics setup',
              'Calendar integration',
            ],
            pt: [
              'Website multipágina',
              'Landing page para Google Ads',
              'Copywriting de conversão',
              'Formulários de captação',
              'Configuração de analytics',
              'Integração com calendário',
            ],
            fr: [
              'Site multipage',
              'Landing page Google Ads',
              'Copywriting conversion',
              'Formulaires de capture',
              'Configuration analytics',
              'Intégration calendrier',
            ],
          }),
          ctaLabel: L({
            es: 'Solicitar Estrategia',
            en: 'Start Your Growth System',
            pt: 'Solicitar Estratégia',
            fr: 'Lancer votre Growth System',
          }),
          highlighted: true,
        },
        {
          name: PACK_NAMES[2],
          ctaKind: 'project',
          price: L({
            es: 'Desde $1,997 USD',
            en: 'From $1,997 USD',
            pt: 'A partir de $1.997 USD',
            fr: 'À partir de 1 997 $ USD',
          }),
          blurb: L({
            es: 'Para empresas que quieren un sistema completo de captación de clientes.',
            en: 'For businesses that want a full client acquisition system.',
            pt: 'Para empresas que querem um sistema completo de captação de clientes.',
            fr: 'Pour les entreprises qui veulent un système complet d’acquisition clients.',
          }),
          features: L({
            es: [
              'Website premium personalizada',
              'Funnel para Google Ads',
              'AI lead systems',
              'Sistema de reservas',
              'Automatización de seguimiento',
              'Estructura preparada para CRM',
            ],
            en: [
              'Premium custom website',
              'Google Ads funnel',
              'AI lead systems',
              'Booking system',
              'Follow-up automation',
              'CRM-ready structure',
            ],
            pt: [
              'Website premium personalizada',
              'Funil para Google Ads',
              'AI lead systems',
              'Sistema de reservas',
              'Automação de acompanhamento',
              'Estrutura preparada para CRM',
            ],
            fr: [
              'Site premium sur mesure',
              'Tunnel Google Ads',
              'Systèmes de leads IA',
              'Système de réservation',
              'Automatisation du suivi',
              'Structure prête pour CRM',
            ],
          }),
          ctaLabel: L({
            es: 'Consulta de Proyecto',
            en: 'Project Consultation',
            pt: 'Consulta de Projeto',
            fr: 'Consultation projet',
          }),
          highlighted: false,
        },
      ],
    },
    booking: {
      title: L({
        es: 'Agenda tu diagnóstico gratuito',
        en: 'Book your free diagnostic',
        pt: 'Agende o seu diagnóstico gratuito',
        fr: 'Réservez votre diagnostic gratuit',
      }),
      lead: L({
        es: 'Elige la opción más adecuada para tu negocio y reserva una llamada estratégica con ELYSIOR.',
        en: 'Choose the option that fits your business and book a strategy call with ELYSIOR.',
        pt: 'Escolha a opção certa para o seu negócio e reserve uma chamada estratégica com a ELYSIOR.',
        fr: 'Choisissez l’option adaptée à votre entreprise et réservez un appel stratégique avec ELYSIOR.',
      }),
      strategy: {
        title: L({
          es: 'Free Strategy Call',
          en: 'Free Strategy Call',
          pt: 'Free Strategy Call',
          fr: 'Free Strategy Call',
        }),
        duration: L({
          es: '30 minutos',
          en: '30 minutes',
          pt: '30 minutos',
          fr: '30 minutes',
        }),
        description: L({
          es: 'Una llamada gratuita para entender tu negocio, revisar tus objetivos y recomendar la mejor estrategia digital para captar más clientes.',
          en: 'A free call to understand your business, review your goals, and recommend the best digital strategy to win more clients.',
          pt: 'Uma chamada gratuita para entender o seu negócio, rever as suas metas e recomendar a melhor estratégia digital para captar mais clientes.',
          fr: 'Un appel gratuit pour comprendre votre activité, vos objectifs et recommander la meilleure stratégie digitale pour attirer plus de clients.',
        }),
        cta: L({
          es: 'Agendar llamada gratuita',
          en: 'Book free strategy call',
          pt: 'Agendar chamada gratuita',
          fr: 'Réserver l’appel gratuit',
        }),
      },
      project: {
        title: L({
          es: 'Project Consultation',
          en: 'Project Consultation',
          pt: 'Project Consultation',
          fr: 'Project Consultation',
        }),
        duration: L({
          es: '45 minutos',
          en: '45 minutes',
          pt: '45 minutos',
          fr: '45 minutes',
        }),
        description: L({
          es: 'Una consulta más detallada para empresas interesadas en websites premium, Google Ads y sistemas automatizados de captación de clientes.',
          en: 'A deeper consultation for companies interested in premium websites, Google Ads, and automated client acquisition systems.',
          pt: 'Uma consulta mais detalhada para empresas interessadas em websites premium, Google Ads e sistemas automatizados de captação de clientes.',
          fr: 'Une consultation plus approfondie pour les entreprises intéressées par des sites premium, Google Ads et des systèmes automatisés d’acquisition clients.',
        }),
        cta: L({
          es: 'Agendar consulta de proyecto',
          en: 'Book project consultation',
          pt: 'Agendar consulta de projeto',
          fr: 'Réserver la consultation projet',
        }),
      },
      trust: L({
        es: ['Google Meet', 'Sin compromiso', 'Servicio global', 'Costa Rica • UK • Global'],
        en: ['Google Meet', 'No obligation', 'Global service', 'Costa Rica • UK • Global'],
        pt: ['Google Meet', 'Sem compromisso', 'Serviço global', 'Costa Rica • UK • Global'],
        fr: ['Google Meet', 'Sans engagement', 'Service mondial', 'Costa Rica • UK • Global'],
      }),
    },
    lead: {
      eyebrow: L({ es: 'Contacto', en: 'Contact', pt: 'Contacto', fr: 'Contact' }),
      title: L({
        es: 'Hablemos de tu próximo sistema de crecimiento',
        en: 'Let’s talk about your next growth system',
        pt: 'Falemos do seu próximo sistema de crescimento',
        fr: 'Parlons de votre prochain système de croissance',
      }),
      lead: L({
        es: 'Si prefieres dejar un brief por escrito, completa el formulario. Respondemos con claridad, propuesta de alcance y siguiente paso — sin presión comercial.',
        en: 'If you prefer to leave a written brief, use the form. We reply with clarity, scope thinking, and a next step — no hard sell.',
        pt: 'Se preferir deixar um brief por escrito, preencha o formulário. Respondemos com clareza, âmbito e próximo passo — sem pressão comercial.',
        fr: 'Si vous préférez un brief écrit, utilisez le formulaire. Nous répondons avec clarté, une vision de périmètre et la suite — sans pression commerciale.',
      }),
      points: L({
        es: [
          'Respuesta en días hábiles',
          'Enfoque internacional con trato directo',
          'Costa Rica · Reino Unido · clientes globales',
        ],
        en: [
          'Replies on business days',
          'International focus, direct communication',
          'Costa Rica · UK · global clients',
        ],
        pt: [
          'Resposta em dias úteis',
          'Foco internacional, comunicação direta',
          'Costa Rica · Reino Unido · clientes globais',
        ],
        fr: [
          'Réponse sous quelques jours ouvrés',
          'Portée internationale, échange direct',
          'Costa Rica · Royaume-Uni · clients mondiaux',
        ],
      }),
      whatsappNote: L({
        es: 'También puedes contactarnos por WhatsApp para una respuesta más rápida.',
        en: 'You can also reach us on WhatsApp for a faster reply.',
        pt: 'Também pode contactar-nos por WhatsApp para uma resposta mais rápida.',
        fr: 'Vous pouvez aussi nous écrire sur WhatsApp pour une réponse plus rapide.',
      }),
      labels: {
        nombre: L({ es: 'Nombre', en: 'Name', pt: 'Nome', fr: 'Nom' }),
        empresa: L({ es: 'Empresa', en: 'Company', pt: 'Empresa', fr: 'Entreprise' }),
        email: 'Email',
        tipo: L({ es: 'Tipo de negocio', en: 'Business type', pt: 'Tipo de negócio', fr: 'Type d’entreprise' }),
        presupuesto: L({ es: 'Presupuesto estimado', en: 'Estimated budget', pt: 'Orçamento estimado', fr: 'Budget estimatif' }),
        objetivo: L({ es: 'Objetivo principal', en: 'Main goal', pt: 'Objetivo principal', fr: 'Objectif principal' }),
      },
      submit: L({
        es: 'Enviar solicitud',
        en: 'Send request',
        pt: 'Enviar pedido',
        fr: 'Envoyer la demande',
      }),
      successModal: {
        line1: L({
          es: 'Hemos recibido tu solicitud correctamente.',
          en: 'Your request has been successfully received.',
          pt: 'O seu pedido foi recebido com sucesso.',
          fr: 'Votre demande a bien été reçue.',
        }),
        line2: L({
          es: 'Un miembro del equipo de ELYSIOR se pondrá en contacto contigo en breve para hablar de tu proyecto, tus objetivos y la mejor estrategia de crecimiento para tu negocio.',
          en: 'A member of the ELYSIOR team will contact you shortly to discuss your project, goals, and the best growth strategy for your business.',
          pt: 'Um membro da equipa ELYSIOR entrará em contacto em breve para falar do seu projeto, das suas metas e da melhor estratégia de crescimento para o seu negócio.',
          fr: 'Un membre de l’équipe ELYSIOR vous contactera sous peu pour échanger sur votre projet, vos objectifs et la meilleure stratégie de croissance pour votre entreprise.',
        }),
        close: L({ es: 'Cerrar', en: 'Close', pt: 'Fechar', fr: 'Fermer' }),
        ariaHeading: L({
          es: 'Solicitud recibida',
          en: 'Request received',
          pt: 'Pedido recebido',
          fr: 'Demande reçue',
        }),
      },
      submitting: L({
        es: 'Enviando…',
        en: 'Sending…',
        pt: 'A enviar…',
        fr: 'Envoi…',
      }),
      error: L({
        es: 'No se pudo enviar. Inténtalo de nuevo o escríbenos a contact@elysiorglobal.com.',
        en: 'We couldn’t send that. Please try again or email contact@elysiorglobal.com.',
        pt: 'Não foi possível enviar. Tente novamente ou escreva para contact@elysiorglobal.com.',
        fr: 'Envoi impossible. Réessayez ou écrivez à contact@elysiorglobal.com.',
      }),
      businessType: L({
        es: [
          { value: '', label: 'Seleccionar' },
          { value: 'clinic', label: 'Clínica / salud' },
          { value: 'restaurant', label: 'Restaurante / F&B' },
          { value: 'local', label: 'Servicios locales' },
          { value: 'personal', label: 'Marca personal' },
          { value: 'b2b', label: 'B2B / servicios profesionales' },
          { value: 'ecommerce', label: 'E-commerce' },
          { value: 'other', label: 'Otro' },
        ],
        en: [
          { value: '', label: 'Select' },
          { value: 'clinic', label: 'Clinic / healthcare' },
          { value: 'restaurant', label: 'Restaurant / F&B' },
          { value: 'local', label: 'Local services' },
          { value: 'personal', label: 'Personal brand' },
          { value: 'b2b', label: 'B2B / professional services' },
          { value: 'ecommerce', label: 'E-commerce' },
          { value: 'other', label: 'Other' },
        ],
        pt: [
          { value: '', label: 'Selecionar' },
          { value: 'clinic', label: 'Clínica / saúde' },
          { value: 'restaurant', label: 'Restaurante / F&B' },
          { value: 'local', label: 'Serviços locais' },
          { value: 'personal', label: 'Marca pessoal' },
          { value: 'b2b', label: 'B2B / serviços profissionais' },
          { value: 'ecommerce', label: 'E-commerce' },
          { value: 'other', label: 'Outro' },
        ],
        fr: [
          { value: '', label: 'Sélectionner' },
          { value: 'clinic', label: 'Clinique / santé' },
          { value: 'restaurant', label: 'Restaurant / F&B' },
          { value: 'local', label: 'Services locaux' },
          { value: 'personal', label: 'Marque personnelle' },
          { value: 'b2b', label: 'B2B / services professionnels' },
          { value: 'ecommerce', label: 'E-commerce' },
          { value: 'other', label: 'Autre' },
        ],
      }),
      budget: L({
        es: [
          { value: '', label: 'Seleccionar' },
          { value: 'lt_500', label: 'Menos de $500 USD' },
          { value: '500_1500', label: '$500 – $1,500 USD' },
          { value: '1500_5000', label: '$1,500 – $5,000 USD' },
          { value: '5000_15000', label: '$5,000 – $15,000 USD' },
          { value: 'gt_15000', label: 'Más de $15,000 USD' },
          { value: 'discuss', label: 'Prefiero comentarlo' },
        ],
        en: [
          { value: '', label: 'Select' },
          { value: 'lt_500', label: 'Under $500 USD' },
          { value: '500_1500', label: '$500 – $1,500 USD' },
          { value: '1500_5000', label: '$1,500 – $5,000 USD' },
          { value: '5000_15000', label: '$5,000 – $15,000 USD' },
          { value: 'gt_15000', label: 'Over $15,000 USD' },
          { value: 'discuss', label: 'Prefer to discuss' },
        ],
        pt: [
          { value: '', label: 'Selecionar' },
          { value: 'lt_500', label: 'Menos de $500 USD' },
          { value: '500_1500', label: '$500 – $1.500 USD' },
          { value: '1500_5000', label: '$1.500 – $5.000 USD' },
          { value: '5000_15000', label: '$5.000 – $15.000 USD' },
          { value: 'gt_15000', label: 'Mais de $15.000 USD' },
          { value: 'discuss', label: 'Prefiro comentar' },
        ],
        fr: [
          { value: '', label: 'Sélectionner' },
          { value: 'lt_500', label: 'Moins de 500 $ USD' },
          { value: '500_1500', label: '500 – 1 500 $ USD' },
          { value: '1500_5000', label: '1 500 – 5 000 $ USD' },
          { value: '5000_15000', label: '5 000 – 15 000 $ USD' },
          { value: 'gt_15000', label: 'Plus de 15 000 $ USD' },
          { value: 'discuss', label: 'Je préfère en discuter' },
        ],
      }),
      objective: L({
        es: [
          { value: '', label: 'Seleccionar' },
          { value: 'redesign', label: 'Nueva web / rediseño' },
          { value: 'leads', label: 'Más leads y consultas' },
          { value: 'ads', label: 'Lanzar Google Ads' },
          { value: 'automate', label: 'Automatizar seguimiento' },
          { value: 'full', label: 'Todo el sistema (web + ads + IA)' },
          { value: 'defining', label: 'Aún definiendo' },
        ],
        en: [
          { value: '', label: 'Select' },
          { value: 'redesign', label: 'New site / redesign' },
          { value: 'leads', label: 'More leads & enquiries' },
          { value: 'ads', label: 'Launch Google Ads' },
          { value: 'automate', label: 'Automate follow-up' },
          { value: 'full', label: 'Full system (web + ads + AI)' },
          { value: 'defining', label: 'Still defining' },
        ],
        pt: [
          { value: '', label: 'Selecionar' },
          { value: 'redesign', label: 'Novo site / redesign' },
          { value: 'leads', label: 'Mais leads e consultas' },
          { value: 'ads', label: 'Lançar Google Ads' },
          { value: 'automate', label: 'Automatizar acompanhamento' },
          { value: 'full', label: 'Sistema completo (web + ads + IA)' },
          { value: 'defining', label: 'Ainda a definir' },
        ],
        fr: [
          { value: '', label: 'Sélectionner' },
          { value: 'redesign', label: 'Nouveau site / refonte' },
          { value: 'leads', label: 'Plus de leads & demandes' },
          { value: 'ads', label: 'Lancer Google Ads' },
          { value: 'automate', label: 'Automatiser le suivi' },
          { value: 'full', label: 'Système complet (web + ads + IA)' },
          { value: 'defining', label: 'Encore à préciser' },
        ],
      }),
    },
    testimonios: {
      eyebrow: L({ es: 'Confianza', en: 'Trust', pt: 'Confiança', fr: 'Confiance' }),
      title: L({
        es: 'Historias de socios — referencias demo',
        en: 'Partner stories — demo references',
        pt: 'Histórias de parceiros — referências demo',
        fr: 'Récits de partenaires — références démo',
      }),
      lead: L({
        es: 'Testimonios placeholder con tono premium; sustituye por casos reales cuando los tengas.',
        en: 'Placeholder testimonials in a premium tone — swap in real cases when ready.',
        pt: 'Testemunhos placeholder com tom premium; substitua por casos reais quando tiver.',
        fr: 'Témoignages placeholder au ton premium — remplacez par de vrais cas quand vous le pouvez.',
      }),
      items: L({
        es: [
          { quote: 'Por fin tenemos una web que se siente humana y vende. El equipo entendió nuestra etapa y armó un plan realista.', name: 'Laura Méndez', role: 'Directora, clínica de bienestar — Costa Rica' },
          { quote: 'Trabajar con ELYSIOR es orden y calidad. Ads y landing alineados: menos ruido, más citas calificadas.', name: 'Andrés Villalobos', role: 'Fundador, servicios B2B' },
          { quote: 'Necesitábamos flexibilidad de pago y entregas por fases. Cumplieron sin perder el estándar premium.', name: 'Marina Ortega', role: 'CEO, marca personal — España' },
          { quote: 'La automatización nos devolvió tiempo. Los leads llegan ordenados y el seguimiento ya no depende de Excel.', name: 'James Whitmore', role: 'Partner, firma profesional — UK' },
        ],
        en: [
          { quote: 'We finally have a site that feels human and sells. The team understood our stage and built a realistic plan.', name: 'Laura Méndez', role: 'Director, wellness clinic — Costa Rica' },
          { quote: 'Working with ELYSIOR is clarity and quality. Ads and landing aligned: less noise, more qualified bookings.', name: 'Andrés Villalobos', role: 'Founder, B2B services' },
          { quote: 'We needed payment flexibility and phased delivery. They delivered without losing the premium standard.', name: 'Marina Ortega', role: 'CEO, personal brand — Spain' },
          { quote: 'Automation gave us time back. Leads arrive organised; follow-up no longer lives in spreadsheets.', name: 'James Whitmore', role: 'Partner, professional firm — UK' },
        ],
        pt: [
          { quote: 'Finalmente temos um site humano que vende. A equipa entendeu a nossa fase e montou um plano realista.', name: 'Laura Méndez', role: 'Diretora, clínica de bem-estar — Costa Rica' },
          { quote: 'Trabalhar com ELYSIOR é ordem e qualidade. Ads e landing alinhados: menos ruído, mais reuniões qualificadas.', name: 'Andrés Villalobos', role: 'Fundador, serviços B2B' },
          { quote: 'Precisávamos de flexibilidade de pagamento e entregas por fases. Cumpriram sem perder o padrão premium.', name: 'Marina Ortega', role: 'CEO, marca pessoal — Espanha' },
          { quote: 'A automação devolveu-nos tempo. Os leads chegam organizados e o acompanhamento já não depende do Excel.', name: 'James Whitmore', role: 'Partner, firma profissional — UK' },
        ],
        fr: [
          { quote: 'Nous avons enfin un site humain qui vend. L’équipe a compris notre stade et a bâti un plan réaliste.', name: 'Laura Méndez', role: 'Directrice, clinique bien-être — Costa Rica' },
          { quote: 'Avec ELYSIOR : clarté et qualité. Annonces et landing alignées : moins de bruit, plus de rendez-vous qualifiés.', name: 'Andrés Villalobos', role: 'Fondateur, services B2B' },
          { quote: 'Nous voulions des paiements flexibles et des livraisons par phases. Ils ont tenu le niveau premium.', name: 'Marina Ortega', role: 'CEO, marque personnelle — Espagne' },
          { quote: 'L’automatisation nous a rendu du temps. Les leads arrivent structurés ; le suivi ne dépend plus d’Excel.', name: 'James Whitmore', role: 'Associé, cabinet professionnel — UK' },
        ],
      }),
      prevAria: L({
        es: 'Testimonio anterior',
        en: 'Previous testimonial',
        pt: 'Testemunho anterior',
        fr: 'Témoignage précédent',
      }),
      nextAria: L({
        es: 'Siguiente testimonio',
        en: 'Next testimonial',
        pt: 'Próximo testemunho',
        fr: 'Témoignage suivant',
      }),
      dotAria: L({
        es: 'Ir al testimonio',
        en: 'Go to testimonial',
        pt: 'Ir para o testemunho',
        fr: 'Aller au témoignage',
      }),
    },
    faq: {
      eyebrow: 'FAQ',
      title: L({
        es: 'Preguntas frecuentes',
        en: 'Frequently asked questions',
        pt: 'Perguntas frequentes',
        fr: 'Questions fréquentes',
      }),
      leadPrefix: L({
        es: 'Transparencia antes del pitch — ',
        en: 'Transparency before the pitch — ',
        pt: 'Transparência antes do pitch — ',
        fr: 'Transparence avant le pitch — ',
      }),
      leadAccent: L({
        es: 'respuestas claras, sin relleno.',
        en: 'clear answers, no fluff.',
        pt: 'respostas claras, sem enrolação.',
        fr: 'réponses claires, sans blabla.',
      }),
      items: L({
        es: [
          { q: '¿Trabajan con negocios pequeños?', a: 'Sí. Acompañamos desde emprendimientos locales hasta equipos más grandes. Lo importante es encajar en objetivos y etapa: diseñamos propuestas realistas, sin promesas vacías.' },
          { q: '¿Puedo pagar por etapas?', a: 'Por supuesto. Muchos proyectos se estructuran por fases — descubrimiento, diseño, desarrollo, lanzamiento y optimización — para que el flujo de inversión sea manejable.' },
          { q: '¿Ofrecen soporte?', a: 'Sí. Ofrecemos soporte según el alcance del proyecto: desde handover documentado hasta acompañamiento continuo en Growth System y ELITE.' },
          { q: '¿Trabajan fuera de Costa Rica?', a: 'Sí. Operamos con mentalidad global: Costa Rica y Reino Unido como bases, y clientes en distintas zonas horarias. Sesiones por videollamada y comunicación asíncrona clara.' },
          { q: '¿Pueden ayudar con Google Ads?', a: 'Sí. Configuramos y alineamos campañas con landing pages y medición, para que el presupuesto se traduzca en aprendizaje y conversiones — no solo clics.' },
        ],
        en: [
          { q: 'Do you work with small businesses?', a: 'Yes. We support local founders and larger teams alike. What matters is fit on goals and stage — we propose realistic plans, not empty promises.' },
          { q: 'Can I pay in phases?', a: 'Absolutely. Many projects are phased — discovery, design, build, launch, and optimisation — so investment stays manageable.' },
          { q: 'Do you offer support?', a: 'Yes. Support depends on scope: from a documented handover to ongoing partnership on Growth System and ELITE.' },
          { q: 'Do you work outside Costa Rica?', a: 'Yes. We operate globally with hubs in Costa Rica and the UK, serving clients across time zones via video and clear async communication.' },
          { q: 'Can you help with Google Ads?', a: 'Yes. We set up campaigns aligned with landing pages and measurement so budget turns into learning and conversions — not just clicks.' },
        ],
        pt: [
          { q: 'Trabalham com negócios pequenos?', a: 'Sim. Acompanhamos desde empreendedores locais até equipas maiores. O importante é alinhar objetivos e fase: propostas realistas, sem promessas vazias.' },
          { q: 'Posso pagar por fases?', a: 'Claro. Muitos projetos são por fases — descoberta, design, desenvolvimento, lançamento e otimização — para o investimento ser gerível.' },
          { q: 'Oferecem suporte?', a: 'Sim. O suporte depende do âmbito: desde handover documentado até acompanhamento contínuo nos planos Growth System e ELITE.' },
          { q: 'Trabalham fora da Costa Rica?', a: 'Sim. Atuamos globalmente com bases na Costa Rica e no Reino Unido, com clientes em vários fusos — vídeo e comunicação assíncrona clara.' },
          { q: 'Podem ajudar com Google Ads?', a: 'Sim. Configuramos campanhas alinhadas a landing pages e medição para que o orçamento gere aprendizagem e conversões — não só cliques.' },
        ],
        fr: [
          { q: 'Travaillez-vous avec les petites entreprises ?', a: 'Oui. Nous accompagnons les indépendants comme les équipes plus grandes. L’essentiel est l’alignement sur les objectifs et le stade — des propositions réalistes.' },
          { q: 'Puis-je payer en plusieurs fois ?', a: 'Oui. Beaucoup de projets sont découpés — découverte, design, développement, lancement, optimisation — pour garder l’investissement maîtrisé.' },
          { q: 'Proposez-vous du support ?', a: 'Oui. Le niveau dépend du périmètre : remise documentée ou accompagnement continu sur Growth System et ELITE.' },
          { q: 'Travaillez-vous hors du Costa Rica ?', a: 'Oui. Nous sommes organisés à l’international (Costa Rica et Royaume-Uni) et servons des clients à distance, en visio et en asynchrone.' },
          { q: 'Pouvez-vous aider sur Google Ads ?', a: 'Oui. Nous structurons les campagnes avec landing pages et mesure pour que le budget produise apprentissage et conversions — pas seulement des clics.' },
        ],
      }),
    },
    cierre: {
      eyebrow: L({ es: 'Siguiente paso', en: 'Next step', pt: 'Próximo passo', fr: 'Prochaine étape' }),
      title: L({
        es: 'Tu presencia digital puede convertirse en tu mejor canal de ventas',
        en: 'Your digital presence can become your best sales channel',
        pt: 'A sua presença digital pode tornar-se no seu melhor canal de vendas',
        fr: 'Votre présence digitale peut devenir votre meilleur canal commercial',
      }),
      text: L({
        es: 'ELYSIOR ayuda a empresas a convertir su presencia digital en un sistema real de captación de clientes — con websites premium, Google Ads, sistemas de leads con IA y automatización.',
        en: 'ELYSIOR helps businesses turn digital presence into a real client acquisition system — premium websites, Google Ads, AI lead systems, and automation.',
        pt: 'A ELYSIOR ajuda empresas a transformar a presença digital num sistema real de captação de clientes — websites premium, Google Ads, leads com IA e automação.',
        fr: 'ELYSIOR aide les entreprises à transformer leur présence digitale en un système réel d’acquisition — sites premium, Google Ads, leads IA et automatisation.',
      }),
      ctaPrimary: L({
        es: 'Agendar Diagnóstico Gratuito',
        en: 'Book a Free Strategy Call',
        pt: 'Agendar Diagnóstico Gratuito',
        fr: 'Réserver un diagnostic gratuit',
      }),
      ctaEmail: L({
        es: 'Escribir por email',
        en: 'Email us',
        pt: 'Escrever por email',
        fr: 'Écrire par email',
      }),
    },
    footer: {
      tagline: L({
        es: 'Premium Websites · Google Ads · AI Lead Systems',
        en: 'Premium Websites · Google Ads · AI Lead Systems',
        pt: 'Premium Websites · Google Ads · AI Lead Systems',
        fr: 'Sites premium · Google Ads · Leads IA',
      }),
      geoLine: L({
        es: 'Costa Rica · United Kingdom · Global Clients',
        en: 'Costa Rica · United Kingdom · Global Clients',
        pt: 'Costa Rica · Reino Unido · Clientes globais',
        fr: 'Costa Rica · Royaume-Uni · Clients mondiaux',
      }),
      whatsapp: L({ es: 'WhatsApp', en: 'WhatsApp', pt: 'WhatsApp', fr: 'WhatsApp' }),
      map: L({ es: 'Mapa', en: 'Sitemap', pt: 'Mapa', fr: 'Plan du site' }),
      legal: L({ es: 'Legal', en: 'Legal', pt: 'Legal', fr: 'Mentions' }),
      privacy: L({ es: 'Privacidad', en: 'Privacy', pt: 'Privacidade', fr: 'Confidentialité' }),
      terms: L({ es: 'Términos', en: 'Terms', pt: 'Termos', fr: 'Conditions' }),
      rights: L({
        es: 'Todos los derechos reservados.',
        en: 'All rights reserved.',
        pt: 'Todos os direitos reservados.',
        fr: 'Tous droits réservés.',
      }),
      nav: {
        servicios: L({ es: 'Servicios', en: 'Services', pt: 'Serviços', fr: 'Services' }),
        sistema: L({ es: 'Sistema', en: 'System', pt: 'Sistema', fr: 'Système' }),
        industrias: L({ es: 'Industrias', en: 'Industries', pt: 'Setores', fr: 'Secteurs' }),
        proyectos: L({ es: 'Proyectos', en: 'Projects', pt: 'Projetos', fr: 'Projets' }),
        pagos: L({ es: 'Pagos flexibles', en: 'Flexible payments', pt: 'Pagamentos flexíveis', fr: 'Paiements flexibles' }),
        precios: L({ es: 'Precios', en: 'Pricing', pt: 'Preços', fr: 'Tarifs' }),
        agenda: L({ es: 'Agenda', en: 'Book call', pt: 'Agenda', fr: 'Agenda' }),
        testimonios: L({ es: 'Testimonios', en: 'Testimonials', pt: 'Testemunhos', fr: 'Témoignages' }),
        contacto: L({ es: 'Contacto', en: 'Contact', pt: 'Contacto', fr: 'Contact' }),
      },
    },
    fabWa: L({
      es: 'Escríbenos por WhatsApp',
      en: 'Message us on WhatsApp',
      pt: 'Fale connosco no WhatsApp',
      fr: 'Écrivez-nous sur WhatsApp',
    }),
    lang: {
      label: L({ es: 'Idioma', en: 'Language', pt: 'Idioma', fr: 'Langue' }),
      es: 'ES Español',
      en: 'EN English',
      pt: 'PT Português',
      fr: 'FR Français',
    },
  }
}

export const LANG_CODES = ['es', 'en', 'pt', 'fr']

export const LANG_STORAGE_KEY = 'elysior_lang'

export function getCopy(lang) {
  const code = LANG_CODES.includes(lang) ? lang : 'es'
  return buildCopy(code)
}

/** Full translations object for App.jsx (re-export pattern). */
export const TRANSLATIONS = Object.fromEntries(LANG_CODES.map((lc) => [lc, buildCopy(lc)]))
