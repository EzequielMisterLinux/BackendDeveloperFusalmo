const nodemailer = require('nodemailer');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa tu dirección de correo electrónico de Outlook: ', (remitente) => {
  rl.question('Ingresa tu contraseña de Outlook: ', (contrasena) => {
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com', 
      port: 587,
      secure: false, 
      auth: {
        user: remitente, 
        pass: contrasena 
      }
    });

    rl.question('Ingresa la dirección de correo electrónico del destinatario: ', (destinatario) => {
      rl.question('Ingresa el asunto del correo: ', (asunto) => {
        rl.question('Ingresa el mensaje del correo: ', (mensaje) => {
          const mailOptions = {
            from: remitente, 
            to: destinatario, 
            subject: asunto, 
            text: mensaje 
          };

          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log('Error al enviar el correo electrónico:', error);
            } else {
              console.log('Correo electrónico enviado:', info.response);
            }
            rl.close();
          });
        });
      });
    });
  });
});