import { sumar, restar, multi, div } from './funciones.js';

const misfunciones = [
  sumar,
  restar,
  multi,
  div
];

const resultado = misfunciones[0](5, 20);
const resultado1 = misfunciones[1](5, 20);
const resultado2 = misfunciones[2](5, 20);
const resultado3 = misfunciones[3](5, 20);
console.log(resultado); 
console.log(resultado1); 
console.log(resultado2); 
console.log(resultado3); 