import { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { useAuth } from "./auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { API_URL } from "./auth/Constants";
import { AuthResponseError } from "../types/types";

export default function SignUp() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorResponse, setErrorResponse] = useState("");

    const auth = useAuth();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    username,
                    password,
                }),
            })
            if(response.ok){
                console.log('User created successfully');
                const json = (await response.json()) as AuthResponseError;
                setErrorResponse(json.body.error);
                return;
            }else{
                console.log('Error creating user');
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
                <h1>Signup</h1>
                {!!errorResponse && <div className="errorMessage"> {errorResponse}</div>}
                <label >Name</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}/>

                <label htmlFor="">Username</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}/>

                <label htmlFor="">Password</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>

                <button>SignUp</button>
            </form>
        </DefaultLayout>
    )
}