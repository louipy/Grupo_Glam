// FUENTE ÚNICA DE VERDAD de los formularios de contacto. La consumen la página /contacto
// (tarjetas → morph-modal) y el CTA de la home (ContactoDirecto.astro, pestañas). Modificar un
// formulario aquí lo sincroniza en AMBOS lugares. Cada consumidor aporta solo su presentación
// (imágenes, clases); el CONTENIDO (campos, opciones, textos) vive aquí.

export interface FormField {
  name: string;
  label: string;
  kind: 'text' | 'email' | 'tel' | 'select' | 'textarea' | 'toggle';
  required?: boolean;
  optional?: boolean;
  placeholder?: string;
  options?: string[];
  inputmode?: 'numeric' | 'tel' | 'text' | 'email';
  autocomplete?: string;
  /** Ocupa toda la fila en rejillas de 2 columnas (lo usa el CTA de la home). */
  full?: boolean;
}

export interface FormGroup {
  /** Encabezado del grupo. Solo lo usan los formularios con varios grupos (p. ej. referidos). */
  legend?: string;
  fields: FormField[];
}

export interface ContactForm {
  key: string;
  tab: string;    // etiqueta corta (pestañas del CTA)
  title: string;  // título de la tarjeta / descriptor del panel
  sub: string;    // apoyo breve (tarjeta de /contacto)
  groups: FormGroup[];
  done: { h: string; p1: string; p2: string };
}

const WA_DONE = 'Si prefieres, seguimos la conversación directo por WhatsApp.';

export const contactForms: ContactForm[] = [
  {
    key: 'comprar',
    tab: 'Comprar',
    title: 'Compra o alquila tu próximo patrimonio',
    sub: 'Encontramos el inmueble indicado con un asesor dedicado a tu búsqueda.',
    groups: [
      {
        fields: [
          { name: 'operacion', label: '¿Comprar o alquilar?', kind: 'toggle', options: ['Comprar', 'Alquilar'], full: true },
          { name: 'nombre', label: 'Nombre completo', kind: 'text', required: true, autocomplete: 'name', full: true },
          { name: 'email', label: 'Correo electrónico', kind: 'email', required: true, autocomplete: 'email' },
          { name: 'whatsapp', label: 'WhatsApp', kind: 'tel', optional: true, autocomplete: 'tel', inputmode: 'tel' },
          { name: 'nota', label: 'Nota', kind: 'text', optional: true, placeholder: 'Cuéntanos qué buscas', full: true },
        ],
      },
    ],
    done: { h: 'Gracias. Hemos recibido tu solicitud.', p1: 'Te responde un consultor dedicado a tu búsqueda en menos de 2 horas.', p2: WA_DONE },
  },
  {
    key: 'vender',
    tab: 'Vender',
    title: 'Vende o alquila tu propiedad',
    sub: 'Valoramos tu inmueble y lo colocamos ante compradores calificados.',
    groups: [
      {
        fields: [
          { name: 'operacion', label: '¿Vender o alquilar?', kind: 'toggle', options: ['Vender', 'Alquilar'], full: true },
          { name: 'nombre', label: 'Nombre y apellido', kind: 'text', required: true, autocomplete: 'name', full: true },
          { name: 'email', label: 'Correo electrónico', kind: 'email', required: true, autocomplete: 'email', full: true },
          { name: 'area', label: 'Área o superficie (m²)', kind: 'text', required: true, inputmode: 'numeric' },
          { name: 'habitaciones', label: 'Nro. de habitaciones', kind: 'text', required: true, inputmode: 'numeric' },
          { name: 'banos', label: 'Nro. de baños', kind: 'text', required: true, inputmode: 'numeric' },
          { name: 'estacionamientos', label: 'Puestos de estacionamiento', kind: 'text', required: true, inputmode: 'numeric' },
          { name: 'estado', label: 'Estado de la propiedad', kind: 'select', required: true, placeholder: 'Selecciona el estado', options: ['Original para remodelar', 'Habitable', 'Remodelada sin detalles'], full: true },
          { name: 'nota', label: 'Nota', kind: 'text', optional: true, placeholder: 'Agrega un detalle', full: true },
        ],
      },
    ],
    done: { h: 'Gracias. Hemos recibido tu propiedad.', p1: 'Te respondemos en menos de 2 horas para coordinar la valoración y el due diligence.', p2: WA_DONE },
  },
  {
    key: 'invertir',
    tab: 'Invertir',
    title: 'Invierte en Venezuela desde el extranjero',
    sub: 'Estructuramos tu inversión patrimonial desde donde te encuentres.',
    groups: [
      {
        fields: [
          { name: 'nombre', label: 'Nombre completo', kind: 'text', required: true, autocomplete: 'name', full: true },
          { name: 'email', label: 'Correo electrónico', kind: 'email', required: true, autocomplete: 'email' },
          { name: 'whatsapp', label: 'WhatsApp', kind: 'tel', optional: true, autocomplete: 'tel', inputmode: 'tel' },
          { name: 'nota', label: 'Mensaje', kind: 'text', optional: true, placeholder: 'Cuéntanos tu interés', full: true },
        ],
      },
    ],
    done: { h: 'Gracias. Hemos recibido tu solicitud.', p1: 'Te responde el consultor indicado para inversión en menos de 2 horas.', p2: WA_DONE },
  },
  {
    key: 'referidos',
    tab: 'Referidos',
    title: 'Refiere a alguien y gana comisión',
    sub: 'Comparte los datos de quien quiera comprar, vender o alquilar. Si cierra con nosotros, tú ganas.',
    groups: [
      {
        legend: 'Tus datos',
        fields: [
          { name: 'ref_nombre', label: 'Nombre completo', kind: 'text', required: true, autocomplete: 'name', full: true },
          { name: 'ref_email', label: 'Correo electrónico', kind: 'email', required: true, autocomplete: 'email' },
          { name: 'ref_whatsapp', label: 'WhatsApp', kind: 'tel', optional: true, autocomplete: 'tel', inputmode: 'tel' },
        ],
      },
      {
        legend: 'Datos del referido',
        fields: [
          { name: 'referido_nombre', label: 'Nombre completo', kind: 'text', required: true, full: true },
          { name: 'referido_email', label: 'Correo electrónico', kind: 'email', required: true },
          { name: 'referido_whatsapp', label: 'WhatsApp', kind: 'tel', optional: true, inputmode: 'tel' },
        ],
      },
    ],
    done: { h: 'Gracias. Hemos recibido tu referido.', p1: 'Nos pondremos en contacto con ambos para dar el siguiente paso.', p2: WA_DONE },
  },
];
