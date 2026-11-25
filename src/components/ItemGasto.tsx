import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Gasto } from '../util/gasto';

interface ItemGastoProps {
  gasto: Gasto;
  onEliminar: (id: string) => void;
}

export function ItemGasto({ gasto, onEliminar }: ItemGastoProps) {
  return (
    <View style={styles.item}>
      <View style={styles.info}>
        <Text style={styles.motivo}>{gasto.motivo}</Text>
        <Text style={styles.hora}>{gasto.fecha}</Text>
      </View>

      <View style={styles.derecha}>
        <Text style={styles.monto}>-${gasto.monto.toFixed(2)}</Text>
        <Pressable style={styles.botonBorrar} onPress={() => onEliminar(gasto.id)}>
          <Text style={styles.textoBorrar}>X</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#3D1C1B',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },
  info: {
    flex: 1,
  },
  motivo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3D1C1B',
  },
  hora: {
    fontSize: 12,
    color: '#6E4A49',
    marginTop: 2,
  },
  derecha: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  monto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3D1C1B',
  },
  botonBorrar: {
    backgroundColor: '#FF8EB2',
    borderWidth: 1.5,
    borderColor: '#3D1C1B',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  textoBorrar: {
    fontWeight: 'bold',
    color: '#3D1C1B',
  },
});