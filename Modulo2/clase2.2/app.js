const fs = require('fs')

fs.readFile('archivo.txt', 'utf8', (err, data)=> {
    if(err){
        console.error("Error al leer el archivo", err)
    }else{
        console.log('CONTENIDO DEL ARCHIVO', data)
    }
})