const productoA = {
    nombre: "camisa",
    precio: 25,
    cantidad: 5
};

const productoB = {
    nombre: "pantalones",
    precio: 40,
    cantidad: 3
};

let costoTotalProductoA = productoA.precio * productoA.cantidad;
let costoTotalProductoB = productoB.precio * productoB.cantidad;

let costoTotal = costoTotalProductoA+costoTotalProductoB

console.log(`El costo total del primer producto es :${"$"+costoTotalProductoA}`);
console.log(`El costo total del segundo producto es: ${"$"+costoTotalProductoB}`);

console.log(`El costo total es: ${"$"+costoTotal}`);