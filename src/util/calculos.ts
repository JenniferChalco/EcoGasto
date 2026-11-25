import { Gasto } from './types';

// Recorre toda la lista de gastos y suma sus montos para obtener el total gastado
export function calcularTotalGastado(gastos: Gasto[]): number {
  return gastos.reduce((acumulado, item) => acumulado + item.monto, 0);
}

// Resta el total gastado al presupuesto inicial para saber cuánto dinero queda
export function calcularSaldoDisponible(presupuesto: number, totalGastado: number): number {
  return presupuesto - totalGastado;
}