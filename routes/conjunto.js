var express = require('express');
var router = express.Router();
var resUnion = new Set();
var resIntersect = new Set();
var resDiference = new Set();
var arrayA = [];
var arrayB = [];
/* GET users listing. */
router
  .get('/', function(req, res, next) {
    res.render('conjunto', { title: 'Conjuntos', resUnion, resIntersect, resDiference, arrayA, arrayB});
  })
  .post('/', function(req, res, next) {
    var A = req.body.conjuntoA;
    var B = req.body.conjuntoB;
    arrayA = dividirCadena(A, ',');
    arrayB = dividirCadena(B, ',');
    resUnion = union(arrayA, arrayB);
    resIntersect = intersect(arrayA, arrayB);
    resDiference = diference(arrayA, arrayB);
    console.log(resUnion, resIntersect, resDiference, arrayA, arrayB);
    console.log(typeof (resUnion));
    res.format({
      html() {
        res.location('');
        res.redirect('/conjunto');
      },
      json() {
        res.json(resUnion, resIntersect, resDiference, arrayA, arrayB);
      }
    });
  });

module.exports = router;

function union(a, b) {
  return [...a, ...b];
}

function intersect(a, b) {
  return a.filter(x => b.includes(x));
}

function diference(a, b) {
  return [...a.filter(x => !b.includes(x)), ...b.filter(x => !a.includes(x))];
}

function dividirCadena(cadenaADividir, separador) {
  var arrayDeCadenas = cadenaADividir.split(separador);
  var cad = [];
  for (var i = 0; i < arrayDeCadenas.length; i++)
    cad.push(parseInt(arrayDeCadenas[i]));

  return cad;
}
