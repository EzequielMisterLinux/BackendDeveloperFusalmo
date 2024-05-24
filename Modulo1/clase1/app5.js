const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Programa 5: Extraer una subcadena
rl.question('Ingresa una cadena de texto: ', (cadena) => {
  rl.question('Ingresa la posición inicial: ', (inicio) => {
    rl.question('Ingresa la posición final: ', (fin) => {
      const subcadena = cadena.substring(parseInt(inicio), parseInt(fin));
      console.log(`La subcadena es: ${subcadena}`);
      rl.close();
    });
  });
});
