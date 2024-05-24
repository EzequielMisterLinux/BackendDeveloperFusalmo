import inquirer from "inquirer";

inquirer.prompt([
    {
        type: 'checkbox',
        name: 'frutas',
        message: 'Seleccione sus frutas favoritas:',
        choices: ['manzana', 'banana', 'uvas', 'naranja'] 
    }
]).then((respuesta) => {
    console.log('Frutas seleccionadas:', respuesta.frutas.join('\n'));
    
    const frutasSeleccionadas = respuesta.frutas;
    if (frutasSeleccionadas.includes('manzana') && frutasSeleccionadas.includes('banana')) {
        console.log('Licuado fresco de manzana y banana');
    } else if (frutasSeleccionadas.includes('manzana') && frutasSeleccionadas.includes('naranja')) {
        console.log('Licuado ácido de manzana y naranja');
    } else if (frutasSeleccionadas.includes('banana') && frutasSeleccionadas.includes('naranja')) {
        console.log('Licuado Jumex de banana y naranja ');
    } else {
        console.log('Porfavor ingrese una conbinacion insana.');
    }
});
