// Convierte un número (ej. 9.5) a texto con signo de dólar y dos decimales ("$9.50")
export function formatearMoneda(valor: number): string {
  return `$${valor.toFixed(2)}`;
}

// Obtiene la hora actual del teléfono en formato corto (ej. "03:15 PM")
export function obtenerHoraActual(): string {
  return new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
}

// Convierte lo que escribe el usuario en número, aceptando tanto coma como punto decimal
export function convertirANumero(texto: string): number {
  return parseFloat(texto.replace(',', '.'));
}