function tarea1() {
    return new Promise((resolve) => {
        setTimeout(()=>
        resolve('tarea 1 completada'))
    }, 1000);
    
}

function tarea2() {
    return new Promise((resolve) => {
        setTimeout(()=>
        resolve('tarea 2 completada'))
    }, 2000);
    
}

function tarea3() {
    return new Promise((resolve) => {
        setTimeout(()=>
        resolve('tarea 3 completada'))
    }, 7000);
    
}

Promise.all([tarea1(), tarea2(), tarea3()])
.then((resultado)=>{
    console.log('tareas completadas correctamente');
    resultado.forEach((resultado)=> {
        console.log(resultado);
    })
})
.catch((error)=>{
    console.error('error', error);
})