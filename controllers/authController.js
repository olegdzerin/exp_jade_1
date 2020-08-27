const User = require('../models/User');

//hanfle erros
const handleErrors = (err) => {
        console.log(err.message);
       // console.log(err._message);
        console.log(err.code);
        // dublicate error code
        if (err.code === 11000) {
            errors.email = 'this email is already registered';
            return errors;
        }
      
        let error = {
            email: '',
            password: ''
        };
        // validation errors
        if (err.message.includes('user validation failed')) {
        //    console.log(Object.values(err.errors.email.properties.message));
            Object.values(err.errors).forEach(({
                    properties
                }) => {
                    error[properties.path] = properties.message;
                })
                // err.errors.email ? 
                // error.email = err.errors.email.properties.message:error.email = '';

                // err.errors.password ? 
                // error.password = err.errors.password.properties.message:error.password = '';
                // console.log(error.email);
                // console.log(error.password);
               

            }
         
            return error;
        }


            module.exports.signup_get = (req, res) => {
                res.render('signup');
            }

            module.exports.login_get = (req, res) => {
                res.render('login');
            }

            module.exports.signup_post = async (req, res) => {
                const {
                    email,
                    password
                } = req.body;
                try {
                    const user = await User.create({
                        email,
                        password
                    })
                    res.status(201).json(user);
                } catch (err) {
                    const errros = handleErrors(err);
                    //  handleErrors(err);

                    //   res.status(400).send('error,user not created')
                    res.status(400).json(errros)
                }
            }

            module.exports.login_post = async (req, res) => {
                const {
                    email,
                    password
                } = req.body;
                console.log(email, password);
                res.send("user login");
            }