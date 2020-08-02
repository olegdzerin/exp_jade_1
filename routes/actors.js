var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/american', function (req, res, next) {
    console.log(res.locals.anyone);
     res.render('actors', {title:"actor"});
  
});

module.exports = router;