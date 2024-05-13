let estudiante = [
    {nombre:"Raquel", edad:20},
    {nombre: "Keyla", edad:17},
    {nombre: "Cristina", edad:23}
]

let profesores = [
    {nombre:"Glenda", Materia: "Matematicas"},
    {nombre:"Julia", Materia: "Lenguaje"},
    {nombre: "Ana", Materia:"Ciencias"}
]


function combinarObjetos (a, b){

    let comunidadEducativa = [...a, ...b]
    return comunidadEducativa
}

let comunidad = combinarObjetos(estudiante, profesores)

console.log(comunidad);