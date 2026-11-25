import React, { createContext, useContext, useState } from 'react';
import { Gasto } from '../util/gasto';

interface EcoGastoContextType {
  presupuesto: number;
  gastos: Gasto[];
  saldoDisponible: number;
  totalGastado: number;
  definirPresupuesto: (monto: number) => void;
  agregarGasto: (motivo: string, monto: number) => void;
  eliminarGasto: (id: string) => void;
}

const EcoGastoContext = createContext<EcoGastoContextType | null>(null);

export function EcoGastoProvider({ children }: { children: React.ReactNode }) {
  const [presupuesto, setPresupuesto] = useState<number>(10);
  const [gastos, setGastos] = useState<Gasto[]>([]);

  const totalGastado = gastos.reduce((acumulado, item) => acumulado + item.monto, 0);
  const saldoDisponible = presupuesto - totalGastado;

  const definirPresupuesto = (monto: number) => {
    setPresupuesto(monto);
  };

  const agregarGasto = (motivo: string, monto: number) => {
    const nuevoGasto: Gasto = {
      id: Date.now().toString(),
      motivo,
      monto,
      fecha: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setGastos((prev) => [nuevoGasto, ...prev]);
  };

  const eliminarGasto = (id: string) => {
    setGastos((prev) => prev.filter((gasto) => gasto.id !== id));
  };

  return (
    <EcoGastoContext.Provider
      value={{
        presupuesto,
        gastos,
        saldoDisponible,
        totalGastado,
        definirPresupuesto,
        agregarGasto,
        eliminarGasto,
      }}
    >
      {children}
    </EcoGastoContext.Provider>
  );
}

export function useEcoGasto() {
  const context = useContext(EcoGastoContext);
  if (!context) {
    throw new Error('useEcoGasto debe usarse dentro de EcoGastoProvider');
  }
  return context;
}