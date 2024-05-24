const leerLinea = require('readline');

const usarInterfaz = leerLinea.createInterface({
    input: process.stdin,
    output: process.stdout
});

const opcionesPais = {
    1: "El Salvador",
    2: "Guatemala",
    3: "Costa Rica",
    4: "Panamá"
};

const opcionesCiudadano = {
    1: "Salvadoreño",
    2: "Guatemalteco",
    3: "Costarricense",
    4: "Panameño xD"
};

const opcionesMostrar = () => {
    let opciones = '';
    for (let opcion in opcionesPais) {
        opciones += `${opcion}: ${opcionesPais[opcion]}\n`;
    }
    return opciones;
}

function interfaz() {usarInterfaz.question("Ingrese su nombre: ", (nombre) => {
    usarInterfaz.question("Ingrese su edad: ", (edad) => {
        usarInterfaz.question(`Ingrese el número de su país:\n${opcionesMostrar()}`, (pais) => {
            usarInterfaz.question('¿Eres insano?\n1: Sí\n2: No\n', (insanidad) => {
                
                edad = parseInt(edad);
                pais = parseInt(pais);
                insanidad = parseInt(insanidad);

                if (opcionesCiudadano[pais]) {
                    if (edad >= 18) {
                        if (pais === 1 && insanidad === 1) {
                            console.log(`¡Hola, ${nombre}! Eres mayor de edad, eres ${opcionesCiudadano[pais]}, y eres muy insano.`);
                        } else if (insanidad === 1) {
                            console.log(`¡Hola, ${nombre}! Eres mayor de edad, eres ${opcionesCiudadano[pais]}, pero para ser insano debes ser de El Salvador.`);
                        } else {
                            console.log(`¡Hola, ${nombre}! Eres mayor de edad y eres ${opcionesCiudadano[pais]}.`);
                        }
                    } else {
                        console.log(`¡Hola, ${nombre}! Eres menor de edad y eres ${opcionesCiudadano[pais]}.`);
                    }
                } else {
                    console.log("El número de país es invalido.");
                    return interfaz();
                }

                usarInterfaz.close();
            });
        });
    });
});
}

interfaz();