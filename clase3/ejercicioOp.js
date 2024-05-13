const readline = require('readline');

function sumar(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el primer número: ', (respuesta1) => {
    rl.question('Ingrese el segundo número: ', (respuesta2) => {
        const num1 = parseInt(respuesta1);
        const num2 = parseInt(respuesta2);

        console.log(`La suma de ${num1} y ${num2} es: ${sumar(num1, num2)}`);
        console.log(`La resta de ${num1} y ${num2} es: ${resta(num1, num2)}`);

        rl.close();
    });
});
