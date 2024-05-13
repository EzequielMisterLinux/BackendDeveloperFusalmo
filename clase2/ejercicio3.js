let personas = [
    {nombre: "Ezequiel", edad: 21, ciudad: "Usulutan, Estanzuelas"},
    {nombre: "Larissa", edad: 22, ciudad: "Usulutan, Berlin"},
    {nombre: "Gracia", edad: 21, ciudad: "Usulutan, Santiago de Maria"},
    {nombre: "Listbeth", edad: 20, ciudad: "San Miguel, Santa Rosa"}
  ];
  
  function filtrarPersonas(personaObjeto, ciudad) {
    return personaObjeto.filter(persona => persona.edad > 19 && persona.ciudad.includes(ciudad));
  }
  
  let personasFiltradas = filtrarPersonas(personas, "Usulutan");
  console.log(personasFiltradas);