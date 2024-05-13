function retrasarPromise(ms) {

    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(`la promesa se ha resuelto en ${ms} milisegundos`)
        })
    },ms)
    
}

retrasarPromise(2000)
.then((mensaje) => {
    console.log(mensaje);
})