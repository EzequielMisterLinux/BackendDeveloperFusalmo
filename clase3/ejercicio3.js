const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su número: ", (numero) => {
    let resultado = 1;
    for (let i = 1; i <= parseFloat(numero); i++) {
        resultado *= i;
    }
    console.log("El factorial es: " + resultado);
    rl.close(); 
});
