const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Programa 4: Reemplazar una palabra específica
rl.question('Ingresa una frase: ', (frase) => {
  rl.question('Ingresa la palabra que deseas reemplazar: ', (palabraAntigua) => {
    rl.question('Ingresa la palabra nueva: ', (palabraNueva) => {
      const fraseNueva = frase.replace(palabraAntigua, palabraNueva);
      console.log(`La frase con la palabra reemplazada es: ${fraseNueva}`);
      rl.close();
    });
  });
});


