
function calcularFactorial(rl, mostrarMenu) {
  rl.question("Ingrese su número: ", (numero) => {
    const num = parseFloat(numero);

    if (!isNaN(num) && Number.isInteger(num) && num >= 0) {
      let resultado = 1;

      for (let i = 1; i <= num; i++) {
        resultado *= i;
      }

      console.log(`El factorial de ${num} es: ${resultado}`);
      mostrarMenu();
    } else {
      console.log("Por favor, ingrese un número entero no negativo.");
      mostrarMenu();
    }
  });
}

module.exports = calcularFactorial;