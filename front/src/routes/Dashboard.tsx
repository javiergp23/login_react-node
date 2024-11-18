import { useAuth } from "./auth/AuthProvider";

export default function Dashboard() {
    const auth = useAuth();

    function handleLogout(){
        auth.logout();
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Aqui estara el crud</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}