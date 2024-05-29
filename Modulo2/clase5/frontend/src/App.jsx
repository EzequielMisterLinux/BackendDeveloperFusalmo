import React, { useState, useEffect } from "react";
import axios from 'axios';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:3000/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Error al recuperar las tareas', error);
        }
    };

    const createTask = async () => {
        try {
            const response = await axios.post('http://localhost:3000/tasks', { title: newTaskTitle });
            setTasks([...tasks, response.data]);
            setNewTaskTitle('');
        } catch (error) {
            console.error('Error al crear la tarea', error);
        }
    };

    const updateTask = async (id, updatedTask) => {
        try {
            const response = await axios.put(`http://localhost:3000/tasks/${id}`, updatedTask);
            setTasks(tasks.map(task => (task.id === id ? response.data : task)));
        } catch (error) {
            console.error('Error al modificar la tarea', error);
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/tasks/${id}`);
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.error('Error al eliminar la tarea', error);
        }
    };

    return (
        <div>
            <h1>Administrador de tareas</h1>
            <input 
                type="text" 
                value={newTaskTitle} 
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="Nueva tarea" 
            />
            <button onClick={createTask}>Agregar tarea</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input 
                            type="text" 
                            value={task.title} 
                            onChange={(e) => updateTask(task.id, { title: e.target.value })}
                        />
                        <button onClick={() => deleteTask(task.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
