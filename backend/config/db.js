const sqlite3 = require('sqlite3').verbose();
let sql;

//connect to database
const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) =>{
    if(err){
        return console.error(err.message);
    }
    console.log('Connected to the database');

    return db;
});

// sql = `CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, username, email, password)`;
// db.run(sql)

module.exports = db;
