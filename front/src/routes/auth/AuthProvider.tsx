import { useContext, createContext, useState } from 'react';
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

    function login(){
        setIsAuthenticated(true);
    }
    function logout(){
        setIsAuthenticated(false);
    }


    return( 
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>)
}

export const useAuth = () => useContext(AuthContext);