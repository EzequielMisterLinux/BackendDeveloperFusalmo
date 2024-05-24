function multiplicar(a, b , callback) {

    const resultado = a*b

    callback(resultado);
    
}

multiplicar(6,3, (resultado) => {
    console.log(`resultado :`, resultado)
})