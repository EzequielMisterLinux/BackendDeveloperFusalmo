const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Programa 10: Capitalizar la primera letra de cada palabra
rl.question('Ingresa una frase: ', (frase) => {
  const palabras = frase.split(' ');
  const fraseCapitalizada = palabras.map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(' ');
  console.log(`La frase con la primera letra de cada palabra capitalizada es: ${fraseCapitalizada}`);
  rl.close();
});
