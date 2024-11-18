import { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout"
import { useAuth } from "./auth/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { API_URL } from "./auth/Constants";
import { AuthResponseError } from "../types/types";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorResponse, setErrorResponse] = useState("");
    const auth = useAuth();
    const goTo = useNavigate();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                },
               
            );
            if(response.ok){
                console.log('Login successful');
                setErrorResponse("");
                auth.login();
                goTo('/dashboard');
            }else{
                console.log('Error creating user');
                const json = (await response.json()) as AuthResponseError;
                setErrorResponse(json.body.error);
                return; 
            } 
        } catch (error) {
            console.error(error);
        }
    }

    if(auth.isAuthenticated){
        return <Navigate to='/dashboard'/>
    }

    return (
        <DefaultLayout>
            <form className="form" onSubmit={handleSubmit}>
                {!!errorResponse && <div className="errorMessage"> {errorResponse}</div>}
                <h1>Login</h1>
                <label htmlFor="">Email</label>
                <input 
                    type="text" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="">Password</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                
                <button>Login</button>
                <div>
                    <h4>
                        You don't have an account? <a href="/signup">Sign Up</a>
                    </h4> 
                    
                </div>
            </form>
        </DefaultLayout>
    )
}