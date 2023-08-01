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
        var email = req.body.email;
        var password = req.body.password;


        const userFound = await user.findOne({ email })


        if (userFound == null) {
            return res.json({
                status: "error",
                message: "User does ont exist"
            });
        } else {
            const passMatch = await bcrypt.compare(password, userFound.password)

            if (passMatch) {
                var accessToken = jwt.sign({ email: email }, process.env.ACCESS_TOKEN_SECRET);

                // await user.findOneAndUpdate({ email }, {
                //     $set: {
                //         accessToken
                //     }
                // }, (err, data) => {
                //     if (!err) {
                //         res.cookie('jwt', accessToken)
                //         res.redirect('/')
                //     } else {
                //         res.redirect('/login')
                //     }
                // })
                res.cookie('jwt', accessToken, {
                    httpOnly: true
                })
                const result = await user.findOneAndUpdate({ email }, {
                    $set: {
                        accessToken
                    }
                })
                console.log(result)
                if (result !== null) {
                    res.redirect(`${baseURL}`)
                } else {
                    res.json({
                        status: "error",
                        message: "Invalid credentials"
                    });
                }
            } else {
                res.json({
                    "status": "error",
                    "message": "Invalid credentials"
                })
            }
        }
    })

module.exports = router