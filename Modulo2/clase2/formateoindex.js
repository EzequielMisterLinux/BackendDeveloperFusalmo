const fs = require('fs');
const formatoFecha = require('./formateo');

const hoy = new Date();
const formateo = formatoFecha(hoy);

fs.writeFileSync('fecha.txt', `La fecha de hoy es ${formateo}`);
console.log('Archivo fecha.txt creado');