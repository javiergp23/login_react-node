import { useAuth } from "./auth/AuthProvider";
import DataTable from "../components/Datatable";
import { Box } from "@mui/material";

export default function Dashboard() {
    const auth = useAuth();

    function handleLogout(){
        auth.logout();
    }

    return (
        <Box component='div' sx={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div>
                <h1 className="dashboard">Dashboard</h1>
                <button className="logout" onClick={handleLogout}>Logout</button>
            </div>
            <Box component='div' sx={{
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            
                <DataTable/> 

            </Box>
            <button className="agregarTarea"> 
                Agregar tarea
            </button>
        </Box>
    )
}