var express = require('express');
// const { render } = require('../app');
var express = require('express');
const { locals } = require('../app');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
  res.render('users', {title: res.locals.user.email});
});

module.exports = router;
