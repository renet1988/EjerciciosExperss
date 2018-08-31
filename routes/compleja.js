/*var express = require('express');
var router = express.Router();
var resultado = 0;
var cadena = '';
/* GET users listing. */
/*router
  .get('/', function(req, res, next) {
    res.render('compleja', { title: 'Calculadora Compleja', resultado, cadena });
  })
  .post('/', function(req, res, next) {
    cadena = req.body.texto;
    resultado = evaluator(cadena);
    console.log(resultado);
    res.format({
      html() {
        res.location('');
        res.redirect('/compleja');
      },
      json() {
        res.json(resultado, cadena);
      }
    });
  });

module.exports = router;

/*function evaluator(cad) {
  const bool = cadEvaluator(cad);
  if (bool) {
    const aux = operacion(cad);
    return aux;
  } else {
    return 'La cadena ingresada contiene datos que no son numero u operadores aritmeticos';
  }
}*/
/*function evaluator(cad) {
  const bool = cadEvaluator(cad);
  if (bool) {
    const aux = eval(cad);
    return aux;
  } else {
    return 'La cadena ingresada contiene datos que no son numero u operadores aritmeticos';
  }
}

function cadEvaluator(cad) {
  var bool = true;
  var i = 0;
  while (bool === true && i < cad.length) {
    var aux = cad.charAt(i);
    if (!isNaN(aux) || isOperator(cad, i))
      bool = true;
    else
      bool = false;

    i++;
  }
  return bool;
}

function isOperator(op, indice) {
  var aux = op.charCodeAt(indice);
  var operadores = [32, 40, 41, 42, 43, 45, 46, 47, 91, 93, 123, 125];
  if (operadores.indexOf(aux) !== -1)
    return true;

  return false;
}

/*function operacion(cadOperar) {
  var aux = [];
  var cadAux = cadOperar.split(' ');
  var operadores = [32, 40, 41, 42, 43, 45, 46, 47, 91, 93, 123, 125];
  var j = 0;
  for (var i = 0; i <= cadOperar.length; i++) {
    if (operadores.indexOf(cadAux.charCodeAt(i)) < 0) {
      var dato = cadAux.substring(j, i);
      aux.push(dato);
      j = i;
    }
  }

  function opArray() {

  }*/
