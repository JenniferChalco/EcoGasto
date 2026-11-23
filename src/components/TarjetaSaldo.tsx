import { StyleSheet, Text, View } from 'react-native';

interface TarjetaSaldoProps {
  presupuesto: number;
  saldoDisponible: number;
  totalGastado: number;
}

export function TarjetaSaldo({ presupuesto, saldoDisponible, totalGastado }: TarjetaSaldoProps) {
  const sinSaldo = saldoDisponible < 0;

  return (
    <View style={styles.card}>
      <Text style={styles.etiqueta}>Saldo disponible</Text>
      <Text style={[styles.saldo, sinSaldo && styles.saldoNegativo]}>
        ${saldoDisponible.toFixed(2)}
      </Text>

      <View style={styles.filaResumen}>
        <View>
          <Text style={styles.subEtiqueta}>Presupuesto</Text>
          <Text style={styles.subValor}>${presupuesto.toFixed(2)}</Text>
        </View>
        <View>
          <Text style={styles.subEtiqueta}>Gastado</Text>
          <Text style={styles.subValor}>${totalGastado.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#D6F3FF',
    borderWidth: 2,
    borderColor: '#3D1C1B',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  etiqueta: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3D1C1B',
  },
  saldo: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#3D1C1B',
    marginVertical: 6,
  },
  saldoNegativo: {
    color: '#C92A2A',
  },
  filaResumen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1.5,
    borderTopColor: '#3D1C1B',
    paddingTop: 10,
    marginTop: 6,
  },
  subEtiqueta: {
    fontSize: 12,
    color: '#3D1C1B',
  },
  subValor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3D1C1B',
  },
});