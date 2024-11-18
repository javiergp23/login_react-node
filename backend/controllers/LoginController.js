const userModel = require('../models/userModel');
const { jsonResponse } = require('../lib/jsonResponse');
const jwt = require('jsonwebtoken');

const loginUser = (req, res) => {
    const { email, password } = req.body;

    // Validación de los campos de entrada
    if (!email || !password) {
        return res.status(400).json(jsonResponse(400, {
            error: "Email and password are required"
        }));
    }

    // Buscar al usuario en la base de datos por email
    userModel.getUserByEmail(email, (err, user) => {
        if (err) {
            return res.status(500).json(jsonResponse(500, {
                error: "Internal server error"
            }));
        }

        if (!user) {
            return res.status(404).json(jsonResponse(404, {
                error: "User not found"
            }));
        }

        // Comparar la contraseña proporcionada con la almacenada en la base de datos
        userModel.comparePassword(password, user.password, (err, isMatch) => {
            if (err) {
                return res.status(500).json(jsonResponse(500, {
                    error: "User does not match"
                }));
            }

            if (!isMatch) {
                return res.status(401).json(jsonResponse(401, {
                    error: "Invalid password or email"
                }));
            }

            // Aquí podrías generar un token de autenticación si estás usando JWT, por ejemplo
            return res.status(200).json(jsonResponse(200, {
                message: "Login successful"
            }));
        });
    });
};

module.exports = loginUser;