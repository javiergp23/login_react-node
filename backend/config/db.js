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


//insertar datos en la tabla
//Inser data into table
// sql = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
// db.run(sql,["javiergp23", "javier@gmail.com", "q1w2e3"], 
//     (err) =>{
//         if(err){
//             return console.error(err.message);
//         }
//         console.log('Inserted data into the table');
//     }
// )



//mostar datos de las tablas
sql = `SELECT * FROM users`;
db.all(sql,[], (err, rows) => {
    if(err) return console.error(err.message);
    rows.forEach((row) => console.log(row));
})

module.exports = db;
