function dividir(a, b, callback) {
    if(b=== 0){
        callback('Error: no se puede dividir entre 0')
    }else{
        const resultado = a/b
        callback(null, resultado)
    }
}

dividir(10,2,(error, resultado)=>{
    if(error){
        console.error(error);
    }else{
        console.log('su resultado es', resultado);
    }
})