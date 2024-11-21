const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./config/db.js');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/login', require('./routes/login'));
app.use('/api/refreshToken', require('./routes/refreshToken'));
app.use('/api/signout', require('./routes/signout'));
app.use('/api/signup', require('./routes/signup'));
app.use('/api/user', require('./routes/user'));
app.use('/api/tasks', require('./routes/tasks'));

app.get('/', (req, res) => {
  res.send('Server running on port 4001');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

console.log('ACCESS_TOKEN_SECRET:', process.env.ACCESS_TOKEN_SECRET);
console.log('REFRESH_TOKEN_SECRET:', process.env.REFRESH_TOKEN_SECRET);
