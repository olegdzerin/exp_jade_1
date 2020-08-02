var express = require('express');
// const { render } = require('../app');
var express = require('express');
var router = express.Router();
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var now = new Date();
  res.render('loadFile',
  { year: now.getFullYear(), month: now.getMonth() }
  );
});

module.exports = router;
