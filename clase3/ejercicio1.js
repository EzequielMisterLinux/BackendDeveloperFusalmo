const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function determinarSigno(numero) {
    if (numero > 0) {
        return "positivo";
    } else if (numero < 0) {
        return "negativo";
    } else {
        return "0";
    }
}

rl.question("Ingrese un numero: ", (numero) => {
    const signo = determinarSigno(parseFloat(numero));
    console.log(`El número es ${signo}`);
    rl.close(); 
});
