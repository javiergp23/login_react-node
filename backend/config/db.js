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

// sql = `CREATE TABLE refresh_tokens (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     token TEXT NOT NULL,
//     user_id INTEGER NOT NULL,
//     FOREIGN KEY (user_id) REFERENCES users(id)
// ); `;

// db.run(sql);


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


 
// tabla para el crud
// sql = ` CREATE TABLE tasks (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     title TEXT NOT NULL,
//     description TEXT NOT NULL,
//     due_date DATE,
//     status TEXT CHECK(status IN ('pendiente', 'en progreso', 'completada')),
//     tags TEXT
//   );`;
// db.run(sql);


//mostar datos de las tablas
// sql = `SELECT * FROM users`;
// db.all(sql,[], (err, rows) => {
//     if(err) return console.error(err.message);
//     rows.forEach((row) => console.log(row));
// })

//mostrar datos de la tabla de tareas
sql = `SELECT title, description, due_date, status, tags FROM tasks ORDER BY due_date ASC`;
db.all(sql,[], (err, rows) => {
    if(err) return console.error(err.message);
    rows.forEach((row) => console.log(row));
})

//Metodo para obtener los datos de las tareas en la tabla tasks
 const getTasksFromDb = () => {
    return new Promise((resolve, reject) => {
      const sql = `SELECT id, title, description, due_date, status, tags FROM tasks ORDER BY due_date ASC`;
      
      db.all(sql, [], (err, rows) => {
        if (err) {
          reject(err);  
        } else {
          resolve(rows);  
        }
      });
    });
  };

module.exports = {db, getTasksFromDb } ;
