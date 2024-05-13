const readline =require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("ingrese su numero para verificar si es par o impar: ",(num) => {
    if(parseFloat(num) %2 === 0){
        console.log(`El numero ${num} es par`);
    }else{
        console.log(`El numero ${num} es impar`);
    }
    rl.close()
})