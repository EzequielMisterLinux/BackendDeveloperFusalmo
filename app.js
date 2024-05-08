const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Programa 1: Saludo con nombre y apellido
rl.question('Ingresa tu nombre: ', (nombre) => {
  rl.question('Ingresa tu apellido: ', (apellido) => {
    console.log(`Hola, ${nombre} ${apellido}!`);
    rl.close();
  });
});
