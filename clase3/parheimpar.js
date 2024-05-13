const readline = require("readline");

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});


rl.question("insert your number: ",(n)=>{

    if (n %2 === 0 ){
        console.log(`El numero ${n} es par`)

    }else{
        console.log(`El numero ${n} no es par`);}

    rl.close();
    
});


