"use strict";

var _require = require('express'),
    Router = _require.Router;

var authController = require('../controllers/authController');

var router = Router();
router.get('/signup', authController.signup_get);
router.get('/login', authController.login_get);
router.post('/signup', authController.signup_post);
router.post('/login', authController.login_post); // // router.get('/logout', () =>{});

module.exports = router;