const leerLinea = require('readline');

const op = (n1, n2) => {
    return n1+n2;
}

const op2 = (n1, n2) => {
    return n1-n2;
}

const op3 = (n1, n2) => {
    return n1*n2;
}

const op4 = (n1, n2) => {
    return n1/n2;
}

const interfaz = leerLinea.createInterface({
    input : process.stdin,
    output: process.stdout
})



interfaz.question("insert your first number: ",(num1)=>{
    interfaz.question("insert your second number: ", (num2)=>{
        interfaz.question("insert your operation:\n+\n-\n*\n/\n: ",(operation) =>{

            num1 = parseInt(num1);
            num2 = parseInt(num2);
            operation = String(operation);
    
            if(operation == '+'){
                console.log(`su suma es: ${op(num1, num2)}`);
            }else if(operation == '-'){
                console.log(`su resta es: ${op2(num1, num2)}`);
            }else if(operation == '*'){
                console.log(`su mult es: ${op3(num1, num2)}`);
            }else if(operation == '/'){
                console.log(`su division es: ${op4(num1, num2)}`);
            }else{
                console.log("your operation is invalid");
                return interfaz.question(num1);
                
            }
    
            interfaz.close();
        });

    });
});

