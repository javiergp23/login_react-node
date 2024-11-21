const jwt = require('jsonwebtoken');
const { jsonResponse } = require('../lib/jsonResponse'); // Función para la respuesta estándar

// Middleware para verificar el access token
const verifyAccessToken = (req, res, next) => {
    const token = req.headers['authorization'];

    // Verificar que el token se haya enviado
    if (!token) {
        return res.status(403).json(jsonResponse(403, {
            error: "Access token is required"
        }));
    }

    // Eliminar el "Bearer " del token (si es que está presente)
    const accessToken = token.startsWith('Bearer ') ? token.slice(7, token.length) : token;

    // Verificar el token con la clave secreta
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json(jsonResponse(401, {
                error: "Invalid or expired token"
            }));
        }

        // Si es válido, agregar la información del usuario al objeto `req`
        req.user = decoded; // Aquí puedes guardar los datos del usuario decodificados
        next(); // Continuar con el siguiente middleware o controlador
    });
};

module.exports = verifyAccessToken;