class imcInsano {
    constructor(nombre, peso, altura) {
        this._nombre = nombre;
        this._peso = peso ; 
        this._altura = altura ;
    }

    formulaImc() {
        const imc = (this._peso / ((this._altura / 100) ** 2));
        console.log(`${this._nombre} tiene un IMC insano de ${imc}`);
    }
}

const persona1 = new imcInsano("JuanInsano", 80, 175);
persona1.formulaImc(); 

const persona2 = new imcInsano("Alejandra", 60, 165);
persona2.formulaImc(); 

const persona3 = new imcInsano("Maria", 55, 160);
persona3.formulaImc(); 

