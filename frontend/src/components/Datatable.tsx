import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { CheckedIcon } from "./CheckedIcon";
import { Button } from "@mui/material";
import { FormFilter } from "./FormFilter";
interface Task {
  id: number;
  title: string;
  description: string;
  due_date: string;
  status: string;
  tags: string;
}
interface DatatableProps {
  tasks: Task[];
  handleDelete: (id: number) => void;
}

const Datatable: React.FC<DatatableProps> = ({ tasks, handleDelete }) => {
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);
  const [filters, setFilters] = useState<{ tags: string[], status: string }>({
    tags: [],
    status: ''
  });

  // Función para manejar la aplicación de los filtros
  const handleFilter = (newFilters: { tags: string[], status: string }) => {
    setFilters(newFilters);

    const filtered = tasks.filter(task => {
      const statusMatch = newFilters.status ? task.status === newFilters.status : true;
      const taskTags = task.tags.split(',');
      const tagsMatch = newFilters.tags.length > 0 
        ? newFilters.tags.some(tag => taskTags.includes(tag)) 
        : true;
      return statusMatch && tagsMatch;
    });

    setFilteredTasks(filtered);
  };

  // Función para manejar la limpieza de los filtros
  const handleClearFilters = () => {
    setFilters({ tags: [], status: '' });
    setFilteredTasks(tasks); 
  };
  // Cuando no haya filtros, la tabla debe mostrar todos los datos
  React.useEffect(() => {
    if (filters.tags.length === 0 && filters.status === '') {
      setFilteredTasks(tasks); // Si no hay filtros, mostramos todos los datos
    }
  }, [tasks, filters]);

  

  return (
    <TableContainer component={Paper} sx={{
      maxWidth: {xs: '95%', sm: '95%', md: '80%', lg: '80%', xl: '80%'},
      margin: {xs: '0 0 0 20%', sm: '0 0 0 20%', md: 'auto', lg: 'auto', xl: 'auto' }, 
    }}>
      <FormFilter filters={filters} onFilterChange={handleFilter} handleClearFilters={handleClearFilters}/>
      <Table
        sx={{
            minWidth: 650,
            maxWidth: '100%', // Limita el ancho al contenedor
            tableLayout: 'fixed', // Controla el ancho de las celdas
            wordWrap: 'break-word', // Permite dividir texto extenso
        }}
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Título</TableCell>
            <TableCell align="left">Descripción</TableCell>
            <TableCell align="left">Fecha Límite</TableCell>
            <TableCell align="left">Estado</TableCell>
            <TableCell align="left">Etiqueta</TableCell>
            <TableCell align="center">Marcar tarea como completada</TableCell>
            <TableCell align="left">Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredTasks.map((task, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {task.title}
              </TableCell>
              <TableCell align="left">{task.description}</TableCell>
              <TableCell align="left">{task.due_date}</TableCell>
              <TableCell align="left">{task.status}</TableCell>
              <TableCell align="left">{task.tags}</TableCell>
              <TableCell align="left">
                <CheckedIcon />
              </TableCell>
              <TableCell align="left">
                <Button
                    sx={{
                      width: 40, 
                      height: 40, 
                      borderRadius: '50%', 
                      backgroundColor: '#f5f5f5', 
                      '&:hover': {
                        backgroundColor: '#d32f2f',
                        color: '#fff', 
                      },
                      padding: 0, 
                      minWidth: 0, 
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleDelete(task.id)}
                    >
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Datatable;
