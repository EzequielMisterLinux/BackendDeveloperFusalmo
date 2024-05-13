function contarPalabrasIgual(array) {
    let contadorPalabras = {};

    array.forEach(cadena => {
        let palabras = cadena.split(/\s+/);
        palabras.forEach(palabra => {
            if (contadorPalabras[palabra]) {
                contadorPalabras[palabra]++;
            } else {
                contadorPalabras[palabra] = 1;
            }
        });
    });

    return contadorPalabras;
}

let frase = ["hola hola muy insano pero muy insano"];
let resultado = contarPalabrasIgual(frase);
console.log(resultado);
