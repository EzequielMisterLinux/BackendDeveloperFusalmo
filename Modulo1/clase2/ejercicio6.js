let personas = [
    {nombre: "Ezequiel", edad: 21, genero: "Hombre"},
    {nombre: "Larissa", edad: 22, genero: "Mujer"},
    {nombre: "Gracia", edad: 21, genero: "Mujer"},
    {nombre: "Listbeth", edad: 20, genero: "Mujer"}
  ];
  
  function buscarPorNombre(arrayPersona, nombre){
    return arrayPersona.find(objeto => objeto.nombre === nombre);
  }
  
  let personaBuscada = buscarPorNombre(personas, "Larissa");
  console.log(personaBuscada);
  