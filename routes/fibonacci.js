var express = require('express');
var router = express.Router();

//var fibo = new Array();
var fiboNumber = [0];
router
  .get('/', function(req, res, next) {
    res.render('fibonacci', { title: 'Fibonacci', fiboNumber });
  })
  .post('/', function(req, res, next) {
    var aux = req.body.number;
    fiboNumber = new Array(parseInt(aux));
    fiboNumber = fibonacci(parseInt(aux));
    console.log(fiboNumber);
    res.format({
      html() {
        res.location('');
        res.redirect('/fibonacci');
      },
      json() {
        res.json(fiboNumber);
      }
    });
  });

module.exports = router;

function fibAux(x) {
  let number = 0;
  if (x === 0 || x === 1)
    number = 1;
  else
    number = (fibAux(x - 1) + fibAux(x - 2));

  return number;
}

function fibonacci(x) {
  var fibo = [];
  while (x >= 0) {
    fibo.push(fibAux(x));
    x--;
  }
  fibo.reverse();
  return fibo;
}
