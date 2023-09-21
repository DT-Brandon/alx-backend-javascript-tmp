const express = require('express');
const fs = require('fs');
const countStudents = require('./3-read_file_async.js');

const args = process.argv.slice(2);
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const database = args[0];
    const result = await countStudents(database);
    res.send(`<strong>This is the list of our students\n${result}</strong>`);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
