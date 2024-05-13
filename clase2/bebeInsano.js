class bebeInsane{
    constructor(nombre, MesesNacimiento){
        this._nombre = nombre;
        this._MesesNacimiento = MesesNacimiento;
    }

        llora(){
            return(console.log (`El recien: ${this._nombre} que nacio hace ${this._MesesNacimiento} esta llorando bien insane`)
         )
        }

        duerme(){
            return(console.log (`El recien: ${this._nombre} que nacio hace ${this._MesesNacimiento} esta Durmiendo tranquilamente`)

         )
        }

        come(){
            return(console.log (`El recien: ${this._nombre} que nacio hace ${this._MesesNacimiento} esta comiendo `)
         )
        }
}

let bebeInsano = new bebeInsane("pablito", "de 6 meses")
let bebeTranqui = new bebeInsane("cristina", "de 2 meses")
let bebeCome = new bebeInsane("lucy", "de 9 meses")

bebeInsano.llora();
bebeTranqui.duerme();
bebeCome.come();