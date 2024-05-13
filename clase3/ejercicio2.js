const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function encontrarMayor(numero1, numero2, numero3) {
    numero1 = Number(numero1);
    numero2 = Number(numero2);
    numero3 = Number(numero3);

    if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
        if (numero1 > numero2 && numero1 > numero3) {
            return numero1;
        } else if (numero2 > numero1 && numero2 > numero3) {
            return numero2;
        } else if (numero3 > numero1 && numero3 > numero2) {
            return numero3;
        } else {
            return null; 
        }
    } else {
        return null; 
    }
}

rl.question("Ingrese el primer numero: ", (numero1) => {
    rl.question("Ingrese el segundo numero: ", (numero2) => {
        rl.question("Ingrese el tercer numero: ", (numero3) => {
            const mayor = encontrarMayor(numero1, numero2, numero3);
            if (mayor !== null) {
                console.log(`El número ${mayor} es el mayor ingresado.`);
            } else {
                console.log("Por favor ingrese un numero y no letras y tambien ingrese numeros diferentes no iguales.");
            }
            rl.close();
        });
    });
});
