import inquirer from "inquirer";

const pregunta = [
    {
        type: 'input',
        name: 'correo',
        message: 'Introduce tu correo:',
        validate: function (value) {
            const validacion = value.match(
                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
            );

            if (validacion) {
                return true;
            }
            return 'Por favor, introduce un correo válido.';
        }
    }
];

inquirer.prompt(pregunta).then((respuestas) => {
    console.log('Correo ingresado:', respuestas.correo);
});
