const readline = require('readline');

const determinarSigno = require('./ejercicio1.js');
const encontrarMayor = require('./ejercicio2.js');
const calcularFactorial = require('./ejercicio3.js');
const parImpar = require('./ejercicio4.js');
const combinarColores = require('./ejercicio5.js');
const nombreMes = require('./ejercicio6.js');
const categoriaVehiculo = require('./ejercicio7.js');
const operacionesBasicas = require('./ejercicioejem.js');
const sumaResta = require('./ejercicioOp.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const opciones = {
  '1': determinarSigno,
  '2': encontrarMayor,
  '3': calcularFactorial,
  '4': parImpar,
  '5': combinarColores,
  '6': nombreMes,
  '7': categoriaVehiculo,
  '8': operacionesBasicas,
  '9': sumaResta
};


function mostrarMenu() {
  console.log('\nSeleccione una opción:');
  console.log('1. Ejercicio 1 - Determinar signo de un número');
  console.log('2. Ejercicio 2 - Encontrar el mayor de tres números');
  console.log('3. Ejercicio 3 - Calcular factorial');
  console.log('4. Ejercicio 4 - saber si un numero es par o impar');
  console.log('5. Ejercicio 5 - Combinación de colores');
  console.log('6. Ejercicio 6 - Conocer mes por numero 1-12');
  console.log('7. Ejercicio 7 - categoria de vehiculo por numero');
  console.log('8. Ejercicio 8 - BONUS calculadora Insana');
  console.log('9. Ejercicio 9 - BONUS suma y resta');
  console.log('10. Salir');

  rl.question('Ingrese una opción: ', (opcion) => {
    if (opcion in opciones) {
      opciones[opcion](rl, mostrarMenu);
    } else if (opcion === '10') {
        console.log('gracias por usar este programa muy insano');
      rl.close();
    } else {
      console.log('Opción inválida');
      mostrarMenu();
    }
  });
}

mostrarMenu();