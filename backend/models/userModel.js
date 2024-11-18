const db = require('../config/db');
const SignupController = require('../controllers/SignupController');
const bcrypt = require('bcrypt');

module.exports = {
    createUser: (userData, callback) => {
        const [username, email, password] = userData;
       
        const checkSql = `SELECT * FROM users WHERE username = ? OR email = ?`;
        db.get(checkSql, [username, email], (err, row) => {
            if (err) {
                console.error("Error al verificar la existencia del usuario:", err.message);
                return callback(err);
            }
            if (row) {
                // Si se encuentra un usuario con el mismo nombre o correo
                return callback(new Error('user already exists'));
            }

            bcrypt.hash(password, 10, (err, hashedPassword) => { 
                if (err) {
                    console.error("Error al encriptar la contraseña:", err.message);
                    return callback(err);
                }

            const sql = `INSERT INTO users (username, email, password ) VALUES (?, ?, ?)`;
            db.run(sql,  [username, email, hashedPassword], (err) => {
                if(err){
                    console.error(err.message);
                    return callback(err);
                }
                callback(null);
            })            
            })
        })
    },

     // Obtener usuario por email (para login)
     getUserByEmail: (email, callback) => {
        const sql = `SELECT * FROM users WHERE email = ?`;
        db.get(sql, [email], (err, user) => {
            if (err) {
                console.error("Error al obtener el usuario:", err.message);
                return callback(err);
            }
            callback(null, user);
        });
    },

    // Comparar contraseñas
    comparePassword: (password, hashedPassword, callback) => {
        bcrypt.compare(password, hashedPassword, (err, isMatch) => {
            if (err) {
                return callback(err);
            }
            callback(null, isMatch);
        });
    }
}