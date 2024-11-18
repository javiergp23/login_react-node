import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './routes/SignUp.tsx'
import Login from './routes/Login.tsx'
import Dashboard from './routes/Dashboard.tsx'
import ProtectedRoute from './routes/ProtectedRoute.tsx'
import { AuthProvider } from './routes/auth/AuthProvider.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp/>,
    
  },
  {
    path: '/',
    element: <ProtectedRoute/>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard/>,
      }
    ]
  },
  {
    path: '*',
    element: <Login/>, 
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
