const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();

require('dotenv').config();

const port = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

app.use('/api/login', require('./routes/login'));
app.use('/api/refreshToken', require('./routes/refreshToken'));
app.use('/api/signout', require('./routes/signout'));
app.use('/api/signup', require('./routes/signup'));
app.use('/api/user', require('./routes/user'));
app.use('/api/todos', require('./routes/todos'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});