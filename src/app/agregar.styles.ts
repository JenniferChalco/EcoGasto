import { StyleSheet } from 'react-native';
import { COLORS } from '../util/colors';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 18,
    gap: 20, // Espacio vertical entre el bloque de gasto y el de presupuesto
  },
  // Tarjeta blanca que agrupa cada formulario
  bloque: {
    backgroundColor: COLORS.blanco,
    borderWidth: 2,
    borderColor: COLORS.bordeTexto,
    borderRadius: 16,
    padding: 16,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.bordeTexto,
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.bordeTexto,
    marginBottom: 6,
  },
  // Fila envolvente para mostrar las opciones de gasto una al lado de otra
  contenedorOpciones: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  // Estilo de cada botón de opción cuando NO está seleccionado
  opcion: {
    backgroundColor: COLORS.fondo,
    borderWidth: 1.5,
    borderColor: COLORS.bordeTexto,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  // Estilo cuando la opción SÍ está seleccionada
  opcionActiva: {
    backgroundColor: COLORS.acentoRosa,
  },
  textoOpcion: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.bordeTexto,
  },
  // Caja de texto para escribir monto, presupuesto o el detalle de "Otro"
  input: {
    backgroundColor: COLORS.fondo,
    borderWidth: 1.5,
    borderColor: COLORS.bordeTexto,
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
    color: COLORS.bordeTexto,
  },
  // Botón rosa para guardar un gasto
  botonGuardar: {
    backgroundColor: COLORS.acentoRosa,
    borderWidth: 2,
    borderColor: COLORS.bordeTexto,
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
  },
  // Botón celeste para actualizar el presupuesto
  botonSecundario: {
    backgroundColor: COLORS.tarjetaAzul,
    borderWidth: 2,
    borderColor: COLORS.bordeTexto,
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
  },
  textoBoton: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.bordeTexto,
  },
});