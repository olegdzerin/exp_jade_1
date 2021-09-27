var express = require('express');
// const { render } = require('../app');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.param('userw',function(req,res,next){
    console.log(req.params);
    console.log('jhj');
    next();
})
router.get('/:userw', function(req,res,next){
    console.log(req.params);
  
    res.send('params');
  //  next();
});
router.post('/', function(req, res, next) {
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    if(req.xhr || req.accepts('json,html')==='json'){
        // if there were an error, we would send { error: 'error description' }
        console.log('ip:'+ req.ip);
        res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>'])
        res.send({ success: true });
    } else {
        // if there were an error, we would redirect to an error page
        res.redirect(303, '/thank-you');
    }
});


module.exports = router;