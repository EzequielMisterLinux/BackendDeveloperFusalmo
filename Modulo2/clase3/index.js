import inquirer from "inquirer";

const preguntas = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Dígame su nombre: '
    },
    {
        type: 'confirm',
        name: 'confirmacion',
        message: '¿Está seguro de que este es su nombre?' 
    },
    {
        type: 'list',
        name: 'color',
        message: '¿Cuál es su color favorito?',
        choices: ['azul', 'verde', 'amarillo', 'rojo'] 
    },
    {
        type: 'password',
        name: 'pass',
        message: 'Ingrese su contraseña:',
        mask: '👀'
    },
    {
        type: 'checkbox',
        name: 'intereses',
        message: 'Seleccione una opción de intereses:',
        choices: ['programación', 'diseño', 'base de datos'] 
    }
];

inquirer.prompt(preguntas).then((respuestas) => {
    if (respuestas.confirmacion && respuestas.pass === '123456') { 
        console.log('¡Confirmado!');
        console.log(`Hola ${respuestas.nombre}`);
        console.log(`Tu color es: ${respuestas.color}`);
        console.log('¡Inicio de sesión exitoso!');
        console.log(`Sus intereses son: ${respuestas.intereses.join('\n')}`);
    } else {
        console.log('El nombre no coincide con la confirmación o la contraseña es incorrecta.');
    }
});
