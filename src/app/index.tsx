import { useRouter } from 'expo-router';
import { FlatList, Pressable, Text, View } from 'react-native';
import { ItemGasto } from '../components/ItemGasto';
import { TarjetaSaldo } from '../components/TarjetaSaldo';
import { useEcoGasto } from '../hooks/EcoGastoContext';
import { styles } from './index.styles';

export default function InicioScreen() {
  // Hook de Expo Router para navegar entre pantallas
  const router = useRouter();
  // Obtiene los datos y la función de borrar desde nuestro contexto global
  const { presupuesto, gastos, saldoDisponible, totalGastado, eliminarGasto } = useEcoGasto();

  return (
    <View style={styles.container}>
      {/* Muestra la tarjeta superior con saldo, presupuesto y gastado */}
      <TarjetaSaldo
        presupuesto={presupuesto}
        saldoDisponible={saldoDisponible}
        totalGastado={totalGastado}
      />

      {/* Navega hacia la pantalla /agregar al presionar el botón */}
      <Pressable
        style={styles.botonPrincipal}
        onPress={() => router.push('/agregar')}
      >
        <Text style={styles.textoBoton}>+ Agregar Gasto / Presupuesto</Text>
      </Pressable>

      <Text style={styles.tituloLista}>Mis gastos de la semana</Text>

      {/* Lista optimizada que dibuja cada gasto usando el componente ItemGasto */}
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