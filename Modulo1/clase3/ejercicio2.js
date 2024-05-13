function encontrarMayor(rl, mostrarMenu) {
  const obtenerNumero = (mensaje, callback) => {
    rl.question(mensaje, (numero) => {
      const num = parseFloat(numero);
      callback(isNaN(num) ? null : num);
    });
  };

  obtenerNumero("Ingrese el primer numero: ", (num1) => {
    if (num1 === null) {
      console.log("Por favor, ingrese un número válido.");
      mostrarMenu(); 
      return;
    }

    obtenerNumero("Ingrese el segundo numero: ", (num2) => {
      if (num2 === null) {
        console.log("Por favor, ingrese un número válido.");
        mostrarMenu(); 
        return;
      }

      obtenerNumero("Ingrese el tercer numero: ", (num3) => {
        if (num3 === null) {
          console.log("Por favor, ingrese un número válido.");
          mostrarMenu(); 
          return;
        }

        const mayor = Math.max(num1, num2, num3);
        console.log(`El número ${mayor} es el mayor.`);
        mostrarMenu(); 
      });
    });
  });
}

module.exports = encontrarMayor;