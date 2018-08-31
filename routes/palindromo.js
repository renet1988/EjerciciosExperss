var express = require('express');
var router = express.Router();

var resultado = false;
var textoRes = '';

/* GET users listing. */
router
  .get('/', function(req, res, next) {
    res.render('palindromo', { title: 'Palindromos', resultado, textoRes });
  })
  .post('/', function(req, res, next) {
    var texto = req.body.text;
    textoRes = texto;
    resultado = palindromo(texto);
    console.log(resultado, textoRes);
    res.format({
      html() {
        res.location('');
        res.redirect('/palindromo');
      },
      json() {
        res.json(resultado, textoRes);
      }
    });
  });

module.exports = router;

function palindromo(cadena) {
  var a1 = cadena.split('');
  var a2 = a1.slice();
  a1.reverse();
  return JSON.stringify(a1) == JSON.stringify(a2);
}
