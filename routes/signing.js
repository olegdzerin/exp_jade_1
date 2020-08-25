var express = require('express');
// const { render } = require('../app');

var router = express.Router();
// var formidable = require('formidable');

/* GET users listing. */
router.post('/', function(req, res, next) {
    // var form = new formidable.IncomingForm();
    // form.parse(req, function(err, fields, files){
    //     if(err) return res.redirect(303, '/error');
    //     console.log('received fields:');
    //     console.log(fields);
    //     console.log('received files:');
    //     console.log(files);
    //     console.log(req.params);
    console.log(req.body);
        res.redirect(303, '/thank-you');
});


module.exports = router;
