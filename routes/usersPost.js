var express = require('express');
// const { render } = require('../app');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/site', function(req, res, next) {
  console.log(req.body);
//  res.send('respond with a resource');
  // res.render('usersPost', {title: 'post all ready'},
  // {email:'req.body.email'}, {name:'req.body.name'});
 console.log('req.query'+req.query.email);
 console.log('req.query.form'+req.query.form);
  res.render('usersPost',{title: 
    {title:'post all ready',email:req.body.email,name:req.body.name}}
  );
  //res.render('usersPost');
//  res.send("i send respons");
});


module.exports = router;
