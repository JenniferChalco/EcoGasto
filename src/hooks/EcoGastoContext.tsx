import React, { createContext, useContext } from 'react';
import { Gasto } from '../util/types';
import { usePresupuesto } from './usePresupuesto';

// Define qué datos y funciones estarán disponibles globalmente en la app
interface EcoGastoContextType {
  presupuesto: number;
  gastos: Gasto[];
  totalGastado: number;
  saldoDisponible: number;
  definirPresupuesto: (nuevoMonto: number) => void;
  agregarGasto: (motivo: string, monto: number) => void;
  eliminarGasto: (id: string) => void;
}

// Crea el canal de comunicación entre pantallas
const EcoGastoContext = createContext<EcoGastoContextType | null>(null);

// Envuelve toda la aplicación para que "Inicio" y "Agregar" vean los mismos datos
export function EcoGastoProvider({ children }: { children: React.ReactNode }) {
  const datosPresupuesto = usePresupuesto(10);

  return (
    <EcoGastoContext.Provider value={datosPresupuesto}>
      {children}
    </EcoGastoContext.Provider>
  );
}

// Custom hook que permite acceder fácilmente a los datos desde cualquier pantalla
export function useEcoGasto() {
  const context = useContext(EcoGastoContext);
  if (!context) {
    throw new Error('useEcoGasto debe usarse dentro de EcoGastoProvider');
  }
  return context;
}