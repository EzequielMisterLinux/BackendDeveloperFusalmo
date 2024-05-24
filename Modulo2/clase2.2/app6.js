const fs = require('fs');
const path = require('path');
const readline = require('readline');

const documentos = path.join(process.env.HOME || process.env.USERPROFILE, 'Documents');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Nombre de la carpeta a eliminar: ', (carpeta) => {
  const ncarpeta = path.join(documentos, carpeta);

  fs.rmdir(ncarpeta, { recursive: true }, (err) => {
    if (err) {
      console.error("Hubo un error al eliminar la carpeta:", err);
    } else {
      console.log("Carpeta eliminada con éxito");
    }
    rl.close();
  });
});