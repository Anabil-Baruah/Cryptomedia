const router = require('express').Router();
const user = require('../models/users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { baseURL } = require('../auth')
const { auth2 } = require('../auth')
require('dotenv').config()
require('cookie-parser');
// const { OAuth2Client } = require('google-auth-library');

router.route('/')
    .get(auth2, (req, res) => {
        res.render('authPage')
    })
    .post(auth2, async (req, res) => {
        var username = req.body.username;
        var password = req.body.password;
        console.log(req.body)

        const userFound = await user.findOne({ username })


        if (userFound == null) {
            return res.status(400).json({
                type: 'error',
                message: {
                    header: 'Account does not exists',
                    desc: 'Sign up to continue'
                }
            })
        } else {
            const passMatch = await bcrypt.compare(password, userFound.password)

            if (passMatch) {
                var accessToken = jwt.sign({ email: userFound.email }, process.env.ACCESS_TOKEN_SECRET);

                res.cookie('jwt', accessToken, {
                    httpOnly: true
                })
                const result = await user.findOneAndUpdate({ username }, {
                    $set: {
                        accessToken
                    }
                })
                console.log(result)
                if (result !== null) {
                    res.json({
                        type: 'success',
                        message: {
                            header: 'Success !!',
                            desc: 'Logged in succesfully',
                            accessToken
                        }
                    })
                } else {
                    res.json({
                        type: 'error',
                        message: {
                            header: 'Error occured',
                            desc: 'Please try again later',
                        }
                    })
                }
            } else {
                res.json({
                    type: 'error',
                    message: {
                        header: 'Error logging in',
                        desc: 'Invalid credentials'
                    }
                })
            }
        }
    })


module.exports = router