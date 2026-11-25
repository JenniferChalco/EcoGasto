import { Text, View } from 'react-native';
import { formatearMoneda } from '../util/formato';
import { styles } from './TarjetaSaldo.styles';

// Props tipadas que recibe este componente desde la pantalla principal
interface TarjetaSaldoProps {
  presupuesto: number;
  saldoDisponible: number;
  totalGastado: number;
}

export function TarjetaSaldo({
  presupuesto,
  saldoDisponible,
  totalGastado,
}: TarjetaSaldoProps) {
  // Verifica si el saldo es menor a cero para aplicar color rojo
  const sinSaldo = saldoDisponible < 0;

  return (
    <View style={styles.card}>
      <Text style={styles.etiqueta}>Saldo disponible</Text>
      {/* Muestra el saldo formateado en dólares */}
      <Text style={[styles.saldo, sinSaldo && styles.saldoNegativo]}>
        {formatearMoneda(saldoDisponible)}
      </Text>

      {/* Sección inferior con el resumen de presupuesto y total gastado */}
      <View style={styles.filaResumen}>
        <View>
          <Text style={styles.subEtiqueta}>Presupuesto</Text>
          <Text style={styles.subValor}>{formatearMoneda(presupuesto)}</Text>
        </View>
        <View>
          <Text style={styles.subEtiqueta}>Gastado</Text>
          <Text style={styles.subValor}>{formatearMoneda(totalGastado)}</Text>
        </View>
      </View>
    </View>
  );
}