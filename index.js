const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
require('dotenv').config();

const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString);
const database = mongoose.connection

const app = express()
const port = 3000;

database.on('error', (error) => {
  console.log(error)
});

database.once('connected', () => { // will only run once (1x) and once it is connected
  console.log('Database Connected');
})

app.use('/api', routes)

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))