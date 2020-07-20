var express = require('express');
var router = express.Router();

// app.engine('handlebars', handlebars.engine);
// app.set('view engine', 'handlebars');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
