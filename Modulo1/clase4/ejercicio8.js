function dividir(a, b) {
    return new Promise((resolve, reject)=>{
        if(b=== 0){
            reject('Error: no se puede dividir entre 0')
        }else{
            const resultado = a/b
            resolve(resultado)
        }
    })
}



dividir(10,3)
    .then((resultado)=>{
        console.log('su resultado es:', resultado);

    })
    .catch((error)=>{
        console.log(error);
    })