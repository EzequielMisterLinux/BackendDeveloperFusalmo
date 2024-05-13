function validarObjeto(objeto){

    const propiedades = ['nombre', 'direccion', 'telefono'];

    for (let propiedad of propiedades){
        if(objeto.hasOwnProperty(propiedad)){

            let mjs = "Objeto Aprobado"
            return mjs

        }else{
            let mjs = "Objeto NO Aprobado"
            return mjs   
        }
    }
    
    

}

let cliente = {nombre:"Ezequiel" , 
direccion:"Usulutan",
telefono: 77774551}
console.log(validarObjeto(cliente));
