export const projects = [
  {
    title: 'App universitaria',
    description: 'App móvil institucional (iOS y Android) para la comunidad universitaria.',
    detail:
      'Migrada de JS a TypeScript con Expo Router, SWR y migración de stylesheets a Tailwind en el rebranding. El binario bajó de ~35 MB a ~13 MB tras podar assets y dependencias.',
    stack: ['React Native', 'Expo', 'TypeScript'],
  },
  {
    title: 'Inscripciones',
    description: 'Módulo de inscripciones para +8.000 estudiantes por trimestre.',
    detail:
      'Frontend en Angular 16 dentro de un sistema universitario grande, con equipos de QA y backend y decenas de puestos operando en paralelo sin conflictos.',
    stack: ['Angular', 'TypeScript'],
  },
  {
    title: 'Tickets QR',
    description: 'Control de acceso con QR para eventos privados de la universidad.',
    detail:
      'Escaneo con cámara, verificación de la entrada y registro de consumo en el momento.',
    stack: ['React Native', 'Expo', 'Tailwind'],
  },
  {
    title: 'DOMOTAI',
    description: 'Gestión de inventario y clientela para domótica.',
    detail:
      'Full stack: dashboard web, API en Node.js y app móvil en Flutter.',
    stack: ['Flutter', 'Node.js', 'React'],
  },
];

export const timeline: { period: string; title: string; detail?: string }[] = [
  {
    period: 'Dic 2025 — Hoy',
    title: 'Full-stack Developer · DOMOTAI',
    detail:
      'Dashboard web y API en Node.js para gestión de inventario y clientela, con app móvil en Flutter.',
  },
  {
    period: 'Feb 2023 — Ago 2026',
    title: 'Frontend & Mobile Developer · Servicios Educativos (SERVIEDUCA)',
    detail:
      'Producto universitario en web y móvil: portal responsivo en Angular, app institucional en React Native + Expo (migración a TS, rebranding, ~35 MB → ~13 MB) y módulo de inscripciones para +8.000 estudiantes por trimestre. Lideré la migración del sistema de preinscripciones de Angular 16 a 21 con zoneless.',
  },
  {
    period: 'Hasta Nov 2023',
    title: 'Ingeniería en Informática · Universidad Rafael Belloso Chacín (URBE)',
  },
];
