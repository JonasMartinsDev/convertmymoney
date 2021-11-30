const express = require('express');
const app = express();
const path = require('path');

const apiBCB = require('./lib/api.bcb');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const convert = require('./lib/convert');

app.get('/', async (req, res) => {
  const cotacao = await apiBCB.getCotacao();
  res.render('home', {
    cotacao,
  });
});

app.get('/cotacao', (req, res) => {
  const { cotacao, quantidade } = req.query;
  if (cotacao && quantidade) {
    const conversao = convert.convert(cotacao, quantidade);
    res.render('cotacao', {
      error: false,
      conversao: convert.toMoney(conversao),
      quantidade: convert.toMoney(quantidade),
      cotacao: convert.toMoney(cotacao),
    });
  } else {
    res.render('cotacao', {
      error: 'Valores inválidos',
    });
  }
});

app.listen(3000, (err) => {
  if (err) {
    console.log('não foi possivel iniciar');
  } else {
    console.log('ConvertMyMoney esta online');
  }
});
