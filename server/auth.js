const jwt = require('jsonwebtoken');
const register = require("./models/users");
require('dotenv').config()


const auth = async (req, res, next) => {
    try {
        let token = req.headers.authorization;
        // console.log(token)
        token = token.replace('Bearer ', '')
        const verifyUser = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await register.findOne({ email: verifyUser.email });
        if (verifyUser == null)
            return res.status(400).json({
                type: 'error',
                message: {
                    header: 'Account does not exists',
                    desc: 'Sign up to continue'
                }
            })
        req.user = user;
        req.accessToken = token
        next();
    } catch (error) {
        console.log("Missing token")
        next()
    }
}

module.exports = { auth };