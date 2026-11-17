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
} as const

export const marqueeItems = [
  'Abierto las 24 horas',
  '4.9 en Google',
  '147 opiniones',
  'Montevideo y Canelones',
  'Instalador de gas',
  'Av. 8 de Octubre 4145',
  '097 227 701',
]

export const services = [
  {
    id: 'calefones',
    kicker: '01',
    title: 'Calefones a gas',
    description:
      'Reparación, mantenimiento e instalación. Urgencias, incluso un domingo.',
    image:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1400&q=80',
  },
  {
    id: 'hornos',
    kicker: '02',
    title: 'Hornos a gas',
    description:
      'Diagnóstico y puesta a punto de hornos empotrados y de piso.',
    image:
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1400&q=80',
  },
  {
    id: 'cocinas',
    kicker: '03',
    title: 'Cocinas a gas',
    description:
      'Quemadores, llama y service de cocina para un uso seguro.',
    image:
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1400&q=80',
  },
  {
    id: 'instalaciones',
    kicker: '04',
    title: 'Instalaciones',
    description:
      'Conexiones, cañerías y asesoramiento en Montevideo y Canelones.',
    image:
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1400&q=80',
  },
] as const

export const testimonials = [
  {
    id: 'javier',
    author: 'Javier Viñeque',
    date: 'Hace 4 semanas',
    text: 'El calefon a supergas y el electrico dejaron de funcionar un domingo y tuve que llamar de urgencia a un tecnico y destaco que su respuesta fue inmediata. Dejo ambos calefones funcionando. Lo recomiendo por la calidad de su trabajo.',
  },
  {
    id: 'manuela',
    author: 'Manuela Nario',
    date: 'Hace 5 meses',
    text: 'Excelente servicio. Se comprometió a venir en el día y cumplió, llegó rápido. Muy buena disposición, trato amable y se nota la experiencia en su trabajo. Resolvió todo de forma eficiente y prolija. Sin dudas lo recomiendo.',
  },
  {
    id: 'cba',
    author: 'CBA 2006',
    date: 'Hace 7 meses',
    text: 'Lo contacte por un Calefon a gas que tengo en un Motorhome, respondió rápido y cumplió con el día y hora acordado. Trabajo rápido y correcto. Tanto JuanCarlos como Matias son personas muy amable. Súper recomendable.',
  },
] as const

export const navLinks = [
  { href: '#inicio', label: 'Inicio', id: 'inicio' },
  { href: '#servicios', label: 'Servicios', id: 'servicios' },
  { href: '#opiniones', label: 'Opiniones', id: 'opiniones' },
  { href: '#contacto', label: 'Contacto', id: 'contacto' },
] as const

export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1920&q=80'

export const HERO_VIDEO =
  'https://videos.pexels.com/video-files/4253950/4253950-uhd_2560_1440_25fps.mp4'

export const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1800&q=80'
