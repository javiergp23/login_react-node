import React, { useState } from "react";
import { API_URL }  from "../routes/auth/Constants";
import { Button, TextField, MenuItem, Select, InputLabel, FormControl, Box } from "@mui/material";


const FormDataTask: React.FC<{ fetchTasks: () => void }> = ({ fetchTasks }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [tags, setTags] = useState<string>("");

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if(!title || !description || !dueDate || !status || !tags){
      alert("Todos los campos son obligatorios");
      return;
    }

    const formattedDate = new Date(dueDate).toLocaleDateString('es-AR');

    const newTask = {
      title,
      description,
      due_date: formattedDate,
      status,
      tags,
    };

    try {
      const response = await fetch(`${API_URL}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        fetchTasks(); 
        setTitle(""); 
        setDescription("");
        setDueDate("");
        setStatus("");
        setTags("");
      } else {
        const errorData = await response.json();
        console.error("Error al agregar la tarea:", errorData);
      }
    } catch (err) {
      console.error("Error al agregar la tarea:", err);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, margin: "20px auto", display: "flex", flexDirection: "column" }}>
      <TextField
        label="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        label="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        variant="outlined"
        margin="normal"
        multiline
        rows={4}
        required
      />
      <TextField
        label="Fecha Límite"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        variant="outlined"
        margin="normal"
        required
        InputLabelProps={{
          shrink: true,
        }}
      />
      <FormControl variant="outlined" margin="normal" required>
        <InputLabel>Estado</InputLabel>
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          label="Estado"
        >
          <MenuItem value="pendiente">Pendiente</MenuItem>
          <MenuItem value="completada">Completada</MenuItem>
          <MenuItem value="en progreso">En Progreso</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" margin="normal" required>
        <InputLabel>Etiqueta</InputLabel>
        <Select
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          label="Etiqueta"
        >
          <MenuItem value="Trabajo">Trabajo</MenuItem>
          <MenuItem value="Personal">Personal</MenuItem>
          <MenuItem value="Urgente">Urgente</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" type="submit">
        Agregar Tarea
      </Button>
    </Box>
  );
};

export default FormDataTask;