
function categoriaVehiculo(rl, mostrarMenu) {
  rl.question("Digite la categoria del vehiculo: ", (categoria) => {
    let tipoVehiculo;

    switch (categoria) {
      case "1":
        tipoVehiculo = "Moto";
        break;
      case "2":
        tipoVehiculo = "Motocicleta";
        break;
      case "3":
        tipoVehiculo = "Camion";
        break;
      case "4":
        tipoVehiculo = "bicicleta";
        break;
      default:
        tipoVehiculo = "la categoria no existe!";
        break;
    }

    console.log(tipoVehiculo);
    mostrarMenu();
  });
}

module.exports = categoriaVehiculo;