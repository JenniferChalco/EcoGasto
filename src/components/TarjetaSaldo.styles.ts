import { StyleSheet } from 'react-native';
import { COLORS } from '../util/colors';

export const styles = StyleSheet.create({
  // Contenedor principal de la tarjeta de saldo
  card: {
    backgroundColor: COLORS.tarjetaAzul,
    borderWidth: 2,
    borderColor: COLORS.bordeTexto,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  // Texto pequeño "Saldo disponible"
  etiqueta: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.bordeTexto,
  },
  // Número grande del dinero restante
  saldo: {
    fontSize: 38,
    fontWeight: 'bold',
    color: COLORS.bordeTexto,
    marginVertical: 6,
  },
  // Cambia el número a rojo si se gastó más del presupuesto
  saldoNegativo: {
    color: COLORS.peligro,
  },
  // Fila inferior dividida en dos columnas (Presupuesto y Gastado)
  filaResumen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1.5,
    borderTopColor: COLORS.bordeTexto,
    paddingTop: 10,
    marginTop: 6,
  },
  subEtiqueta: {
    fontSize: 12,
    color: COLORS.bordeTexto,
  },
  subValor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.bordeTexto,
  },
});