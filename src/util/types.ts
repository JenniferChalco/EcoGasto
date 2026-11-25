// Lista fija de categorías principales para los gastos del colegio
export const OPCIONES_GASTO = [
  'Comida',
  'Pasaje',
  'Materiales',
  'Copias',
  'Otro',
] as const;

// Tipo de TypeScript que acepta solo una de las 5 opciones anteriores
export type CategoriaGasto = (typeof OPCIONES_GASTO)[number];

// Molde que indica qué datos obligatorios tiene cada gasto
export interface Gasto {
  id: string;     // Identificador único para poder borrar un gasto específico
  motivo: string; // Nombre de la categoría elegida o el texto escrito si eligió "Otro"
  monto: number;  // Valor numérico del gasto (ej. 0.35)
  hora: string;   // Hora en la que se registró el gasto
}