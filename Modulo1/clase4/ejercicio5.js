function operacionAsync(callback) {
    setTimeout(() => {
        callback('operacion async completada')
        
    }, 2000);
}

operacionAsync((mensaje) => {
    console.log(mensaje);
})