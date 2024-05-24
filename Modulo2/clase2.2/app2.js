const fs = require('fs')


const contenido = "nuevo contenido en el archivo"

fs.writeFile('archivo.txt', contenido, err =>{
    if(err){
        console.error("error al escribir en el archivo",err);
    }else{
        console.error("todo correcto!!: ", contenido);
    }
})