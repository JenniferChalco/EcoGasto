import { Stack } from 'expo-router';
import { EcoGastoProvider } from '../hooks/EcoGastoContext';
import { COLORS } from '../util/colors';

export default function RootLayout() {
  return (
    // Provee los datos del presupuesto a todas las pantallas registradas en el Stack
    <EcoGastoProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.acentoRosa }, // Color de la barra superior
          headerTintColor: COLORS.bordeTexto,                  // Color del título y flecha atrás
          headerTitleStyle: { fontWeight: 'bold' },
          contentStyle: { backgroundColor: COLORS.fondo },     // Fondo general de las pantallas
        }}
      >
        {/* Pantalla 1: Inicio */}
        <Stack.Screen name="index" options={{ title: 'EcoGasto' }} />
        {/* Pantalla 2: Formulario */}
        <Stack.Screen name="agregar" options={{ title: 'Registrar Movimiento' }} />
      </Stack>
    </EcoGastoProvider>
  );
}