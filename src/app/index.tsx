import { useRouter } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { ItemGasto } from '../components/ItemGasto';
import { TarjetaSaldo } from '../components/TarjetaSaldo';
import { useEcoGasto } from '../hooks/usePresupuesto';

export default function InicioScreen() {
  const router = useRouter();
  const { presupuesto, gastos, saldoDisponible, totalGastado, eliminarGasto } = useEcoGasto();

  return (
    <View style={styles.container}>
      <TarjetaSaldo
        presupuesto={presupuesto}
        saldoDisponible={saldoDisponible}
        totalGastado={totalGastado}
      />

      <Pressable
        style={styles.botonPrincipal}
        onPress={() => router.push('/agregar')}
      >
        <Text style={styles.textoBoton}>+ Agregar Gasto / Presupuesto</Text>
      </Pressable>

      <Text style={styles.tituloLista}>Mis gastos de la semana</Text>

      <FlatList
        data={gastos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemGasto gasto={item} onEliminar={eliminarGasto} />
        )}
        ListEmptyComponent={
          <Text style={styles.vacio}>Aún no has registrado gastos.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
  botonPrincipal: {
    backgroundColor: '#FF8EB2',
    borderWidth: 2,
    borderColor: '#3D1C1B',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  textoBoton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3D1C1B',
  },
  tituloLista: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3D1C1B',
    marginBottom: 10,
  },
  vacio: {
    textAlign: 'center',
    color: '#6E4A49',
    marginTop: 24,
    fontSize: 15,
  },
});