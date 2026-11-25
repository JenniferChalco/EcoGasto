import { StyleSheet } from 'react-native';
import { COLORS } from '../util/colors';

export const styles = StyleSheet.create({
  // Tarjeta horizontal para cada gasto de la lista
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.blanco,
    borderWidth: 2,
    borderColor: COLORS.bordeTexto,
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },
  // Columna izquierda (motivo y hora)
  info: {
    flex: 1,
  },
  motivo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.bordeTexto,
  },
  hora: {
    fontSize: 12,
    color: COLORS.textoSecundario,
    marginTop: 2,
  },
  // Columna derecha (monto y botón X)
  derecha: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  monto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.bordeTexto,
  },
  // Botón cuadrado rosa para eliminar el registro
  botonBorrar: {
    backgroundColor: COLORS.acentoRosa,
    borderWidth: 1.5,
    borderColor: COLORS.bordeTexto,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  textoBorrar: {
    fontWeight: 'bold',
    color: COLORS.bordeTexto,
  },
});