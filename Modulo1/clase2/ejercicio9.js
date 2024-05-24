let listaCompras = {
    "Manzana": 5,
    "Platanos": 4,
    "Uvas": 3,
    "Peras":3
}


function generarListaCompras(listaCompras){

    let listaLegible="Lista de compras: \n"
    
    for (let elemento in listaCompras){
        listaLegible += `${elemento} : ${listaCompras[elemento]} unidades\n`
    }
    return listaLegible


}

let listaLegible = generarListaCompras(listaCompras)
console.log(listaLegible);