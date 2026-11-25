import { Pressable, Text, View } from 'react-native';
import { formatearMoneda } from '../util/formato';
import { Gasto } from '../util/types';
import { styles } from './ItemGasto.styles';

// Props: recibe el objeto gasto y la función para eliminarlo
interface ItemGastoProps {
  gasto: Gasto;
  onEliminar: (id: string) => void;
}

export function ItemGasto({ gasto, onEliminar }: ItemGastoProps) {
  return (
    <View style={styles.item}>
      {/* Muestra el nombre del gasto y la hora en que se anotó */}
      <View style={styles.info}>
        <Text style={styles.motivo}>{gasto.motivo}</Text>
        <Text style={styles.hora}>{gasto.hora}</Text>
      </View>

      {/* Muestra el valor restado y el botón X para borrar */}
      <View style={styles.derecha}>
        <Text style={styles.monto}>-{formatearMoneda(gasto.monto)}</Text>
        <Pressable style={styles.botonBorrar} onPress={() => onEliminar(gasto.id)}>
          <Text style={styles.textoBorrar}>X</Text>
        </Pressable>
      </View>
    </View>
  );
}