import { Stack } from 'expo-router';
import { EcoGastoProvider } from '../hooks/usePresupuesto';

export default function RootLayout() {
  return (
    <EcoGastoProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#FF8EB2' },
          headerTintColor: '#3D1C1B',
          headerTitleStyle: { fontWeight: 'bold' },
          contentStyle: { backgroundColor: '#EBF9FF' },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'EcoGasto' }} />
        <Stack.Screen name="agregar" options={{ title: 'Registrar Movimiento' }} />
      </Stack>
    </EcoGastoProvider>
  );
}
