export const projects = [
  {
    title: 'App móvil URBE',
    description: 'App institucional de la universidad (iOS y Android), mantenida en solitario.',
    detail:
      'La app bajó de ~40 MB a 14 MB y superó las 10.000 descargas en Android y ~5.000 en iOS. Se logró con rebranding completo, migración de JavaScript a TypeScript (−15 % de errores) y caching con SWR: un mismo endpoint pasó de 8 llamadas a 1.',
    stack: ['React Native', 'Expo', 'TypeScript'],
  },
  {
    title: 'Inscripciones URBE',
    description: 'Módulo de inscripciones del sistema core de la universidad.',
    detail:
      'Procesa cerca de 8.000 inscripciones por trimestre, para estudiantes nuevos y actuales, respetando las reglas de la universidad. Frontend en Angular 16, en colaboración con backend y QA.',
    stack: ['Angular', 'TypeScript'],
  },
  {
    title: 'Conciliación de crédito',
    description: 'Financiamiento de motocicletas con scoring de riesgo por IA.',
    detail:
      'Decide si un cliente puede recibir el préstamo según ingresos y capacidad de pago, aplicando reglas de negocio y mora por retraso. Incluye onboarding con recaudación de datos y verificación KYC. Dashboard y PWA en React.js con backend en Node.js.',
    stack: ['React', 'Node.js', 'TailwindCSS'],
  },
  {
    title: 'Ferretería con IA',
    description: 'Compra de materiales de ferretería asistida por un agente de IA.',
    detail:
      'Un agente de IA identifica la necesidad del cliente y recomienda productos según su objetivo. App móvil en Flutter y dashboard en React.js con backend en Node.js.',
    stack: ['Flutter', 'React', 'Node.js'],
  },
];

export const timeline: {
  period: string;
  role: string;
  org: string;
  detail?: string;
}[] = [
  {
    period: 'Dic 2025 — Hoy',
    role: 'Full-stack Developer',
    org: 'DOMOTAI',
    detail:
      'Dos productos en desarrollo: una plataforma de conciliación de crédito para motocicletas con onboarding KYC y scoring de riesgo por IA, y una app de ferretería con un agente de IA que recomienda productos según el objetivo del cliente. Full-stack con React.js, Node.js y Flutter. Medio tiempo.',
  },
  {
    period: 'Feb 2023 — Ago 2026',
    role: 'Frontend & Mobile Developer',
    org: 'Servicios Educativos (SERVIEDUCA)',
    detail:
      'Módulos de inscripciones y preinscripciones para ~8.000 estudiantes por trimestre, y una app institucional que bajó de ~40 MB a 14 MB con más de 10.000 descargas en Android. Portal en Angular y app mantenida en solitario en React Native + Expo; lideré la migración de preinscripciones de Angular 16 a 21 con zoneless.',
  },
  {
    period: 'Título: Jun 2024',
    role: 'Ingeniería en Informática',
    org: 'Universidad Rafael Belloso Chacín (URBE)',
  },
];
