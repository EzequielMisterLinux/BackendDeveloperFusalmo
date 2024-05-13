const express = require('express');
const mongoose = require('mongoose');


const app = express();


mongoose.connect('mongodb://localhost:27017/tienda', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch(err => console.error('Error al conectar con MongoDB', err));

const estudianteSchema = new mongoose.Schema({
  nombre: String,
  edad: Number
});

const Estudiante = mongoose.model('Estudiante', estudianteSchema);


app.get('/estudiantes', async (req, res) => {
  try {
    const estudiantes = await Estudiante.find();
    res.json(estudiantes);
  } catch (err) {
    res.status(500).json({ mensaje: err.message });
  }
});


app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});

