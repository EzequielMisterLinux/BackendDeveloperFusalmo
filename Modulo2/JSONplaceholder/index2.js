const express = require('express');
const axios = require('axios');
const app = express();
const PUERTO = 3000;

app.use(express.json());

const url = 'https://jsonplaceholder.typicode.com/todos';

app.get('/todos', async (req, res) => {
  try {
    const respuesta = await axios.get(url);
    res.json(respuesta.data);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error.message);
    res.status(500).json({ error: 'Erro del servidor' });
  }
});

app.get('/todos/:id/title', async (req, res) => {
  const { id } = req.params;
  try {
    const respuesta = await axios.get(url);
    const todo = respuesta.data.find(t => t.id === parseInt(id));
    if (todo) {
      const todoMapeado = respuesta.data.map(t => ({ title: t.title }));
      res.json(todoMapeado.find(t => t.title === todo.title));
    } else {
      res.status(404).json({ error: 'tittle no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener el titulo:', error.message);
    res.status(500).json({ error: 'Errorr del servidor' });
  }
});

app.get('/todos/title/:title', async (req, res) => {
  const { title } = req.params;
  try {
    const respuesta = await axios.get(url);
    const todos = respuesta.data;
    const filteredTodos = todos.filter(todo => todo.title.toLowerCase().includes(title.toLowerCase()));
    const todosMapeados = filteredTodos.map(todo => ({
      userId: todo.userId,
      id: todo.id,
      title: todo.title,
      completed: todo.completed
    }));
    res.json(todosMapeados);
  } catch (error) {
    console.error('Error al obtener los dato del user por título:', error.message);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

app.get('/todos/limit/5', async (req, res) => {
  try {
    const respuesta = await axios.get(url);
    const todos = respuesta.data.slice(0, 5);
    const todosMapeados = todos.map(todo => ({
      userId: todo.userId,
      id: todo.id,
      title: todo.title,
      completed: todo.completed
    }));
    res.json(todosMapeados);
  } catch (error) {
    console.error('Error al obtener los usuario limitados:', error.message);
    res.status(500).json({ error: 'error del servidor' });
  }
});



app.listen(PUERTO, () => {
  console.log(`Servidor API run run en http://localhost:${PUERTO}`);
});