const fs = require('fs')

const ruta = '/home/ezequielcampos/Documents/code.txt'

fs.readFile(ruta, 'utf8', (err, data)=> {
    if(err){
        console.error("error al leer el archivo", err);
    }else{
        console.error("contenido del archivo: ", data);
    }
})

