export interface PropiedadDemo {
  ref: string;
  operacion: 'venta' | 'alquiler';
  tipo: 'apartamento' | 'casa' | 'edificio' | 'local' | 'oficina' | 'terreno';
  zona: string;
  zonaSlug: string;
  precio: number | null;
  aConsultar: boolean;
  area: number | null;
  habitaciones: number | null;
  banos: number | null;
  puestos: number | null;
  titulo: string;
  destacado: boolean;
  tono: string;
  // Datos de ubicación para el catálogo (tarjeta "Calle | Zona" + pin en el mapa).
  calle?: string;
  lat?: number;
  lng?: number;
}

export const propiedadesDemo: PropiedadDemo[] = [
  {
    ref: 'DEMO-01', operacion: 'venta', tipo: 'apartamento',
    zona: 'Sebucán', zonaSlug: 'sebucan',
    precio: 870000, aConsultar: false,
    area: 450, habitaciones: 5, banos: 6.5, puestos: 3,
    titulo: 'Apartamento de alta gama en Sebucán',
    destacado: true,
    tono: 'linear-gradient(135deg,#2E4034 0%,#17191D 100%)',
    calle: 'Av. Sanz', lat: 10.4958, lng: -66.8378,
  },
  {
    ref: 'DEMO-02', operacion: 'venta', tipo: 'casa',
    zona: 'La Castellana', zonaSlug: 'la-castellana',
    precio: 1450000, aConsultar: false,
    area: 620, habitaciones: 6, banos: 7, puestos: 4,
    titulo: 'Casa con jardín en La Castellana',
    destacado: true,
    tono: 'linear-gradient(135deg,#B4884E 0%,#6B6E73 100%)',
    calle: 'Av. Principal', lat: 10.4972, lng: -66.8588,
  },
  {
    ref: 'DEMO-03', operacion: 'alquiler', tipo: 'apartamento',
    zona: 'Los Palos Grandes', zonaSlug: 'los-palos-grandes',
    precio: null, aConsultar: true,
    area: 210, habitaciones: 3, banos: 3, puestos: 2,
    titulo: 'Apartamento luminoso en Los Palos Grandes',
    destacado: true,
    tono: 'linear-gradient(135deg,#0B0C0E 0%,#2E4034 100%)',
    calle: '3ª Transversal', lat: 10.5006, lng: -66.8430,
  },
  {
    ref: 'DEMO-04', operacion: 'venta', tipo: 'apartamento',
    zona: 'Altamira', zonaSlug: 'altamira',
    precio: 2850000, aConsultar: false,
    area: 520, habitaciones: 4, banos: 5, puestos: 3,
    titulo: 'Penthouse en Altamira',
    destacado: true,
    tono: 'linear-gradient(135deg,#241A2E 0%,#0B0A11 100%)',
    calle: 'Av. Luis Roche', lat: 10.4979, lng: -66.8523,
  },
  {
    ref: 'DEMO-05', operacion: 'alquiler', tipo: 'apartamento',
    zona: 'Las Mercedes', zonaSlug: 'las-mercedes',
    precio: 3800, aConsultar: false,
    area: 180, habitaciones: 3, banos: 3, puestos: 2,
    titulo: 'Apartamento en Las Mercedes',
    destacado: false,
    tono: 'linear-gradient(135deg,#17191D 0%,#3A3540 100%)',
    calle: 'Calle Madrid', lat: 10.4868, lng: -66.8636,
  },
  {
    ref: 'DEMO-06', operacion: 'venta', tipo: 'casa',
    zona: 'Country Club', zonaSlug: 'country-club',
    precio: 4200000, aConsultar: false,
    area: 920, habitaciones: 6, banos: 7, puestos: 4,
    titulo: 'Casa en Country Club',
    destacado: false,
    tono: 'linear-gradient(135deg,#2E4034 0%,#0B0A11 100%)',
    calle: 'Av. del Club', lat: 10.4996, lng: -66.8692,
  },
  {
    ref: 'DEMO-07', operacion: 'venta', tipo: 'apartamento',
    zona: 'Chuao', zonaSlug: 'chuao',
    precio: 1200000, aConsultar: false,
    area: 320, habitaciones: 3, banos: 3, puestos: 2,
    titulo: 'Apartamento en Chuao',
    destacado: false,
    tono: 'linear-gradient(135deg,#17191D 0%,#2E4034 100%)',
    calle: 'Av. Río de Janeiro', lat: 10.4835, lng: -66.8555,
  },
  {
    ref: 'DEMO-08', operacion: 'alquiler', tipo: 'apartamento',
    zona: 'El Bosque', zonaSlug: 'el-bosque',
    precio: 2200, aConsultar: false,
    area: 140, habitaciones: 2, banos: 2, puestos: 1,
    titulo: 'Apartamento en El Bosque',
    destacado: false,
    tono: 'linear-gradient(135deg,#3A3540 0%,#0B0C0E 100%)',
    calle: 'Av. Libertador', lat: 10.4928, lng: -66.8478,
  },
  {
    ref: 'DEMO-09', operacion: 'venta', tipo: 'apartamento',
    zona: 'Los Ruices', zonaSlug: 'los-ruices',
    precio: 690000, aConsultar: false,
    area: 160, habitaciones: 3, banos: 2, puestos: 2,
    titulo: 'Apartamento en Los Ruices',
    destacado: false,
    tono: 'linear-gradient(135deg,#0B0C0E 0%,#2E4034 100%)',
    calle: 'Av. Principal', lat: 10.4892, lng: -66.8258,
  },
  {
    ref: 'DEMO-10', operacion: 'venta', tipo: 'casa',
    zona: 'La Trinidad', zonaSlug: 'la-trinidad',
    precio: 1850000, aConsultar: false,
    area: 480, habitaciones: 5, banos: 5, puestos: 3,
    titulo: 'Casa en La Trinidad',
    destacado: false,
    tono: 'linear-gradient(135deg,#B4884E 0%,#6B6E73 100%)',
    calle: 'Calle El Vigía', lat: 10.4485, lng: -66.8562,
  },
  {
    ref: 'DEMO-11', operacion: 'venta', tipo: 'casa',
    zona: 'Sorocaima', zonaSlug: 'sorocaima',
    precio: 2650000, aConsultar: false,
    area: 620, habitaciones: 5, banos: 6, puestos: 4,
    titulo: 'Casa en Sorocaima',
    destacado: false,
    tono: 'linear-gradient(135deg,#241A2E 0%,#0B0A11 100%)',
    calle: 'Calle Los Samanes', lat: 10.4520, lng: -66.8448,
  },
  {
    ref: 'DEMO-12', operacion: 'alquiler', tipo: 'apartamento',
    zona: 'Colinas de Bello Monte', zonaSlug: 'colinas-de-bello-monte',
    precio: 1500, aConsultar: false,
    area: 120, habitaciones: 2, banos: 2, puestos: 1,
    titulo: 'Apartamento en Colinas de Bello Monte',
    destacado: false,
    tono: 'linear-gradient(135deg,#17191D 0%,#3A3540 100%)',
    calle: 'Calle Chopin', lat: 10.4718, lng: -66.8722,
  },
  {
    ref: 'DEMO-13', operacion: 'venta', tipo: 'apartamento',
    zona: 'Los Dos Caminos', zonaSlug: 'los-dos-caminos',
    precio: 520000, aConsultar: false,
    area: 130, habitaciones: 2, banos: 2, puestos: 1,
    titulo: 'Apartamento en Los Dos Caminos',
    destacado: false,
    tono: 'linear-gradient(135deg,#2E4034 0%,#17191D 100%)',
    calle: 'Av. Rómulo Gallegos', lat: 10.5012, lng: -66.8285,
  },
  {
    ref: 'DEMO-14', operacion: 'venta', tipo: 'apartamento',
    zona: 'Palo Verde', zonaSlug: 'palo-verde',
    precio: 480000, aConsultar: false,
    area: 140, habitaciones: 3, banos: 2, puestos: 2,
    titulo: 'Apartamento en Palo Verde',
    destacado: false,
    tono: 'linear-gradient(135deg,#0B0A11 0%,#2E4034 100%)',
    calle: 'Av. Sucre', lat: 10.4930, lng: -66.8005,
  },
];

export const conteosDemo: Record<string, number> = {
  'sebucan': 14, 'la-castellana': 22, 'los-palos-grandes': 9, 'altamira': 17,
  'las-mercedes': 11, 'chuao': 6, 'el-bosque': 8, 'los-ruices': 5,
};
