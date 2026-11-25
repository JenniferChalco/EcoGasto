import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { useEcoGasto } from '../hooks/EcoGastoContext';
import { convertirANumero } from '../util/formato';
import { CategoriaGasto, OPCIONES_GASTO } from '../util/types';
import { styles } from './agregar.styles';

export default function AgregarScreen() {
  const router = useRouter();
  const { presupuesto, definirPresupuesto, agregarGasto } = useEcoGasto();

  // Guarda qué opción de las 5 está marcada
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<CategoriaGasto | null>(null);
  // Guarda el texto escrito únicamente cuando el usuario elige "Otro"
  const [otroMotivo, setOtroMotivo] = useState('');
  // Guarda el monto del gasto y el presupuesto semanal
  const [montoGasto, setMontoGasto] = useState('');
  const [nuevoPresupuesto, setNuevoPresupuesto] = useState(presupuesto.toString());

  // Valida que haya seleccionado una opción (y escrito el detalle si eligió "Otro")
  const handleGuardarGasto = () => {
    if (!categoriaSeleccionada) {
      Alert.alert('Falta seleccionar', 'Elige una opción de gasto (Comida, Pasaje, etc.).');
      return;
    }

    // Si eligió "Otro", es obligatorio que escriba en qué gastó
    if (categoriaSeleccionada === 'Otro' && !otroMotivo.trim()) {
      Alert.alert('Campo obligatorio', 'Escribe en qué gastaste dentro de la opción "Otro".');
      return;
    }

    const valor = convertirANumero(montoGasto);
    if (isNaN(valor) || valor <= 0) {
      Alert.alert('Monto inválido', 'Ingresa un monto válido mayor a 0.');
      return;
    }

    // Define el texto final: si es "Otro" usa lo escrito; si no, usa el nombre de la categoría
    const motivoFinal =
      categoriaSeleccionada === 'Otro' ? otroMotivo.trim() : categoriaSeleccionada;

    agregarGasto(motivoFinal, valor);
    router.back();
  };

  // Valida el nuevo presupuesto, lo actualiza y regresa a Inicio
  const handleGuardarPresupuesto = () => {
    const valor = convertirANumero(nuevoPresupuesto);
    if (isNaN(valor) || valor < 0) {
      Alert.alert('Valor inválido', 'Ingresa un presupuesto válido.');
      return;
    }

    definirPresupuesto(valor);
    router.back();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Formulario 1: Registrar un gasto diario */}
      <View style={styles.bloque}>
        <Text style={styles.titulo}>Nuevo gasto</Text>

        <Text style={styles.label}>¿En qué gastaste?</Text>
        {/* Dibuja los botones de opciones: Comida, Pasaje, Materiales, Copias, Otro */}
        <View style={styles.contenedorOpciones}>
          {OPCIONES_GASTO.map((opcion) => {
            const estaActiva = categoriaSeleccionada === opcion;
            return (
              <Pressable
                key={opcion}
                style={[styles.opcion, estaActiva && styles.opcionActiva]}
                onPress={() => setCategoriaSeleccionada(opcion)}
              >
                <Text style={styles.textoOpcion}>{opcion}</Text>
              </Pressable>
            );
          })}
        </View>

        {/* Caja de texto que aparece SOLO si el usuario selecciona "Otro" */}
        {categoriaSeleccionada === 'Otro' && (
          <>
            <Text style={styles.label}>Especifica en qué gastaste (obligatorio):</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej. Recarga, Medicina, Regalo"
              value={otroMotivo}
              onChangeText={setOtroMotivo}
            />
          </>
        )}

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

      {/* Formulario 2: Cambiar el presupuesto semanal */}
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
    </ScrollView>
  );
}