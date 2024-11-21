
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

## Estructura del Proyecto

```plaintext
root/
├── backend/
│   ├── node_modules/
│   ├── .env                # Variables de entorno para la configuración
│   ├── package.json
│   ├── app.js              # Configuración del servidor backend
│   ├── config/             # Configuración de la base de datos, JWT, etc.
│   ├── controllers/        # Controladores de las rutas
│   ├── models/             # Modelos de la base de datos
│   └── database.db         # Base de datos SQLite
├── frontend/
│   ├── node_modules/
│   ├── package.json
│   ├── vite.config.ts      # Configuración de Vite
│   ├── public/             # Archivos públicos
│   └── src/                # Archivos fuente
│       ├── components/     # Componentes de React
│       ├── pages/          # Páginas de la aplicación
│       └── styles/         # Archivos de estilo
└── README.md
```

