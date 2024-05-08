const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Programa 2: Contar caracteres
rl.question('Ingresa una cadena de texto: ', (cadena) => {
  console.log(`La longitud de la cadena es: ${cadena.length}`);
  rl.close();
});

