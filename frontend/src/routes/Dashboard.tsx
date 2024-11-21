import {useState, useEffect} from 'react';
import { useAuth } from "./auth/AuthProvider";
import DataTable from "../components/Datatable";
import { Box, Button } from "@mui/material";
import Modal from "../components/Modal.tsx";
import { API_URL } from './auth/Constants.ts';
interface Task {
    id: number;
    title: string;
    description: string;
    due_date: string;
    status: string;
    tags: string;
  }

export default function Dashboard() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const auth = useAuth();

    const fetchTasks = async () => {
        try {
          const response = await fetch(`${API_URL}/tasks`); 
          const data = await response.json();
          if (Array.isArray(data)) {
            setTasks(data);
          } else {
            console.error("La respuesta no es un array:", data);
            setTasks([]);
          }
        } catch (err) {
          console.error("Error al obtener las tareas:", err);
        }
      };
      // Obtener las tareas al montar el componente
      useEffect(() => {
        fetchTasks();
      }, []);

    function handleLogout(){
        auth.logout();
    }
    //  metodo para eliminar una tarea
    const handleDelete = async (id: number) => {
      try {
        const response = await fetch(`${API_URL}/tasks/${id}`, {
          method: 'DELETE', 
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error('Error al eliminar tarea');
        }
        // Actualizar el estado para eliminar la tarea de la lista
        setTasks(tasks.filter((task) => task.id !== id));
      } catch (err) {
        console.error('Error al eliminar tarea:', err);
      }
    };

    return (
        <Box component='div' sx={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div>
                <h1 className="dashboard">CRUD</h1>
                <Button className="logout" onClick={handleLogout} sx={{
                    position: 'absolute',
                    left: { xs: '99%', sm: '90%', md: '75%', lg: '70%', xl: '%' },
                    fontSize: { xs: '0.8rem', sm: '1rem' },
                    padding: { xs: '5px 10px', sm: '8px 16px' },
                  }}>Logout
                </Button>
            </div>
            <Box component='div' sx={{
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '40px',
            }}>
            
            <DataTable tasks={tasks} handleDelete={handleDelete}/> 
            </Box>
            <Modal fetchTasks={fetchTasks}/>
        </Box>
    )
}