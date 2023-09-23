var express = require('express');
var router = express.Router();

/* GET contacto page. */
/*router.get('/contacto', function(req, res, next) {
  res.send('Hola Mundo! soy la pagina de CONTACTO');
});*/

router.get('/', function(req, res, next) {
    res.render('index');
  });

module.exports = router;