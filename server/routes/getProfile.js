const router = require('express').Router();
const User = require('../models/users');
const { auth } = require('../auth');

router.route('/')
    .get(auth, async (req, res) => {
        const userFound = req.user

        if (userFound == null) {
            return res.status(400).json({ message: 'User not found' })
        };

        res.status(200).json({ user: userFound })
    })

module.exports = router;