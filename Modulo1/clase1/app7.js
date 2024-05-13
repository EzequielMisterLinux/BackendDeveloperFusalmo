const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Programa 7: Invertir una cadena
rl.question('Ingresa una cadena de texto: ', (cadena) => {
  const cadenaInvertida = cadena.split('').reverse().join('');
  console.log(`La cadena invertida es: ${cadenaInvertida}`);
  rl.close();
});

