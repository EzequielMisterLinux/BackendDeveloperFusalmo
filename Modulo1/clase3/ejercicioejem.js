const op = (n1, n2) => n1 + n2;
const op2 = (n1, n2) => n1 - n2;
const op3 = (n1, n2) => n1 * n2;
const op4 = (n1, n2) => n1 / n2;

function operacionesBasicas(rl, mostrarMenu) {
  rl.question("insert your first number: ", (num1) => {
    rl.question("insert your second number: ", (num2) => {
      rl.question("insert your operation:\n+\n-\n*\n/\n: ", (operation) => {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        operation = String(operation);

        if (operation === '+') {
          console.log(`su suma es: ${op(num1, num2)}`);
        } else if (operation === '-') {
          console.log(`su resta es: ${op2(num1, num2)}`);
        } else if (operation === '*') {
          console.log(`su mult es: ${op3(num1, num2)}`);
        } else if (operation === '/') {
          console.log(`su division es: ${op4(num1, num2)}`);
        } else {
          console.log("your operation is invalid");
        }

        mostrarMenu();
      });
    });
  });
}

module.exports = operacionesBasicas;