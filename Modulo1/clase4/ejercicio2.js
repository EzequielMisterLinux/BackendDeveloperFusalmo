function multiplicarPromise(a, b) {
    return new Promise((resolve, reject) => {
        const resultado = a*b
        
        if(isNaN(resultado)){
            reject("NO HAY ARGUMENTOS VALIDOS")
        }else{
            resolve(resultado)
        }
    
    })
}

multiplicarPromise(2,4)
.then((resultado) => {
    console.log(resultado);
})
.catch((error) =>{
console.error(error)
});