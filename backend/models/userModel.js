const db = require('../config/db');

module.exports = {
    createUser: (userData, callback) => {
        sql = `INSERT INTO users (username, email, password ) VALUES (?, ?, ?)`;
        db.run(sql, userData, callback)            
    }
}