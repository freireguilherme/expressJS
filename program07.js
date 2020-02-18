const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  const obj = req.query;
  res.send(obj)
})

app.listen(process.argv[2]);