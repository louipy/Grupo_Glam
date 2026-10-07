// Formato de precio · manifiesto §7.4 — ES: "US$ 870.000" · EN: "$870,000". Nunca mezclar.
export function precioES(monto: number | null, aConsultar: boolean): string {
  if (aConsultar || monto === null) return 'Precio a consultar';
  return 'US$ ' + monto.toLocaleString('de-DE'); // separador de miles con punto
}

// Regla de renderizado §6.2: specs null → NO se renderiza. Nunca "0 hab".
export function spec(valor: number | null, sufijo: string): string | null {
  if (valor === null || valor === 0) return null;
  return `${valor} ${sufijo}`;
}
