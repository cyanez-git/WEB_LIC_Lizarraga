// Resumen del sitio para asistentes de IA (formato llms.txt, https://llmstxt.org).
// Se genera a partir de los mismos datos del sitio para mantenerse al día.
import type { APIRoute } from 'astro';
import { SITE, WHATSAPP_URL } from '../data/site';
import { MOTIVOS, motivoHref } from '../data/motivos';

const url = (path: string) => new URL(path, SITE.url).href;

export const GET: APIRoute = () => {
  const motivos = MOTIVOS.filter((m) => m.pagina)
    .map((m) => `- [${m.label}](${url(motivoHref(m)!)}): ${m.pagina!.description}`)
    .join('\n');

  const body = `# ${SITE.name}

> ${SITE.tagline.replaceAll(' · ', ', ')}. Licenciada en Psicología (Universidad de Buenos Aires), ${SITE.matriculas.join(' · ')}. Sexóloga Clínica acreditada por la Asociación Internacional de Sexología Médica (AISM). Atención presencial en ${SITE.consultorios.join(' y ').replaceAll(' ', ' ')} (Buenos Aires, Argentina) y online en español.

Contacto: WhatsApp ${SITE.whatsappDisplay} (${WHATSAPP_URL}). Instagram: @lic.silvinalizarraga.
Modalidad: online y presencial, según disponibilidad.

## Áreas de atención

- [Psicoterapia individual](${url('/psicoterapia-individual/')}): Un espacio para comprender lo que estás viviendo y acercarte a aquello que sentís. No hace falta llegar con todo claro.
- [Terapia de pareja](${url('/terapia-de-pareja/')}): Cuando algo entre dos empieza a necesitar otro espacio: comprender qué sucede entre ambos y qué siente y necesita cada uno.
- [Sexología clínica](${url('/sexologia-clinica/')}): Terapia sexual para dificultades con el deseo, la erección, la eyaculación precoz o retardada, el orgasmo o el dolor en la penetración.

## Motivos de consulta en sexología

${motivos}

## Sobre la profesional

- [Sobre mí](${url('/sobre-mi/')}): Formación y trayectoria. Más de diez años en el equipo de Sexología del Hospital de Clínicas José de San Martín dirigido por el Dr. Juan Carlos Kustnezoff; posgrado en Sexología Clínica (UBA, Facultad de Medicina, Hospital de Clínicas) y docente colaboradora; casi ocho años en Psicología de Obstetricia del Hospital Materno Infantil de San Isidro; posgrado en Niñez y Familia (UBA); formación en Terapia de Pareja (CTC) y Terapia Focalizada en las Emociones (TFE).
- [Contacto](${url('/contacto/')}): Por WhatsApp. No hace falta saber de antemano qué tipo de terapia se necesita.
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
