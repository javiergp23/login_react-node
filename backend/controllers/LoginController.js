const userModel = require('../models/userModel');
const db = require('../config/db');
const { jsonResponse } = require('../lib/jsonResponse');
const jwt = require('jsonwebtoken');

const generateAccessToken = (payload) => jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
const generateRefreshToken = (payload) => jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

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

            // Generar tokens
            const accessToken = generateAccessToken({ id: user.id, email: user.email });
            const refreshToken = generateRefreshToken({ id: user.id, email: user.email });

            // Guardar el refresh token en la base de datos
            const query = `INSERT INTO refresh_tokens (token, user_id) VALUES (?, ?)`;
            db.run(query, [refreshToken, user.id], (dbErr) => {
                if (dbErr) {
                    return res.status(500).json(jsonResponse(500, {
                        error: "Error saving refresh token"
                    }));
                }
                // Responder con los tokens
                return res.status(200).json(jsonResponse(200, {
                    message: "Login successful",
                    accessToken,
                    refreshToken
                }));
            });

        });
        

    });
};

module.exports = loginUser;