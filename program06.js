const express = require('express');
const app = express();



app.put('/message/:id', (req, res) => {         // metodo put
  const id  = req.params.id;                    // o id da URL na const id

  const crypto = require('crypto')              // como mostrado no enuciado do exercicio
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex');

  res.send(crypto);
})

app.listen(process.argv[2])
