import { useState } from 'react';
import { calcularSaldoDisponible, calcularTotalGastado } from '../util/calculos';
import { obtenerHoraActual } from '../util/formato';
import { Gasto } from '../util/types';

export function usePresupuesto(presupuestoInicial = 10) {
  // Estado para guardar el presupuesto semanal (inicia en $10 por defecto)
  const [presupuesto, setPresupuesto] = useState<number>(presupuestoInicial);
  // Estado para guardar el arreglo con todos los gastos registrados
  const [gastos, setGastos] = useState<Gasto[]>([]);

  // Calcula automáticamente el total gastado y el saldo cada vez que cambia la lista
  const totalGastado = calcularTotalGastado(gastos);
  const saldoDisponible = calcularSaldoDisponible(presupuesto, totalGastado);

  // Actualiza el monto del presupuesto semanal
  const definirPresupuesto = (nuevoMonto: number) => {
    setPresupuesto(nuevoMonto);
  };

  // Crea un nuevo objeto Gasto y lo coloca al inicio de la lista
  const agregarGasto = (motivo: string, monto: number) => {
    const nuevoGasto: Gasto = {
      id: Date.now().toString(), // Usa la marca de tiempo actual como ID único
      motivo,
      monto,
      hora: obtenerHoraActual(),
    };
    setGastos((listaActual) => [nuevoGasto, ...listaActual]);
  };

  // Filtra la lista dejando fuera el gasto que coincida con el ID seleccionado
  const eliminarGasto = (id: string) => {
    setGastos((listaActual) => listaActual.filter((gasto) => gasto.id !== id));
  };

  // Devuelve los datos y funciones para que las pantallas los puedan usar
  return {
    presupuesto,
    gastos,
    totalGastado,
    saldoDisponible,
    definirPresupuesto,
    agregarGasto,
    eliminarGasto,
  };
}