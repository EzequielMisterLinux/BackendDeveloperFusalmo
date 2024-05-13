const readline = require('readline');

function combinarColores(rl, mostrarMenu) {
  rl.question("ingrese el primer color : ", (color1) => {
    rl.question("ingrese el segundo color : ", (color2) => {
      rl.question("ingrese el tercer color : ", (color3) => {
        if (color1 === "azul" && color2 === "amarillo") {
          console.log("su color es verde! ");
        } else if (color1 === "azul" && color2 === "rojo") {
          console.log("su color es morado! ");
        } else if (color1 === "rojo" && color3 === "amarillo") {
          console.log("su color es naranja");
        } else {
          console.log("esa combinacion no esta disponible! ");
        }
        mostrarMenu();
      });
    });
  });
}

module.exports = combinarColores;