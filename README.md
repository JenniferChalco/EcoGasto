# EcoGasto

## Problema
Problema concreto: En mi colegio ocurre que muchos estudiantes reciben una cantidad fija de dinero para la semana para pasajes, comida o materiale y, al hacer gastos pequeños todos los días, pierden la cuenta de cuánto llevan gastando y se quedan sin dinero antes del dìa viernes.
Personas beneficiarias: Estudiantes de bachillerato que manejan dinero en efectivo para sus gastos diarios en el colegio.
Evidencia inicial: Lo he notado por experiencia propia y al conversar con compañeros de curso, quienes suelen revisar sus bolsillos o mochilas a mitad de semana sin recordar en qué gastaron su dinero.

## Solución
Descripción de la solución: Crear una aplicación móvil sencilla llamada EcoGasto que permita anotar rápidamente el presupuesto inicial y registrar cada gasto diario con un nombre y un monto, mostrando siempre cuánto dinero queda disponible.
Funcionalidades principales: 1. Definir un presupuesto — Ingresar el monto total de dinero con el que cuenta al inicio de la semana.
2. Registrar un gasto — Escribir en qué gastó ej. "Almuerzo" y el valor, restándolo automáticamente del saldo.
3. Ver lista de gastos — Revisar la lista de los gastos anotados y eliminar alguno si se equivocó al escribirlo.
Recorrido de uso: Abre la aplicación e ingresa su presupuesto semanal (ej. $10.00).Selecciona la opción para agregar un gasto, escribe "Pasaje" y coloca $0.15.Obtiene al instante su nuevo saldo disponible ($9.85) y ve el gasto anotado en su lista principal.
Pantallas previstas: Inicio: Mostrar el dinero disponible en grande y lla lista de los gastos registrados
Agregar gastos: Mostrar un formulario corto para escribir el motive del gasto, elm onto y guardar
Diferenciación: A diferencia de otras apps de finanzas que piden crear cuentas, vincular tarjetas y llenar muchos datos, EcoGasto funciona como una libreta digital rápida: abres, anotas el gasto en dos pasos y ves cuánto dinero te queda.
Comprobaciones: Cuando el usuario ingresa un presupuesto de $10.00 y registra un gasto de $2.50, entonces la app debe mostrar $7.50 como saldo disponible.
Cuando el usuario presiona el botón de eliminar en un gasto de $2.50 de la lista, entonces la app debe quitar ese registro y devolver el saldo disponible a $10.00.
Resumen: Quiero resolver la dificultad que tenemos los estudiantes para llevar la cuenta de nuestros gastos diarios en el colegio mediante una app móvil llamada EcoGasto. Esta aplicación está pensada para jóvenes que manejan efectivo semanal y necesitan saber cuánto dinero les queda. La primera versión permitirá fijar un presupuesto inicial, anotar cada gasto de forma rápida y ver el saldo actualizado en tiempo real.

## Objetivos
- Lograr que 10 compañeros registren un gasto diario en menos de 15 segundos usando la app.
- Validar con 20 registros de prueba que el cálculo del saldo restante sea 100% exacto.
- Confirmar mediante una encuesta tras una semana que 8 de cada 10 estudiantes llegan con saldo al viernes.

## Habilidades
- Diseño de interfaces móviles sencillas.
- Lógica de programación para cálculo de presupuestos y listas.
- Pruebas de usabilidad y validación con estudiantes reales.

## Alcance inicial
Sí incluiré en el MVP: Ingreso de presupuesto inicial, formulario para agregar gastos, resta automática del saldo, lista de gastos realizados y botón para borrar un gasto.
No incluiré todavía: Registro de usuarios, inicio de sesión, gráficos estadísticos complejos, conexión con bancos ni notificaciones.

## Restricciones
- La aplicación se construirá en MIT App Inventor y funcionará completamente sin conexión a internet (offline).
- Los datos se guardarán localmente en el teléfono (TinyDB), asumiendo que si el usuario desinstala la app o borra la caché del dispositivo, el historial se reiniciará.
- El desarrollo y las pruebas con usuarios deben completarse en un máximo de 3 semanas (2 semanas de programación y 1 semana de validación).
