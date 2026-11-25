import { StyleSheet } from 'react-native';
import { COLORS } from '../util/colors';

export const styles = StyleSheet.create({
  // Contenedor principal con margen interno
  container: {
    flex: 1,
    padding: 18,
  },
  // Botón rosa para ir a la pantalla de agregar gasto o presupuesto
  botonPrincipal: {
    backgroundColor: COLORS.acentoRosa,
    borderWidth: 2,
    borderColor: COLORS.bordeTexto,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  textoBoton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.bordeTexto,
  },
  // Subtítulo sobre la lista de gastos
  tituloLista: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.bordeTexto,
    marginBottom: 10,
  },
  // Mensaje que aparece cuando la lista está vacía
  vacio: {
    textAlign: 'center',
    color: COLORS.textoSecundario,
    marginTop: 24,
    fontSize: 15,
  },
});