import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEcoGasto } from '../hooks/useEcoGasto';

export default function AgregarScreen() {
  const router = useRouter();
  const { presupuesto, definirPresupuesto, agregarGasto } = useEcoGasto();

  const [motivo, setMotivo] = useState('');
  const [montoGasto, setMontoGasto] = useState('');
  const [nuevoPresupuesto, setNuevoPresupuesto] = useState(presupuesto.toString());

  const handleGuardarGasto = () => {
    const valor = parseFloat(montoGasto.replace(',', '.'));
    if (!motivo.trim() || isNaN(valor) || valor <= 0) {
      Alert.alert('Datos incompletos', 'Escribe un motivo y un monto válido mayor a 0.');
      return;
    }

    agregarGasto(motivo.trim(), valor);
    router.back();
  };

  const handleGuardarPresupuesto = () => {
    const valor = parseFloat(nuevoPresupuesto.replace(',', '.'));
    if (isNaN(valor) || valor < 0) {
      Alert.alert('Valor inválido', 'Ingresa un presupuesto válido.');
      return;
    }

    definirPresupuesto(valor);
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.bloque}>
        <Text style={styles.titulo}>Nuevo gasto</Text>

        <Text style={styles.label}>¿En qué gastaste?</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. Pasaje, Colación, Copias"
          value={motivo}
          onChangeText={setMotivo}
        />

        <Text style={styles.label}>Monto ($)</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. 1.50"
          keyboardType="decimal-pad"
          value={montoGasto}
          onChangeText={setMontoGasto}
        />

        <Pressable style={styles.botonGuardar} onPress={handleGuardarGasto}>
          <Text style={styles.textoBoton}>Guardar Gasto</Text>
        </Pressable>
      </View>

      <View style={styles.bloque}>
        <Text style={styles.titulo}>Presupuesto semanal ($)</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. 15.00"
          keyboardType="decimal-pad"
          value={nuevoPresupuesto}
          onChangeText={setNuevoPresupuesto}
        />

        <Pressable style={styles.botonSecundario} onPress={handleGuardarPresupuesto}>
          <Text style={styles.textoBoton}>Actualizar Presupuesto</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    gap: 20,
  },
  bloque: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#3D1C1B',
    borderRadius: 16,
    padding: 16,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3D1C1B',
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3D1C1B',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#EBF9FF',
    borderWidth: 1.5,
    borderColor: '#3D1C1B',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
    color: '#3D1C1B',
  },
  botonGuardar: {
    backgroundColor: '#FF8EB2',
    borderWidth: 2,
    borderColor: '#3D1C1B',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
  },
  botonSecundario: {
    backgroundColor: '#D6F3FF',
    borderWidth: 2,
    borderColor: '#3D1C1B',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
  },
  textoBoton: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#3D1C1B',
  },
});