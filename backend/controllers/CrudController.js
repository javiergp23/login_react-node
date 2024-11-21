const {db, getTasksFromDb} = require('../config/db.js');

// Obtener tareas con filtros
const getTasks = async (req, res) => {
  try {
    const tasks = await getTasksFromDb(); // Llama a la función que obtiene las tareas
    res.status(200).json(tasks); // Responde con las tareas en formato JSON
  } catch (err) {
    console.error('Error al obtener tareas:', err.message);
    res.status(500).json({ error: 'Error al obtener tareas', details: err.message });
  }
};

// Crear nueva tarea
const createTask = async (req, res) => {
  try {
    const { title, description, due_date, status, tags } = req.body;

    // Ejecutar el INSERT sin pasar el campo ID, ya que se genera automáticamente
    await db.run(
      'INSERT INTO tasks (title, description, due_date, status, tags) VALUES (?, ?, ?, ?, ?)',
      [title, description, due_date, status, tags]
    );

    // Obtener el último ID insertado
    const lastID = this.lastID;  // Esta propiedad devuelve el ID generado por SQLite

    // Enviar respuesta con el ID generado
    res.status(201).json({ id: lastID, title, description, due_date, status, tags });
  } catch (err) {
    res.status(500).json({ error: 'Error al crear tarea', details: err.message });
  }
};

// Eliminar tarea
 const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await db.run('DELETE FROM tasks WHERE id = ?', [id]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar tarea', details: err.message });
  }
};

// Marcar tarea como completada
const completeTask = async (req, res) => {
  try {
    const { id } = req.params;
    await db.run('UPDATE tasks SET status = "completada" WHERE id = ?', [id]);
    res.status(200).send('Tarea completada');
  } catch (err) {
    res.status(500).json({ error: 'Error al completar tarea', details: err.message });
  }
};

module.exports = {
    getTasks,
    createTask,
    deleteTask,
    completeTask
}