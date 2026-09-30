export const business = {
  name: 'Reparación de calefones a gas, hornos a gas',
  shortName: 'Calefones & Hornos',
  tagline: 'Montevideo y Canelones',
  category: 'Instalador de gas',
  phone: '097 227 701',
  phoneHref: 'tel:+59897227701',
  whatsapp: '59897227701',
  whatsappHref:
    'https://wa.me/59897227701?text=Hola,%20necesito%20consultar%20por%20un%20servicio%20t%C3%A9cnico',
  address: {
    full: 'Av. 8 de Octubre 4145, 12000 Montevideo, Departamento de Montevideo',
    street: 'Av. 8 de Octubre 4145',
    city: 'Montevideo',
    plusCode: '4VJ7+2X Montevideo',
  },
  mapsUrl: 'https://maps.google.com/?q=Av.+8+de+Octubre+4145,+Montevideo',
  rating: 4.9,
  reviewCount: 147,
  hours: 'Abierto las 24 horas',
  reviewKeywords: ['trabajo', 'calefón', 'eficiente', 'cocina'],
} as const

export const services = [
  {
    id: 'calefones',
    title: 'Calefones a gas',
    description:
      'Reparación, mantenimiento e instalación. Atendemos urgencias, incluso fines de semana.',
    image:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
  },
  {
    id: 'hornos',
    title: 'Hornos a gas',
    description:
      'Diagnóstico, reparación y puesta a punto de hornos empotrados y de piso.',
    image:
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
  },
  {
    id: 'cocinas',
    title: 'Cocinas a gas',
    description:
      'Service de cocinas, quemadores y regulación de llama para un uso seguro.',
    image:
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
  },
  {
    id: 'instalaciones',
    title: 'Instalaciones de gas',
    description:
      'Conexiones, cañerías y asesoramiento. Cobertura en Montevideo y Canelones.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
] as const

export const highlights = [
  {
    title: 'Instalador de gas',
    description: 'Servicio habilitado y especializado',
    icon: 'shield' as const,
  },
  {
    title: 'Atención las 24 horas',
    description: business.hours,
    icon: 'clock' as const,
  },
  {
    title: 'Montevideo y Canelones',
    description: 'Cobertura en toda la zona',
    icon: 'map' as const,
  },
  {
    title: `${business.rating} estrellas`,
    description: `${business.reviewCount} opiniones de clientes`,
    icon: 'star' as const,
  },
] as const

export const testimonials = [
  {
    id: 'javier',
    author: 'Javier Viñeque',
    initial: 'J',
    rating: 5,
    date: 'Hace 4 semanas',
    text: 'El calefon a supergas y el electrico dejaron de funcionar un domingo y tuve que llamar de urgencia a un tecnico y destaco que su respuesta fue inmediata. Dejo ambos calefones funcionando. Lo recomiendo por la calidad de su trabajo.',
  },
  {
    id: 'manuela',
    author: 'Manuela Nario',
    initial: 'M',
    rating: 5,
    date: 'Hace 5 meses',
    text: 'Excelente servicio. Se comprometió a venir en el día y cumplió, llegó rápido. Muy buena disposición, trato amable y se nota la experiencia en su trabajo. Resolvió todo de forma eficiente y prolija. Sin dudas lo recomiendo.',
  },
  {
    id: 'cba',
    author: 'CBA 2006',
    initial: 'C',
    rating: 5,
    date: 'Hace 7 meses',
    text: 'Lo contacte por un Calefon a gas que tengo en un Motorhome, respondió rápido y cumplió con el día y hora acordado. Trabajo rápido y correcto. Tanto JuanCarlos como Matias son personas muy amable. Súper recomendable. Sin dudas lo volvería a llamar por cualquier necesidad dentro de sus áreas.',
  },
] as const

export const navLinks = [
  { href: '#inicio', label: 'Inicio', id: 'inicio' },
  { href: '#servicios', label: 'Servicios', id: 'servicios' },
  { href: '#opiniones', label: 'Opiniones', id: 'opiniones' },
  { href: '#contacto', label: 'Contacto', id: 'contacto' },
] as const
