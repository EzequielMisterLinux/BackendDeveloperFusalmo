function saludar(nombre, callback) {
    const saludo = `Hola ${nombre}`
    callback(saludo)
    
};

function mostrar(saludo) {
    console.log(saludo);
    
};


saludar('Ezequiel', mostrar);