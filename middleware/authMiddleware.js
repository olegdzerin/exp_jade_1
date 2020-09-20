const jwt = require('jsonwebtoken');
const User = require('../models/User');


const requireAuth = (req, res, next) => {

    const token = req.cookies.jwt;
    console.log(token);
    //check json web token exist & is verified
    if (token) {
        jwt.verify(token, 'net ninja secret', (err, decodetToken) => {
            if (err) {
                console.log(err.message)
                res.redirect('/login')
            } else {
                console.log(decodetToken);
                next();
            }
        })
    } else {
        res.redirect('/login')
    }
}
//check user
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, 'net ninja secret', async (err, decodetToken) => {
            if (err) {
                console.log(err.message);
                res.locals.user = null;
                next();
            } else {
                console.log(decodetToken);
                let user = await User.findById(decodetToken.id);
                res.locals.user = user;
                console.log(res.locals.user);
                next();
            }
        })
    } else {
        res.locals.user = null;
        next();
    }
}
module.exports = {
    requireAuth,
    checkUser
};