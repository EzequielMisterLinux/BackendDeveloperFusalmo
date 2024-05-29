import express from 'express';
import axios from 'axios'; 
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);

    if (task) {
        res.json(task);
    } else {
        res.status(404).send("No se encontró la tarea");
    }
});

app.put('/tasks/:id', (req, res) => {
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

app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        res.status(204).send('Registro eliminado');
    } else {
        res.status(404).send('No se eliminó la tarea');
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en la URL http://localhost:${port}/tasks`);
});
