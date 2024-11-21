import { useContext, createContext, useState, useEffect } from 'react';
interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthContext = createContext({
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
    
});

export function AuthProvider({ children }: AuthProviderProps) {
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);

    // Verificamos si el accessToken está en localStorage
    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            // Aquí podemos agregar una lógica para verificar si el token sigue siendo válido
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    //Metodo para iniciar sesion
    function login(){
        setIsAuthenticated(true);
    }
    //Metodo para cerrar sesion
    function logout(){
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setIsAuthenticated(false);
    }

    return( 
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>)
}

export const useAuth = () => useContext(AuthContext);