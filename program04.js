const express = require ('express');
const bodyParser  = require ('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));       //extended setado em falso para querystring

app.post('/form', (req, res) => {                       // metodo POST
  res.send(req.body.str.split('').reverse().join(''))   //enviando a string invertida
});

app.listen(process.argv[2]);