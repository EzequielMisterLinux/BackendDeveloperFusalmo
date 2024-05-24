import inquirer from "inquirer";

let nuevoUsuario = {};

const preguntas = [
  {
    type: 'input',
    name: 'nombre',
    message: 'Ingrese su nombre:'
  },
  {
    type: 'input',
    name: 'edad',
    message: 'Ingrese su edad:'
  }
];

inquirer.prompt(preguntas).then((respuestas) => {
  const edad = parseInt(respuestas.edad);
  if(edad >= 18){
    console.log(`¡Eres mayor de edad! tienes ${respuestas.edad}`);
    console.log(`bienvenido  por favor, ingrese su email y una contraseña.`);
    preguntarNuevoUsuario();
  } else {
    console.log("Eres menor de edad.");
    console.log("no puedes registrarte!");
  }
});

function preguntarNuevoUsuario() {
  const preguntasNewuser = [
    {
      type: 'input',
      name: 'email',
      message: 'Ingrese su email:',
      validate: function (value) {
        const validacion = value.match(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-.]+$/
        );
        if (validacion) {
          return true;
        }
        return 'Por favor, introduce un correo válido.';
      }
    },
    {
      type: 'confirm',
      name: 'confirmacion',
      message: '¿Está seguro de que este es su email?'
    }
  ];

  inquirer.prompt(preguntasNewuser).then((respuestasNewUser) => {
    if (respuestasNewUser.confirmacion) {
      preguntarContrasena(respuestasNewUser.email);
    } else {
      preguntarNuevoUsuario();
    }
  });
}

function preguntarContrasena(email) {
  const preguntaContrasena = [
    {
      type: 'password',
      name: 'pass',
      message: 'Ingrese su contraseña:',
      mask: '🤨',
      validate: function (value) {
        const validacion = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value);
        if (validacion) {
          return true;
        }
        return 'La contraseña debe tener al menos 8 caracteres, un número, un carácter especial y una mayúscula.';
      }
    }
  ];

  inquirer.prompt(preguntaContrasena).then((respuestaContrasena) => {
    nuevoUsuario = {
      email: email,
      pass: respuestaContrasena.pass
    };
    console.log(`Nuevo usuario creado ${respuestas.nombre} y correo ${email}`);
    console.log("Por favor, inicie sesión.");
    iniciarSesion();
  });
}

function iniciarSesion() {
  const preguntasInicioSesion = [
    {
      type: 'input',
      name: 'email',
      message: 'Ingrese su email:',
      validate: function (value) {
        const validacion = value.match(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-.]+$/
        );
        if (validacion) {
          return true;
        }
        return 'ingrese un correo real!!.';
      }
    },
    {
      type: 'password',
      name: 'pass',
      message: 'ingrese su contraseña:',
      mask: '👀'
    }
  ];

  inquirer.prompt(preguntasInicioSesion).then((respuestasInicioSesion) => {
    if (respuestasInicioSesion.email === nuevoUsuario.email && respuestasInicioSesion.pass === nuevoUsuario.pass) {
      console.log("welcome to dashbord xd!!!!!!!.");
    } else {
      console.log("Email o la pasword incorrectas.");
      iniciarSesion()
    }
  });
}