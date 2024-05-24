class Persona{
    constructor(nombre, edad) {
        this.nombre = nombre,
        this.edad = edad
    }
    saludo(){
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${edad} de edad`);
    }
}


module.exports = Persona