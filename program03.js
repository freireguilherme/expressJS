// para conseguir funcionar, foi preciso instalar o modulo pug
const express = require('express')
const app = express()

app.set('views', process.argv[3]);                          // diretorio das views da aplicação, no caso, index.pug
app.set('view engine', 'pug');                              // a extenção pug agora é a engine padrao


app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2])
