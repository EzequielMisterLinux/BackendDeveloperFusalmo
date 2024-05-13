let persona = [
    {nombre:"Paula", edad :19 },
    {nombre:"Maria", edad :19 },
    {nombre:"Alejandra", edad :22 },
    {nombre:"Cyntia", edad :17 }
]

let PersonasOrdenadas = persona.sort((a, b) => a.edad -b.edad)
console.log(PersonasOrdenadas);