const router = require('express').Router();
const user = require('../models/users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { baseURL } = require('../auth')
const { auth2 } = require('../auth')
require('dotenv').config()
require('cookie-parser');

router.route('/')
    .post(async (req, res) => {
        console.log(req.body)

        const retypePassword = req.body.retypePassword
        const password = req.body.password
        const username = req.body.username
        const email = req.body.email

        retypePassword !== password ? res.status(400).send('Password dosent matches') : null;

        const userExist = await user.findOne({ username })
        const emailExist = await user.findOne({ email })

        if (userExist || emailExist) {
            return res.json({
                type: 'warning',
                message: {
                    header: 'Account already exists',
                    desc: 'Sign in to continue'
                }
            })
        }
        const newUser = new user({
            username: username,
            email: email,
            password: req.body.password,
        })
        //generating token
        const token = await newUser.generateAuthToken();
        newUser.accessToken = token

        res.cookie("jwt", token, {
            httpOnly: true
        });
        const result = await newUser.save()

        if (result) {

            // req.session.message = {
            //     message: 'user inserted succesfully',
            //     type: 'success'
            // }
            res.status(200).json({
                type: 'success',
                message: {
                    header: 'Welcome',
                    desc: 'Account created succesfully',
                    accessToken: token
                }
            })
        }
        else {
            res.json({
                type: 'error',
                message: {
                    header: 'Sorry !!!',
                    desc: 'Some error occured please try later'
                }
            })
        }
    })


module.exports = router