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
    { t: 'Website Premium', d: 'Presencia digital rápida, clara y memorable — diseñada para guiar al visitante hacia la acción correcta.' },
    { t: 'Google Ads Funnel', d: 'Tráfico de pago alineado con mensajes y páginas específicas, para que cada clic tenga intención y contexto.' },
    { t: 'Captación Inteligente', d: 'Formularios, chat y flujos que califican interés y capturan datos sin fricción innecesaria.' },
    { t: 'Automatización', d: 'Reglas y disparadores que mueven leads hacia seguimiento, CRM o reservas sin depender del azar.' },
    { t: 'Seguimiento de Leads', d: 'Nada se pierde en el buzón: rutas claras para responder a tiempo y con el mensaje adecuado.' },
    { t: 'Optimización de Conversión', d: 'Mejora continua basada en datos reales — copy, estructura y embudo afinados con criterio.' },
  ],
  [
    { t: 'Premium Website', d: 'A fast, clear, memorable digital presence — designed to guide visitors toward the right action.' },
    { t: 'Google Ads Funnel', d: 'Paid traffic aligned with specific messages and pages, so every click has intent and context.' },
    { t: 'Smart Lead Capture', d: 'Forms, chat, and flows that qualify interest and capture data without unnecessary friction.' },
    { t: 'Automation', d: 'Rules and triggers that move leads into follow-up, CRM, or bookings — not left to chance.' },
    { t: 'Lead Follow-Up', d: 'Nothing gets lost in the inbox: clear paths to respond on time with the right message.' },
    { t: 'Conversion Optimisation', d: 'Continuous improvement from real data — copy, structure, and funnel refined with judgment.' },
  ],
  [
    { t: 'Website Premium', d: 'Presença digital rápida, clara e memorável — feita para guiar o visitante à ação certa.' },
    { t: 'Funil Google Ads', d: 'Tráfego pago alinhado a mensagens e páginas específicas, para que cada clique tenha intenção e contexto.' },
    { t: 'Captação Inteligente', d: 'Formulários, chat e fluxos que qualificam interesse e capturam dados sem fricção desnecessária.' },
    { t: 'Automação', d: 'Regras e gatilhos que levam leads ao acompanhamento, CRM ou reservas — sem depender do acaso.' },
    { t: 'Acompanhamento de Leads', d: 'Nada se perde na caixa de entrada: rotas claras para responder a tempo com a mensagem certa.' },
    { t: 'Otimização de Conversão', d: 'Melhoria contínua com base em dados reais — copy, estrutura e funil afinados com critério.' },
  ],
  [
    { t: 'Site web premium', d: 'Présence digitale rapide, claire et mémorable — conçue pour guider le visiteur vers la bonne action.' },
    { t: 'Tunnel Google Ads', d: 'Trafic payant aligné sur des messages et pages dédiés, pour que chaque clic ait intention et contexte.' },
    { t: 'Capture intelligente', d: 'Formulaires, chat et parcours qui qualifient l’intérêt et capturent les données sans friction inutile.' },
    { t: 'Automatisation', d: 'Règles et déclencheurs qui orientent les leads vers le suivi, le CRM ou les réservations.' },
    { t: 'Suivi des leads', d: 'Rien ne se perd dans la boîte mail : des chemins clairs pour répondre à temps avec le bon message.' },
    { t: 'Optimisation de conversion', d: 'Amélioration continue basée sur des données réelles — copy, structure et tunnel affinés avec exigence.' },
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
      ctaProposal: L({
        es: 'Solicitar propuesta',
        en: 'Request proposal',
        pt: 'Solicitar proposta',
        fr: 'Demander une proposition',
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
    hero: {
      eyebrow: L({
        es: 'Partner digital global',
        en: 'Global digital partner',
        pt: 'Parceiro digital global',
        fr: 'Partenaire digital mondial',
      }),
      eyebrowAccent: L({
        es: '· Crecimiento premium',
        en: '· Premium growth',
        pt: '· Crescimento premium',
        fr: '· Croissance premium',
      }),
      titleWords: L({
        es: ['Websites', 'Diseñadas', 'Para', 'Generar', 'Clientes'],
        en: ['Websites', 'Built', 'To', 'Win', 'Clients'],
        pt: ['Websites', 'Feitas', 'Para', 'Gerar', 'Clientes'],
        fr: ['Sites', 'Conçus', 'Pour', 'Attirer', 'Clients'],
      }),
      sub: L({
        es: 'Websites premium, campañas de Google Ads y sistemas inteligentes diseñados para ayudar a empresas a crecer, captar clientes y automatizar oportunidades.',
        en: 'Premium websites, Google Ads campaigns, and intelligent systems built to help businesses grow, win clients, and automate opportunities.',
        pt: 'Websites premium, campanhas Google Ads e sistemas inteligentes feitos para ajudar empresas a crescer, captar clientes e automatizar oportunidades.',
        fr: 'Sites premium, campagnes Google Ads et systèmes intelligents conçus pour aider les entreprises à croître, attirer des clients et automatiser les opportunités.',
      }),
      ctaPrimary: L({
        es: 'Solicitar Propuesta',
        en: 'Request Proposal',
        pt: 'Solicitar Proposta',
        fr: 'Demander une proposition',
      }),
      ctaSecondary: L({
        es: 'Agendar Diagnóstico Gratuito',
        en: 'Book Free Diagnostic',
        pt: 'Agendar Diagnóstico Gratuito',
        fr: 'Réserver un diagnostic gratuit',
      }),
      badges: L({
        es: [
          'Optimizado para Conversión',
          'Google Ads Ready',
          'AI Lead Systems',
          'Mobile Optimized',
          'Opciones de Pago Flexibles',
        ],
        en: [
          'Conversion-Optimised',
          'Google Ads Ready',
          'AI Lead Systems',
          'Mobile Optimized',
          'Flexible Payment Options',
        ],
        pt: [
          'Otimizado para Conversão',
          'Google Ads Ready',
          'AI Lead Systems',
          'Mobile Optimized',
          'Opções de Pagamento Flexíveis',
        ],
        fr: [
          'Optimisé pour la conversion',
          'Google Ads Ready',
          'AI Lead Systems',
          'Mobile Optimized',
          'Options de paiement flexibles',
        ],
      }),
      badgesAria: L({
        es: 'Señales de confianza',
        en: 'Trust signals',
        pt: 'Sinais de confiança',
        fr: 'Signaux de confiance',
      }),
      mockupUrl: 'elysior.studio · growth',
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
        es: 'Un mismo relato, un embudo coherente y captación siempre activa — para marcas que buscan confianza y resultados.',
        en: 'One narrative, one coherent funnel, and always-on capture — for brands that want trust and results.',
        pt: 'Uma narrativa, um funil coerente e captação sempre ativa — para marcas que buscam confiança e resultados.',
        fr: 'Une même narration, un tunnel cohérent et une capture toujours active — pour les marques qui veulent confiance et résultats.',
      }),
      mockupTags: L({
        es: ['Web', 'Ads', 'IA'],
        en: ['Web', 'Ads', 'AI'],
        pt: ['Web', 'Ads', 'IA'],
        fr: ['Web', 'Ads', 'IA'],
      }),
      mockupPill: L({
        es: 'Pipeline activo',
        en: 'Active pipeline',
        pt: 'Pipeline ativo',
        fr: 'Pipeline actif',
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
        es: 'Realidad del mercado',
        en: 'Market reality',
        pt: 'Realidade de mercado',
        fr: 'Réalité du marché',
      }),
      title: L({
        es: 'La mayoría de websites se ven bien. Pocas generan clientes.',
        en: 'Most websites look good. Few actually win clients.',
        pt: 'A maioria dos sites parece boa. Poucos geram clientes.',
        fr: 'La plupart des sites sont beaux. Peu génèrent des clients.',
      }),
      lead: L({
        es: 'Un sitio lento hace que la gente se vaya antes de entender tu propuesta. Un sitio genérico no diferencia ni genera confianza. Sin automatización, el crecimiento depende de esfuerzo manual constante. Y sin sistemas de captación claros, la demanda potencial se convierte en ingresos perdidos.',
        en: 'A slow site makes people leave before they understand your offer. A generic site doesn’t differentiate or build trust. Without automation, growth depends on constant manual effort. And without clear capture systems, potential demand becomes lost revenue.',
        pt: 'Um site lento faz as pessoas saírem antes de entender a sua proposta. Um site genérico não diferencia nem gera confiança. Sem automação, o crescimento depende de esforço manual constante. E sem sistemas de captação claros, a procura potencial vira receita perdida.',
        fr: 'Un site lent fait partir les visiteurs avant qu’ils comprennent votre offre. Un site générique ne se distingue pas et ne rassure pas. Sans automatisation, la croissance repose sur un effort manuel constant. Et sans systèmes de capture clairs, la demande potentielle se transforme en revenus perdus.',
      }),
      noteHtml: L({
        es: ['En ELYSIOR combinamos ', 'diseño serio', ' con ', 'estrategia humana', ' — para empresas en distintas etapas que necesitan orden, claridad y flexibilidad.'],
        en: ['At ELYSIOR we combine ', 'serious design', ' with ', 'human strategy', ' — for businesses at every stage that need clarity, order, and flexibility.'],
        pt: ['Na ELYSIOR combinamos ', 'design sério', ' com ', 'estratégia humana', ' — para empresas em diferentes fases que precisam de ordem, clareza e flexibilidade.'],
        fr: ['Chez ELYSIOR nous allions ', 'design exigeant', ' et ', 'stratégie humaine', ' — pour les entreprises à tout stade qui veulent clarté, cadre et flexibilité.'],
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
      eyebrow: L({ es: 'Metodología', en: 'Method', pt: 'Metodologia', fr: 'Méthode' }),
      title: L({ es: 'El Sistema ELYSIOR', en: 'The ELYSIOR System', pt: 'O Sistema ELYSIOR', fr: 'Le système ELYSIOR' }),
      lead: L({
        es: 'Seis pilares que convierten tu presencia digital en un canal de crecimiento — con la elegancia de un producto SaaS premium y el tacto de un equipo que escucha.',
        en: 'Six pillars that turn your digital presence into a growth channel — with SaaS-grade polish and a team that actually listens.',
        pt: 'Seis pilares que transformam a sua presença digital num canal de crescimento — com o polimento de um produto SaaS premium e uma equipa que ouve.',
        fr: 'Six piliers qui font de votre présence digitale un levier de croissance — avec le soin d’un SaaS premium et une équipe à l’écoute.',
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
        es: 'Capacidades para crecer con criterio',
        en: 'Capabilities to grow with judgment',
        pt: 'Capacidades para crescer com critério',
        fr: 'Capacités pour croître avec exigence',
      }),
      lead: L({
        es: 'Desde la primera impresión hasta la automatización del embudo — piezas que se integran sin perder calidad ni confianza.',
        en: 'From first impression to funnel automation — pieces that fit together without losing quality or trust.',
        pt: 'Da primeira impressão à automação do funil — peças que se integram sem perder qualidade nem confiança.',
        fr: 'De la première impression à l’automatisation du tunnel — des briques qui s’assemblent sans sacrifier qualité ni confiance.',
      }),
      cards: SERVICE_ROWS.map((c) => ({
        icon: c.icon,
        title: c.title[lang],
        description: c.description[lang],
      })),
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
      eyebrow: L({ es: 'Enfoque humano', en: 'Human approach', pt: 'Abordagem humana', fr: 'Approche humaine' }),
      title: L({
        es: 'Soluciones Flexibles Para Tu Negocio',
        en: 'Flexible Solutions For Your Business',
        pt: 'Soluções Flexíveis Para o Seu Negócio',
        fr: 'Des solutions flexibles pour votre entreprise',
      }),
      lead: L({
        es: 'Entendemos que cada empresa está en una etapa diferente. Por eso ofrecemos soluciones escalables, pagos por etapas y opciones ajustadas a diferentes presupuestos.',
        en: 'We know every business is at a different stage. That’s why we offer scalable solutions, phased payments, and options that fit different budgets.',
        pt: 'Sabemos que cada empresa está numa fase diferente. Por isso oferecemos soluções escaláveis, pagos por fases e opções adequadas a diferentes orçamentos.',
        fr: 'Chaque entreprise est à un stade différent. Nous proposons donc des solutions évolutives, des paiements échelonnés et des options adaptées à différents budgets.',
      }),
      cards: L({
        es: [
          { title: 'Pagos por etapas', text: 'Proyectos divididos en hitos claros para que inviertas con orden y visibilidad.' },
          { title: 'Soluciones escalables', text: 'Empieza donde estés hoy y amplía módulos cuando tu negocio esté listo para más.' },
          { title: 'Opciones personalizadas', text: 'Ajustamos alcance y entregables según prioridades, plazos y presupuesto.' },
          { title: 'Soporte estratégico', text: 'Acompañamiento humano: respuestas directas, sin jerga innecesaria.' },
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
    precios: {
      eyebrow: L({ es: 'Inversión', en: 'Investment', pt: 'Investimento', fr: 'Investissement' }),
      title: L({
        es: 'Planes de partida — sin rigidez',
        en: 'Starting points — not rigid',
        pt: 'Planos iniciais — sem rigidez',
        fr: 'Points de départ — sans rigidité',
      }),
      lead: L({
        es: 'Referencias transparentes en USD para orientar. Cada proyecto puede adaptarse según las necesidades y objetivos del negocio.',
        en: 'Transparent USD references to guide you. Every project can be tailored to your needs and business goals.',
        pt: 'Referências transparentes em USD para orientar. Cada projeto pode adaptar-se às necessidades e objetivos do negócio.',
        fr: 'Repères transparents en USD pour vous orienter. Chaque projet peut être adapté aux besoins et objectifs de l’entreprise.',
      }),
      badge: L({ es: 'Recomendado', en: 'Recommended', pt: 'Recomendado', fr: 'Recommandé' }),
      ctaPlan: L({
        es: 'Conversar este plan',
        en: 'Discuss this plan',
        pt: 'Falar deste plano',
        fr: 'Parler de cette offre',
      }),
      footnote: L({
        es: 'Cada propuesta se ajusta a tu contexto. Hablemos sin compromiso — en español, inglés, portugués o francés, según prefieras. ',
        en: 'Every proposal fits your context. Let’s talk with no obligation — in Spanish, English, Portuguese, or French, as you prefer. ',
        pt: 'Cada proposta adapta-se ao seu contexto. Vamos conversar sem compromisso — em espanhol, inglês, português ou francês, como preferir. ',
        fr: 'Chaque proposition s’adapte à votre contexte. Parlons sans engagement — en espagnol, anglais, portugais ou français, selon votre préférence. ',
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
          price: L({
            es: 'Desde $497 USD',
            en: 'From $497 USD',
            pt: 'A partir de $497 USD',
            fr: 'À partir de 497 $ USD',
          }),
          blurb: L({
            es: 'Base sólida para destacar online y captar consultas con profesionalismo.',
            en: 'A solid base to stand out online and capture enquiries professionally.',
            pt: 'Base sólida para destacar online e captar consultas com profissionalismo.',
            fr: 'Une base solide pour briller en ligne et capter des demandes avec professionnalisme.',
          }),
          features: L({
            es: ['Landing page premium', 'Diseño responsive', 'Integración WhatsApp', 'Formularios de contacto', 'SEO básico', 'Optimización de velocidad'],
            en: ['Premium landing page', 'Responsive design', 'WhatsApp integration', 'Contact forms', 'Basic SEO', 'Speed optimisation'],
            pt: ['Landing page premium', 'Design responsivo', 'Integração WhatsApp', 'Formulários de contacto', 'SEO básico', 'Otimização de velocidade'],
            fr: ['Landing page premium', 'Design responsive', 'Intégration WhatsApp', 'Formulaires de contact', 'SEO de base', 'Optimisation de la vitesse'],
          }),
          highlighted: false,
        },
        {
          name: PACK_NAMES[1],
          price: L({
            es: 'Desde $997 USD',
            en: 'From $997 USD',
            pt: 'A partir de $997 USD',
            fr: 'À partir de 997 $ USD',
          }),
          blurb: L({
            es: 'Para marcas que quieren sitio completo, anuncios alineados y captación estructurada.',
            en: 'For brands that want a full site, aligned ads, and structured capture.',
            pt: 'Para marcas que querem site completo, anúncios alinhados e captação estruturada.',
            fr: 'Pour les marques qui veulent un site complet, des annonces alignées et une capture structurée.',
          }),
          features: L({
            es: ['Sitio web multipágina', 'Landing page para Google Ads', 'Copy orientado a conversión', 'Integración de analítica', 'Sistema de captación de leads', 'Diseño premium'],
            en: ['Multi-page website', 'Google Ads landing page', 'Conversion-focused copy', 'Analytics integration', 'Lead capture system', 'Premium design'],
            pt: ['Website multipágina', 'Landing page para Google Ads', 'Copy focado em conversão', 'Integração de analytics', 'Sistema de captação de leads', 'Design premium'],
            fr: ['Site multipage', 'Landing page Google Ads', 'Copy orienté conversion', 'Intégration analytics', 'Système de capture de leads', 'Design premium'],
          }),
          highlighted: true,
        },
        {
          name: PACK_NAMES[2],
          price: L({
            es: 'Desde $1,997 USD',
            en: 'From $1,997 USD',
            pt: 'A partir de $1.997 USD',
            fr: 'À partir de 1 997 $ USD',
          }),
          blurb: L({
            es: 'Sistema integral: web de alto nivel, IA, embudo de ads y automatización.',
            en: 'Full system: high-end web, AI, ads funnel, and automation.',
            pt: 'Sistema integral: web de alto nível, IA, funil de ads e automação.',
            fr: 'Système complet : site haut de gamme, IA, tunnel ads et automatisation.',
          }),
          features: L({
            es: ['Sitio web custom premium', 'Sistemas de leads con IA', 'Embudo Google Ads', 'Configuración CRM', 'Integraciones de reservas', 'Sistema de automatización', 'Optimización estratégica'],
            en: ['Premium custom website', 'AI lead systems', 'Google Ads funnel', 'CRM setup', 'Booking integrations', 'Automation system', 'Strategic optimisation'],
            pt: ['Website custom premium', 'Sistemas de leads com IA', 'Funil Google Ads', 'Configuração CRM', 'Integrações de reservas', 'Sistema de automação', 'Otimização estratégica'],
            fr: ['Site sur mesure premium', 'Systèmes de leads IA', 'Tunnel Google Ads', 'Configuration CRM', 'Intégrations de réservation', 'Système d’automatisation', 'Optimisation stratégique'],
          }),
          highlighted: false,
        },
      ],
    },
    lead: {
      eyebrow: L({ es: 'Contacto directo', en: 'Direct contact', pt: 'Contacto direto', fr: 'Contact direct' }),
      title: L({
        es: 'Cuéntanos sobre tu negocio',
        en: 'Tell us about your business',
        pt: 'Conte-nos sobre o seu negócio',
        fr: 'Parlez-nous de votre entreprise',
      }),
      lead: L({
        es: 'Respuesta humana, sin presión. Revisamos tu mensaje y te proponemos el siguiente paso — ya sea una propuesta, una llamada o un diagnóstico inicial.',
        en: 'A human reply, zero pressure. We review your message and suggest the next step — proposal, call, or initial diagnostic.',
        pt: 'Resposta humana, sem pressão. Analisamos a sua mensagem e sugerimos o próximo passo — proposta, chamada ou diagnóstico inicial.',
        fr: 'Une réponse humaine, sans pression. Nous lisons votre message et proposons la suite — devis, appel ou diagnostic initial.',
      }),
      points: L({
        es: [
          'Tiempo de respuesta ágil en días hábiles',
          'Enfoque claro: encaje y transparencia',
          'Operación Costa Rica · UK · clientes remotos',
        ],
        en: [
          'Prompt replies on business days',
          'Clear fit and transparency',
          'Costa Rica · UK operations · remote clients worldwide',
        ],
        pt: [
          'Resposta rápida em dias úteis',
          'Foco claro: fit e transparência',
          'Operação Costa Rica · Reino Unido · clientes remotos',
        ],
        fr: [
          'Réponses rapides les jours ouvrés',
          'Alignement et transparence',
          'Costa Rica · Royaume-Uni · clients à distance',
        ],
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
        es: 'Solicitar Estrategia',
        en: 'Request Strategy',
        pt: 'Solicitar Estratégia',
        fr: 'Demander une stratégie',
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
        es: 'No se pudo enviar. Inténtalo de nuevo o escríbenos por email.',
        en: 'We couldn’t send that. Please try again or email us.',
        pt: 'Não foi possível enviar. Tente novamente ou envie um email.',
        fr: 'Envoi impossible. Réessayez ou écrivez-nous par email.',
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
        es: 'Tu Website Debe Trabajar Como Tu Mejor Vendedor',
        en: 'Your Website Should Work Like Your Best Salesperson',
        pt: 'O Seu Website Deve Trabalhar Como o Seu Melhor Vendedor',
        fr: 'Votre site doit travailler comme votre meilleur commercial',
      }),
      text: L({
        es: 'ELYSIOR combina diseño premium, estrategia y automatización para ayudarte a crecer — con un trato profesional y cercano, estés donde estés.',
        en: 'ELYSIOR blends premium design, strategy, and automation to help you grow — professional, approachable, wherever you are.',
        pt: 'A ELYSIOR combina design premium, estratégia e automação para o ajudar a crescer — profissional e próximo, onde estiver.',
        fr: 'ELYSIOR combine design premium, stratégie et automatisation pour vous aider à croître — proche et professionnel, où que vous soyez.',
      }),
      ctaPrimary: L({
        es: 'Comenzar Proyecto',
        en: 'Start Project',
        pt: 'Começar Projeto',
        fr: 'Lancer le projet',
      }),
      ctaEmail: L({
        es: 'Email directo',
        en: 'Direct email',
        pt: 'Email direto',
        fr: 'Email direct',
      }),
    },
    footer: {
      tagline: L({
        es: 'Websites premium, Google Ads e IA para captar clientes — enfoque global, trato humano.',
        en: 'Premium websites, Google Ads, and AI to win clients — global reach, human touch.',
        pt: 'Websites premium, Google Ads e IA para captar clientes — alcance global, toque humano.',
        fr: 'Sites premium, Google Ads et IA pour attirer des clients — portée mondiale, relation humaine.',
      }),
      geoCr: L({ es: 'San José, Costa Rica', en: 'San José, Costa Rica', pt: 'San José, Costa Rica', fr: 'San José, Costa Rica' }),
      geoUk: L({
        es: 'Londres, Reino Unido',
        en: 'London, United Kingdom',
        pt: 'Londres, Reino Unido',
        fr: 'Londres, Royaume-Uni',
      }),
      geoNote: L({
        es: 'Clientes en todo el mundo · Remote-first',
        en: 'Clients worldwide · Remote-first',
        pt: 'Clientes em todo o mundo · Remote-first',
        fr: 'Clients dans le monde entier · Remote-first',
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
        pagos: L({ es: 'Pagos flexibles', en: 'Flexible payments', pt: 'Pagamentos flexíveis', fr: 'Paiements flexibles' }),
        precios: L({ es: 'Precios', en: 'Pricing', pt: 'Preços', fr: 'Tarifs' }),
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
