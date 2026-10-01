/**
 * ELYSIOR — multilingual site copy (EN primary).
 * Imported into App.jsx as the single translations source.
 */

const PACK_NAMES = ['Launch', 'Growth System', 'Elysior Elite']

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
    { t: 'Google Ads Ready', d: 'Una landing page clara para que un clic de pago llegue a una oferta concreta. No incluye la gestión mensual de anuncios.' },
    { t: 'Automatización Inteligente', d: 'Un chatbot en la web que responde preguntas frecuentes y guarda nombre y contacto. La reserva es por calendario, no por voz ni por WhatsApp.' },
    { t: 'Seguimiento Profesional', d: 'Rutas claras para responder con rigor, sin perder conversaciones ni oportunidades en el buzón.' },
    { t: 'Optimización Continua', d: 'Mejora sistemática con datos: copy, embudo y rendimiento afinados con criterio cuidadoso.' },
  ],
  [
    { t: 'Premium Presence', d: 'Design, narrative, and detail that signal authority from the first second — never a template feel.' },
    { t: 'Lead Capture', d: 'Forms and flows built to turn intent into actionable data and real opportunities.' },
    { t: 'Google Ads Ready', d: 'A clear landing page so a paid click arrives on one offer. This does not include monthly ads management.' },
    { t: 'Smart Automation', d: 'A website chatbot that answers common questions and stores a name and contact details. Booking is by calendar, not by voice or WhatsApp.' },
    { t: 'Professional Follow-Up', d: 'Clear paths to respond with discipline — no conversations or opportunities lost in the inbox.' },
    { t: 'Continuous Optimisation', d: 'Systematic improvement from data: copy, funnel, and performance refined with careful judgment.' },
  ],
  [
    { t: 'Presença Premium', d: 'Design, narrativa e detalhe que transmitem autoridade desde o primeiro segundo — longe de template.' },
    { t: 'Captação de Leads', d: 'Formulários e fluxos pensados para transformar intenção em dados acionáveis e oportunidades reais.' },
    { t: 'Google Ads Ready', d: 'Uma landing page clara para um clique pago chegar a uma oferta concreta. Não inclui gestão mensal de anúncios.' },
    { t: 'Automação Inteligente', d: 'Um chatbot no site que responde a perguntas frequentes e guarda nome e contacto. A reserva é por calendário, não por voz nem por WhatsApp.' },
    { t: 'Acompanhamento Profissional', d: 'Rotas claras para responder com rigor, sem perder conversas nem oportunidades na caixa de entrada.' },
    { t: 'Otimização Contínua', d: 'Melhoria sistemática com dados: copy, funil e performance afinados com critério cuidadoso.' },
  ],
  [
    { t: 'Présence premium', d: 'Design, récit et détails qui affichent l’autorité dès la première seconde — jamais l’effet « template ».' },
    { t: 'Capture de leads', d: 'Formulaires et parcours pensés pour transformer l’intention en données exploitables et opportunités réelles.' },
    { t: 'Google Ads Ready', d: 'Une landing page claire pour qu’un clic payant arrive sur une offre précise. Cela n’inclut pas la gestion mensuelle des annonces.' },
    { t: 'Automatisation intelligente', d: 'Un chatbot sur le site qui répond aux questions fréquentes et enregistre un nom et un contact. La réservation se fait par calendrier, pas par voix ni par WhatsApp.' },
    { t: 'Suivi professionnel', d: 'Des chemins clairs pour répondre avec rigueur — sans perdre fil ou opportunités dans la boîte mail.' },
    { t: 'Optimisation continue', d: 'Amélioration systématique guidée par les données : copy, tunnel et performance affinés avec un jugement soigné.' },
  ],
)

const SERVICE_ROWS = serviceCards([
  {
    es: { t: 'Website premium', d: 'Sitio de varias páginas para empresas del Reino Unido, pensado para presentar la oferta con claridad.' },
    en: { t: 'Premium website', d: 'A multi-page website for UK businesses, built to present the offer clearly.' },
    pt: { t: 'Website premium', d: 'Site de várias páginas para empresas do Reino Unido, feito para apresentar a oferta com clareza.' },
    fr: { t: 'Site premium', d: 'Site multipage pour les entreprises britanniques, conçu pour présenter l’offre clairement.' },
  },
  {
    es: { t: 'Landing page de Google Ads', d: 'Una página enfocada para una campaña. No incluye la gestión mensual continua de anuncios.' },
    en: { t: 'Google Ads landing page', d: 'A focused page for a campaign. This does not include ongoing monthly ads management.' },
    pt: { t: 'Landing page de Google Ads', d: 'Uma página focada para uma campanha. Não inclui gestão mensal contínua de anúncios.' },
    fr: { t: 'Landing page Google Ads', d: 'Une page ciblée pour une campagne. Cela n’inclut pas la gestion mensuelle continue des annonces.' },
  },
  {
    es: { t: 'Formularios de captación', d: 'Formularios que recogen los datos que necesitas de cada consulta.' },
    en: { t: 'Lead capture forms', d: 'Forms that collect the details you need from each new enquiry.' },
    pt: { t: 'Formulários de captação', d: 'Formulários que recolhem os dados de que precisa em cada contacto.' },
    fr: { t: 'Formulaires de capture', d: 'Des formulaires qui recueillent les informations nécessaires pour chaque demande.' },
  },
  {
    es: { t: 'Reserva online', d: 'Los visitantes eligen una hora en Cal.com. Es reserva por calendario, no un agente de voz por teléfono.' },
    en: { t: 'Online booking', d: 'Visitors choose a time in Cal.com. This is calendar booking, not a voice agent on the phone.' },
    pt: { t: 'Reserva online', d: 'Os visitantes escolhem um horário no Cal.com. É reserva por calendário, não um agente de voz por telefone.' },
    fr: { t: 'Réservation en ligne', d: 'Les visiteurs choisissent un créneau dans Cal.com. C’est une réservation par calendrier, pas un agent vocal au téléphone.' },
  },
  {
    es: { t: 'Chatbot de preguntas frecuentes', d: 'Responde preguntas habituales y recoge nombre y datos de contacto. No hace afirmaciones médicas ni reserva por voz.' },
    en: { t: 'FAQ chatbot', d: 'Answers common questions and captures a name and contact details. No medical or health claims, and no voice booking.' },
    pt: { t: 'Chatbot de perguntas frequentes', d: 'Responde a perguntas comuns e recolhe nome e contacto. Sem alegações médicas e sem reserva por voz.' },
    fr: { t: 'Chatbot FAQ', d: 'Répond aux questions courantes et recueille un nom et des coordonnées. Pas d’allégations médicales, ni de réservation vocale.' },
  },
  {
    es: { t: 'Botón de WhatsApp Business', d: 'Un canal de contacto para que te escriban. Sin asistente de IA ni automatización en WhatsApp.' },
    en: { t: 'WhatsApp Business button', d: 'A plain contact channel so people can message you. No AI assistant and no WhatsApp automation.' },
    pt: { t: 'Botão de WhatsApp Business', d: 'Um canal de contacto para lhe escreverem. Sem assistente de IA nem automação no WhatsApp.' },
    fr: { t: 'Bouton WhatsApp Business', d: 'Un simple canal de contact pour vous écrire. Pas d’assistant IA ni d’automatisation WhatsApp.' },
  },
])

function pick(lang, bundle) {
  return bundle[lang] || bundle.en
}

function buildCopy(lang) {
  const L = (b) => pick(lang, b)
  return {
    htmlLang: lang === 'es' ? 'es' : lang === 'pt' ? 'pt' : lang === 'fr' ? 'fr' : 'en-GB',
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
        en: 'Book a free strategy call',
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
          'Reino Unido',
          'Empresas del Reino Unido',
          'Websites Premium',
          'Landing pages',
          'Chatbot de preguntas frecuentes',
        ],
        en: [
          'United Kingdom',
          'UK Businesses',
          'Premium Websites',
          'Landing pages',
          'FAQ chatbot',
        ],
        pt: [
          'Reino Unido',
          'Empresas do Reino Unido',
          'Websites premium',
          'Landing pages',
          'Chatbot de perguntas frequentes',
        ],
        fr: [
          'Royaume-Uni',
          'Entreprises britanniques',
          'Sites premium',
          'Landing pages',
          'Chatbot FAQ',
        ],
      }),
    },
    hero: {
      eyebrow: L({
        es: 'Crecimiento digital para empresas del Reino Unido',
        en: 'Digital growth for UK businesses',
        pt: 'Crescimento digital para empresas do Reino Unido',
        fr: 'Croissance digitale pour les entreprises britanniques',
      }),
      eyebrowAccent: L({
        es: '· Reino Unido',
        en: '· United Kingdom',
        pt: '· Reino Unido',
        fr: '· Royaume-Uni',
      }),
      titleWords: L({
        es: ['Websites', 'Premium', 'Diseñadas', 'Para', 'Generar', 'Clientes'],
        en: ['Premium', 'Websites', 'Built', 'To', 'Win', 'Clients'],
        pt: ['Websites', 'Premium', 'Feitas', 'Para', 'Gerar', 'Clientes'],
        fr: ['Sites', 'Premium', 'Conçus', 'Pour', 'Attirer', 'Clients'],
      }),
      sub: L({
        es: 'Construimos websites premium, landing pages de Google Ads, formularios, reserva por calendario y un chatbot de preguntas frecuentes para empresas del Reino Unido.',
        en: 'We build premium websites, Google Ads landing pages, lead forms, calendar booking, and an FAQ chatbot for UK businesses.',
        pt: 'Construímos websites premium, landing pages de Google Ads, formulários, reserva por calendário e um chatbot de perguntas frequentes para empresas do Reino Unido.',
        fr: 'Nous créons des sites premium, des landing pages Google Ads, des formulaires, une réservation par calendrier et un chatbot FAQ pour les entreprises britanniques.',
      }),
      ctaPrimary: L({
        es: 'Agendar Diagnóstico Gratuito',
        en: 'Book a free strategy call',
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
        es: 'Diseño, datos y automatización trabajando en conjunto — el nivel que esperas de un estudio especializado, no de una plantilla.',
        en: 'Design, data, and automation working as one — the level you expect from a specialist studio, not a template.',
        pt: 'Design, dados e automação a trabalhar em conjunto — o nível que se espera de um estúdio especializado, não de um template.',
        fr: 'Design, données et automatisation au service d’un même système — le niveau attendu d’un studio spécialisé, pas d’un template.',
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
        es: 'Arquitectura de conversión, captación y automatización — con el estándar de un estudio especializado, no de un freelance genérico.',
        en: 'Conversion architecture, capture, and automation — with the standard of a specialist studio, not a generic freelancer.',
        pt: 'Arquitetura de conversão, captação e automação — com o padrão de um estúdio especializado, não de um freelance genérico.',
        fr: 'Architecture de conversion, capture et automatisation — au niveau d’un studio spécialisé, pas d’un freelance générique.',
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
        es: 'Website premium, landing page de Google Ads, formularios, reserva en Cal.com, chatbot de preguntas frecuentes y un botón de WhatsApp. Nada más, por ahora.',
        en: 'A premium website, a Google Ads landing page, lead forms, Cal.com booking, an FAQ chatbot, and a WhatsApp contact button.',
        pt: 'Website premium, landing page de Google Ads, formulários, reserva no Cal.com, chatbot de perguntas frequentes e um botão de WhatsApp.',
        fr: 'Site premium, landing page Google Ads, formulaires, réservation Cal.com, chatbot FAQ et un bouton WhatsApp.',
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
            es: 'Responde preguntas frecuentes y recoge nombre y contacto. Sin reserva por voz.',
            en: 'Answers common questions and captures a name and contact details. No voice booking.',
            pt: 'Responde a perguntas frequentes e recolhe nome e contacto. Sem reserva por voz.',
            fr: 'Répond aux questions fréquentes et recueille un nom et un contact. Pas de réservation vocale.',
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
            es: 'Landing page y configuración inicial de la campaña. Sin gestión mensual.',
            en: 'Landing page and initial campaign setup. No monthly management.',
            pt: 'Landing page e configuração inicial da campanha. Sem gestão mensal.',
            fr: 'Landing page et configuration initiale de la campagne. Pas de gestion mensuelle.',
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
            es: 'Formularios, reserva en Cal.com y chatbot en la web. WhatsApp es solo un botón de contacto.',
            en: 'Forms, Cal.com booking, and a website chatbot. WhatsApp is a contact button only.',
            pt: 'Formulários, reserva no Cal.com e chatbot no site. O WhatsApp é só um botão de contacto.',
            fr: 'Formulaires, réservation Cal.com et chatbot sur le site. WhatsApp n’est qu’un bouton de contact.',
          }),
        },
      ],
    },
    industrias: {
      eyebrow: L({ es: 'Alcance', en: 'Reach', pt: 'Alcance', fr: 'Portée' }),
      title: L({
        es: 'Trabajamos con cualquier sector',
        en: 'We work with any industry',
        pt: 'Trabalhamos com qualquer setor',
        fr: 'Nous travaillons avec tous les secteurs',
      }),
      lead: L({
        es: 'Trabajamos con empresas del Reino Unido de cualquier sector. Adaptamos la web, los anuncios y la automatización a cada negocio.',
        en: 'We work with UK businesses in any industry. We adapt the website, ads and automation to each business.',
        pt: 'Trabalhamos com empresas do Reino Unido de qualquer setor. Adaptamos o site, os anúncios e a automação a cada negócio.',
        fr: 'Nous travaillons avec des entreprises britanniques de tous les secteurs. Nous adaptons le site, les annonces et l’automatisation à chaque entreprise.',
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
        es: 'Cada proyecto fue diseñado según las necesidades, estilo y objetivos específicos de cada cliente. Estos ejemplos muestran trabajos reales entregados.',
        en: 'Each project was shaped around that client’s specific needs, visual style, and goals. These examples show real work we have delivered.',
        pt: 'Cada projeto foi desenhado às necessidades, estilo e objetivos específicos de cada cliente. Estes exemplos mostram trabalhos reais entregues.',
        fr: 'Chaque projet a été conçu selon les besoins, le style et les objectifs propres à chaque client. Ces exemples montrent des livrables réels.',
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
        es: 'Estos proyectos fueron desarrollados según el brief, presupuesto y prioridades de cada cliente. Hoy el alcance público es website, landing page, formularios, reserva en Cal.com, chatbot de preguntas frecuentes y un botón de WhatsApp.',
        en: 'These projects were delivered according to each client’s brief, budget, and priorities. The public offer today is a website, a landing page, forms, Cal.com booking, an FAQ chatbot, and a WhatsApp button.',
        pt: 'Estes projetos foram desenvolvidos conforme o brief, orçamento e prioridades de cada cliente. A oferta pública de hoje é website, landing page, formulários, reserva no Cal.com, chatbot de perguntas frequentes e um botão de WhatsApp.',
        fr: 'Ces projets ont été réalisés selon le brief, le budget et les priorités de chaque client. L’offre publique actuelle est un site, une landing page, des formulaires, une réservation Cal.com, un chatbot FAQ et un bouton WhatsApp.',
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
        es: 'Referencias transparentes en GBP. Cada proyecto puede adaptarse según el tamaño, presupuesto y objetivos del negocio.',
        en: "Transparent GBP starting points. Every project can adapt to your business's size, budget and goals.",
        pt: 'Referências transparentes em GBP. Cada projeto pode adaptar-se ao tamanho, orçamento e objetivos do negócio.',
        fr: 'Repères transparents en GBP. Chaque projet s’adapte à la taille, au budget et aux objectifs de l’entreprise.',
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
            es: 'Desde £990',
            en: 'From £990',
            pt: 'A partir de £990',
            fr: 'À partir de 990 £',
          }),
          blurb: L({
            es: 'Para negocios que necesitan una presencia online premium y clara.',
            en: 'For small businesses that need a premium online presence.',
            pt: 'Para negócios que precisam de uma presença online premium e clara.',
            fr: 'Pour les entreprises qui veulent une présence en ligne premium et claire.',
          }),
          features: L({
            es: [
              'Sitio premium de una página o sitio pequeño',
              'Diseño adaptable',
              'Formulario de contacto',
              'Botón de WhatsApp',
              'SEO básico',
              'Optimización de velocidad',
            ],
            en: [
              'Premium one-page or small site',
              'Responsive design',
              'Contact form',
              'WhatsApp button',
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
            en: 'Book a free strategy call',
            pt: 'Agendar Diagnóstico Gratuito',
            fr: 'Réserver un diagnostic gratuit',
          }),
          highlighted: false,
        },
        {
          name: PACK_NAMES[1],
          ctaKind: 'strategy',
          price: L({
            es: 'Desde £1,990',
            en: 'From £1,990',
            pt: 'A partir de £1.990',
            fr: 'À partir de 1 990 £',
          }),
          blurb: L({
            es: 'Para empresas listas para generar leads con estructura y medición.',
            en: 'For businesses ready to generate leads.',
            pt: 'Para empresas prontas para gerar leads com estrutura e medição.',
            fr: 'Pour les entreprises prêtes à générer des leads avec structure et mesure.',
          }),
          features: L({
            es: [
              'Sitio web de varias páginas',
              'Landing page para Google Ads',
              'Copywriting de conversión',
              'Formularios de captación',
              'Configuración de analítica',
              'Reserva en calendario',
              'Chatbot de preguntas frecuentes y captación',
            ],
            en: [
              'Multi-page website',
              'Google Ads landing page',
              'Conversion copywriting',
              'Lead capture forms',
              'Analytics setup',
              'Calendar booking',
              'FAQ and lead-capture chatbot',
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
            es: 'Desde £3,990',
            en: 'From £3,990',
            pt: 'A partir de £3.990',
            fr: 'À partir de 3 990 £',
          }),
          blurb: L({
            es: 'Para empresas que quieren un sistema completo de captación de clientes.',
            en: 'For businesses that want a full client acquisition system.',
            pt: 'Para empresas que querem um sistema completo de captação de clientes.',
            fr: 'Pour les entreprises qui veulent un système complet d’acquisition clients.',
          }),
          features: L({
            es: [
              'Todo lo incluido en Growth System',
              'Configuración inicial de una campaña de Google Ads',
              'Solo configuración, no gestión continua',
            ],
            en: [
              'Everything in Growth System',
              'Initial Google Ads campaign setup',
              'Setup only, not ongoing management',
            ],
            pt: [
              'Tudo o que está no Growth System',
              'Configuração inicial de uma campanha de Google Ads',
              'Só a configuração, sem gestão contínua',
            ],
            fr: [
              'Tout ce qui est dans Growth System',
              'Configuration initiale d’une campagne Google Ads',
              'Configuration seulement, pas de gestion continue',
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
          en: 'Book a free strategy call',
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
        es: ['Google Meet', 'Sin compromiso', 'Empresas del Reino Unido', 'Horario del Reino Unido'],
        en: ['Google Meet', 'No obligation', 'UK businesses', 'UK time zones'],
        pt: ['Google Meet', 'Sem compromisso', 'Empresas do Reino Unido', 'Fuso horário do Reino Unido'],
        fr: ['Google Meet', 'Sans engagement', 'Entreprises britanniques', 'Fuseaux horaires du Royaume-Uni'],
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
          'Hecho para empresas del Reino Unido',
          'Trabajamos en horario del Reino Unido',
        ],
        en: [
          'Replies on business days',
          'Built for UK businesses',
          'We work in UK time zones',
        ],
        pt: [
          'Resposta em dias úteis',
          'Feito para empresas do Reino Unido',
          'Trabalhamos no fuso horário do Reino Unido',
        ],
        fr: [
          'Réponse sous quelques jours ouvrés',
          'Conçu pour les entreprises britanniques',
          'Nous travaillons sur les fuseaux horaires du Royaume-Uni',
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
          { value: 'lt_500', label: 'Menos de £500' },
          { value: '500_1500', label: '£500 – £1,500' },
          { value: '1500_5000', label: '£1,500 – £5,000' },
          { value: '5000_15000', label: '£5,000 – £15,000' },
          { value: 'gt_15000', label: 'Más de £15,000' },
          { value: 'discuss', label: 'Prefiero comentarlo' },
        ],
        en: [
          { value: '', label: 'Select' },
          { value: 'lt_500', label: 'Under £500' },
          { value: '500_1500', label: '£500 – £1,500' },
          { value: '1500_5000', label: '£1,500 – £5,000' },
          { value: '5000_15000', label: '£5,000 – £15,000' },
          { value: 'gt_15000', label: 'Over £15,000' },
          { value: 'discuss', label: 'Prefer to discuss' },
        ],
        pt: [
          { value: '', label: 'Selecionar' },
          { value: 'lt_500', label: 'Menos de £500' },
          { value: '500_1500', label: '£500 – £1.500' },
          { value: '1500_5000', label: '£1.500 – £5.000' },
          { value: '5000_15000', label: '£5.000 – £15.000' },
          { value: 'gt_15000', label: 'Mais de £15.000' },
          { value: 'discuss', label: 'Prefiro comentar' },
        ],
        fr: [
          { value: '', label: 'Sélectionner' },
          { value: 'lt_500', label: 'Moins de 500 £' },
          { value: '500_1500', label: '500 – 1 500 £' },
          { value: '1500_5000', label: '1 500 – 5 000 £' },
          { value: '5000_15000', label: '5 000 – 15 000 £' },
          { value: 'gt_15000', label: 'Plus de 15 000 £' },
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
          { quote: 'Por fin tenemos una web que se siente humana y vende. El equipo entendió nuestra etapa y armó un plan realista.', name: 'Laura Méndez', role: 'Directora, clínica de bienestar' },
          { quote: 'Trabajar con ELYSIOR es orden y calidad. Ads y landing alineados: menos ruido, más citas calificadas.', name: 'Andrés Villalobos', role: 'Fundador, servicios B2B' },
          { quote: 'Necesitábamos flexibilidad de pago y entregas por fases. Cumplieron sin perder el estándar premium.', name: 'Marina Ortega', role: 'CEO, marca personal' },
          { quote: 'La automatización nos devolvió tiempo. Los leads llegan ordenados y el seguimiento ya no depende de Excel.', name: 'James Whitmore', role: 'Partner, firma profesional — UK' },
        ],
        en: [
          { quote: 'We finally have a site that feels human and sells. The team understood our stage and built a realistic plan.', name: 'Laura Méndez', role: 'Director, wellness clinic' },
          { quote: 'Working with ELYSIOR is clarity and quality. Ads and landing aligned: less noise, more qualified bookings.', name: 'Andrés Villalobos', role: 'Founder, B2B services' },
          { quote: 'We needed payment flexibility and phased delivery. They delivered without losing the premium standard.', name: 'Marina Ortega', role: 'CEO, personal brand' },
          { quote: 'Automation gave us time back. Leads arrive organised; follow-up no longer lives in spreadsheets.', name: 'James Whitmore', role: 'Partner, professional firm — UK' },
        ],
        pt: [
          { quote: 'Finalmente temos um site humano que vende. A equipa entendeu a nossa fase e montou um plano realista.', name: 'Laura Méndez', role: 'Diretora, clínica de bem-estar' },
          { quote: 'Trabalhar com ELYSIOR é ordem e qualidade. Ads e landing alinhados: menos ruído, mais reuniões qualificadas.', name: 'Andrés Villalobos', role: 'Fundador, serviços B2B' },
          { quote: 'Precisávamos de flexibilidade de pagamento e entregas por fases. Cumpriram sem perder o padrão premium.', name: 'Marina Ortega', role: 'CEO, marca pessoal' },
          { quote: 'A automação devolveu-nos tempo. Os leads chegam organizados e o acompanhamento já não depende do Excel.', name: 'James Whitmore', role: 'Partner, firma profissional — UK' },
        ],
        fr: [
          { quote: 'Nous avons enfin un site humain qui vend. L’équipe a compris notre stade et a bâti un plan réaliste.', name: 'Laura Méndez', role: 'Directrice, clinique bien-être' },
          { quote: 'Avec ELYSIOR : clarté et qualité. Annonces et landing alignées : moins de bruit, plus de rendez-vous qualifiés.', name: 'Andrés Villalobos', role: 'Fondateur, services B2B' },
          { quote: 'Nous voulions des paiements flexibles et des livraisons par phases. Ils ont tenu le niveau premium.', name: 'Marina Ortega', role: 'CEO, marque personnelle' },
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
          { q: '¿Trabajan con empresas del Reino Unido?', a: 'Sí. Construimos para empresas del Reino Unido y trabajamos en horario del Reino Unido, por videollamada y con comunicación clara.' },
          { q: '¿Pueden ayudar con Google Ads?', a: 'Podemos preparar la landing page y la configuración inicial de una campaña. No gestionamos campañas de forma mensual. La inversión publicitaria la pagas tú directamente a la plataforma.' },
        ],
        en: [
          { q: 'Do you work with small businesses?', a: 'Yes. We support local founders and larger teams alike. What matters is fit on goals and stage — we propose realistic plans, not empty promises.' },
          { q: 'Can I pay in phases?', a: 'Absolutely. Many projects are phased — discovery, design, build, launch, and optimisation — so investment stays manageable.' },
          { q: 'Do you offer support?', a: 'Yes. Support depends on scope: from a documented handover to ongoing partnership on Growth System and ELITE.' },
          { q: 'Do you work with UK businesses?', a: 'Yes. We build for UK businesses and work with UK time zones, by video and with clear written follow-up.' },
          { q: 'Can you help with Google Ads?', a: 'We can build the landing page and complete the initial campaign setup. We do not provide ongoing monthly campaign management. You pay ad spend directly to the ad platform.' },
        ],
        pt: [
          { q: 'Trabalham com negócios pequenos?', a: 'Sim. Acompanhamos desde empreendedores locais até equipas maiores. O importante é alinhar objetivos e fase: propostas realistas, sem promessas vazias.' },
          { q: 'Posso pagar por fases?', a: 'Claro. Muitos projetos são por fases — descoberta, design, desenvolvimento, lançamento e otimização — para o investimento ser gerível.' },
          { q: 'Oferecem suporte?', a: 'Sim. O suporte depende do âmbito: desde handover documentado até acompanhamento contínuo nos planos Growth System e ELITE.' },
          { q: 'Trabalham com empresas do Reino Unido?', a: 'Sim. Construímos para empresas do Reino Unido e trabalhamos no fuso horário do Reino Unido, por vídeo e com comunicação clara.' },
          { q: 'Podem ajudar com Google Ads?', a: 'Podemos criar a landing page e fazer a configuração inicial da campanha. Não fazemos gestão mensal contínua. O investimento publicitário é pago por si à plataforma.' },
        ],
        fr: [
          { q: 'Travaillez-vous avec les petites entreprises ?', a: 'Oui. Nous accompagnons les indépendants comme les équipes plus grandes. L’essentiel est l’alignement sur les objectifs et le stade — des propositions réalistes.' },
          { q: 'Puis-je payer en plusieurs fois ?', a: 'Oui. Beaucoup de projets sont découpés — découverte, design, développement, lancement, optimisation — pour garder l’investissement maîtrisé.' },
          { q: 'Proposez-vous du support ?', a: 'Oui. Le niveau dépend du périmètre : remise documentée ou accompagnement continu sur Growth System et ELITE.' },
          { q: 'Travaillez-vous avec des entreprises britanniques ?', a: 'Oui. Nous concevons pour des entreprises britanniques et travaillons sur les fuseaux horaires du Royaume-Uni, en visio et par écrit.' },
          { q: 'Pouvez-vous aider sur Google Ads ?', a: 'Nous pouvons créer la landing page et réaliser la configuration initiale de la campagne. Nous ne gérons pas les campagnes au mois. Le budget publicitaire est payé par vous à la plateforme.' },
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
        es: 'ELYSIOR ayuda a empresas del Reino Unido con websites premium, landing pages de Google Ads, formularios, reserva en calendario y un chatbot de preguntas frecuentes.',
        en: 'ELYSIOR helps UK businesses with premium websites, Google Ads landing pages, lead forms, calendar booking, and an FAQ chatbot.',
        pt: 'A ELYSIOR ajuda empresas do Reino Unido com websites premium, landing pages de Google Ads, formulários, reserva em calendário e um chatbot de perguntas frequentes.',
        fr: 'ELYSIOR aide les entreprises britanniques avec des sites premium, des landing pages Google Ads, des formulaires, une réservation par calendrier et un chatbot FAQ.',
      }),
      ctaPrimary: L({
        es: 'Agendar Diagnóstico Gratuito',
        en: 'Book a free strategy call',
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
        es: 'Websites premium · Landing pages · Chatbot de preguntas frecuentes',
        en: 'Premium websites · Landing pages · FAQ chatbot',
        pt: 'Websites premium · Landing pages · Chatbot de perguntas frequentes',
        fr: 'Sites premium · Landing pages · Chatbot FAQ',
      }),
      geoLine: L({
        es: 'Reino Unido',
        en: 'United Kingdom',
        pt: 'Reino Unido',
        fr: 'Royaume-Uni',
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

export const LANG_CODES = ['en', 'es', 'pt', 'fr']

export const LANG_STORAGE_KEY = 'elysior_lang'

export function getCopy(lang) {
  const code = LANG_CODES.includes(lang) ? lang : 'en'
  return buildCopy(code)
}

/** Full translations object for App.jsx (re-export pattern). */
export const TRANSLATIONS = Object.fromEntries(LANG_CODES.map((lc) => [lc, buildCopy(lc)]))
