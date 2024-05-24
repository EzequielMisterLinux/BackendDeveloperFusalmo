const fs = require('fs')

const archivo = 'archivo.txt'

const contenido = '\nHola mundo insano'

fs.appendFile(archivo, contenido, (err)=> {
    if(contenido){
        console.error("contenido agregado correctamente: ", contenido);
    }else{
        console.error("hubo un error al agregar el contenido :");
    }
})