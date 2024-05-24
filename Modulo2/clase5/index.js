import express from 'express';
import readline from 'readline';
import axios from 'axios'; 

const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const app = express();
const port = 3000;

app.use(express.json());

let tasks = [];

app.get('/task', (req, res) => {
    res.json(tasks);
});

app.post('/task', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.get('/task/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);

    if (task) {
        res.json(task);
    } else {
        res.status(404).send("No se encontró la tarea");
    }
});

app.put('/task/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);

    if (task) {
        task.title = req.body.title || task.title;
        task.completed = req.body.completed !== undefined ? req.body.completed : task.completed;
        res.json(task);
    } else {
        res.status(404).send('No se actualizó la tarea');
    }
});

app.delete('/task/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        res.status(204).send('registro eliminado');
    } else {
        res.status(404).send('No se eliminó la tarea');
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en la URL http://localhost:${port}/task`);
    promptForTaskTitle(); 
});

function promptForTaskTitle() {
    interfaz.question("Insert your title task: ", (taskTitle) => {
        axios.post('http://localhost:3000/task', {
            title: taskTitle
        })
        .then(response => {
            console.log('Task added:', response.data);
        })
        .catch(error => {
            console.error('Error adding task:', error);
        })
        .finally(() => {
            interfaz.close(); 
        });
    });
}
