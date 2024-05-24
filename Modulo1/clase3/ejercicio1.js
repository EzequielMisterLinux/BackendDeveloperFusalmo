function determinarSigno(rl, mostrarMenu) {
    rl.question("Ingrese un numero: ", (numero) => {
      const num = parseFloat(numero);
  
      if (!isNaN(num)) {
        if (num > 0) {
          console.log(`El número ${num} es positivo.`);
        } else if (num < 0) {
          console.log(`El número ${num} es negativo.`);
        } else {
          console.log("El número es 0.");
        }
        mostrarMenu(); 
      } else {
        console.log("Por favor, ingrese un número válido.");
        mostrarMenu(); 
      }
    });
  }
  
  module.exports = determinarSigno;