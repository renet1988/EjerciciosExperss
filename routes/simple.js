var express = require('express');
var router = express.Router();
var resultado = 0;
/* GET users listing. */
router
  .get('/', function(req, res, next) {
    res.render('simple', { title: 'Calculadora Simple', resultado });
  })
  .post('/', function(req, res, next) {
    var aux1 = req.body.text1;
    var aux2 = req.body.text2;
    var aux3 = req.body.text3;
    resultado = operation(parseInt(aux1), parseInt(aux3), aux2);
    console.log(resultado);
    res.format({
      html() {
        res.location('');
        res.redirect('/simple');
      },
      json() {
        res.json(resultado);
      }
    });
  });

module.exports = router;

function operation(num1, num2, op) {
  switch (op) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;

  }
}
