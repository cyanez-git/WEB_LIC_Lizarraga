export const SITE = {
  name: 'Silvina Lizarraga',
  tagline: 'Psicóloga · Sexóloga Clínica · Terapeuta de Pareja',
  url: 'https://sexualidad-activa.com',
  matriculas: ['M.N. 40564', 'M.P. 94321'],
  // Espacios no separables para que cada lugar no se parta en dos renglones.
  consultorios: ['CABA\u00A0–\u00A0Barrio\u00A0Norte', 'San\u00A0Isidro'],
  redes: [{ label: 'Instagram', href: 'https://www.instagram.com/lic.silvinalizarraga/' }],
  ga4Id: 'G-GR6W7H8X7Q',
  whatsappDisplay: '+54 9 11 2254-0922',
  whatsappNumber: '5491122540922',
};

// Abre el chat sin mensaje precargado: la persona escribe libremente.
export const WHATSAPP_URL = `https://wa.me/${SITE.whatsappNumber}`;

export const NAV = [
  { href: '/', label: 'Inicio' },
  { href: '/psicoterapia-individual/', label: 'Psicoterapia individual' },
  { href: '/terapia-de-pareja/', label: 'Terapia de pareja' },
  { href: '/sexologia-clinica/', label: 'Sexología clínica' },
  { href: '/sobre-mi/', label: 'Sobre mí' },
];

export const CONTACT_LINK = { href: '/contacto/', label: 'Contacto' };
