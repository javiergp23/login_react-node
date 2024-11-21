
# Fullstack Project: Frontend & Backend

Este es un proyecto fullstack que consta de un **frontend** desarrollado con React y TypeScript, y un **backend** con Node.js, Express y SQLite. 

## Características

### Backend
- **Base de datos**: SQLite
- **Autenticación**: JWT
- **Seguridad**: Bcrypt para el hash de contraseñas
- **Middleware**: Morgan para registro de solicitudes HTTP, CORS configurado

### Frontend
- **Framework**: React con Vite
- **Librerías**: Material UI para estilos, Axios para las solicitudes HTTP
- **Rutas**: Configuradas con React Router

## Instalación

### Requisitos previos
- Node.js (v18 o superior)
- NPM o Yarn instalado

### Clonar el repositorio

git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>

Navega a la carpeta del backend:

cd backend

Instala las dependencias del backend:

npm install
Configura el archivo .env en el directorio raíz del backend con las variables necesarias, como el puerto del servidor y las credenciales de la base de datos (si es necesario).

Ejecuta el backend en modo de desarrollo:

npm run dev
El servidor backend se ejecutará en el puerto 5000 por defecto (configurable en el archivo .env).

Frontend
Navega a la carpeta del frontend:

cd frontend
Instala las dependencias del frontend:

npm install
Ejecuta el frontend en modo de desarrollo:

npm run dev
El frontend se ejecutará en el puerto 3000 por defecto (configurable en el archivo .env o en vite.config.ts).

root/
├── backend/
│   ├── node_modules/
│   ├── .env
│   ├── package.json
│   ├── app.js
│   ├── config/
│   ├── controllers/
│   ├── models/
│   └── database.db
├── frontend/
│   ├── node_modules/
│   ├── package.json
│   ├── vite.config.ts
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── styles/
└── README.md

