class Persona{
    constructor(nombre, edad, telefono){
        this._nombre = nombre;
        this._edad = edad;
        this._telefono = telefono;
    }

    presentacion(){
        return(console.log (`Hola mi nombre es:${this._nombre} tengo ${this._edad} , mi telefono es: ${this._telefono}`)
    )
    }

    hablarIdioma(){
        return console.log(`Hola soy ${this._nombre} y hablo english `);
    }
}

let persona1 = new Persona("EL insano", 21, "503")

persona1.presentacion();
persona1.hablarIdioma();