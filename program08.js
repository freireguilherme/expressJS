const express = require('express');
const app = express();

app.get('/books', (req, res) =>{
  fs = require('fs')
    .readFile(process.argv[3], (e, data)=>{
      if(e){
        return res.sendStatus(500);         // se erro, status 500
      }

      try{
        obj = JSON.parse(data);             // obj recebe o conteudo de data no formato json
      } catch (e){                          // novamente, se error
        res.sendStatus(500);
      }
      res.json(obj);
    })
})
app.listen(process.argv[2]);