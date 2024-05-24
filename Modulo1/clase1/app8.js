const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Programa 8: Verificar si una palabra es un palíndromo
rl.question('Ingresa una palabra: ', (palabra) => {
  const palabraInvertida = palabra.split('').reverse().join('');
  if (palabra === palabraInvertida) {
    console.log(`La palabra ${palabra} es un palíndromo.`);
  } else {
    console.log(`La palabra ${palabra} no es un palíndromo.`);
  }
  rl.close();
});

