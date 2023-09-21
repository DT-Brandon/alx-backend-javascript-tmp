const express = require('express');

const app = express();
const port = 1245;
const args = process.argv.slice(2);

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const fs = require('fs');
  const countStudents = require('./3-read_file_async');

  const database = args[0];
  try {
    const result = await countStudents(database);
    res.send(`This is the list of our students\n\n${result}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = app;
