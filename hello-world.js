const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const mongoString = process.env.DATABASE_URL
mongoose.Connection(mongoString);
const database = mongoose.connection

const app = express()
const port = 3000;

const routes = require('./routes/routes');
const route = require('./routes/routes');

database.on('error', (error) => {
  console.log(error)
});

database.once('connected', () => { // will only run once (1x) and once it is connected
  console.log('Database Connected');
})

app.get('/', (req, res) => {
  res.send('Hello World, from express');
});

app.use('/api', routes)

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))