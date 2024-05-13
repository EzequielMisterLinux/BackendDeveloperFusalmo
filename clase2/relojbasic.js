class Reloj{

    constructor(){

        this.fecha = new Date();

    }

    mostrarHoraActual() {

        let hora = this.fecha.getHours();
        let min = this.fecha.getMinutes();
        let seg = this.fecha.getSeconds();

        const mensaje = `La hora actual es: ${hora}:${min}:${seg}`;

        console.log(mensaje);

    }
}
let horaActual = new Reloj();

horaActual.mostrarHoraActual();