const router = require('express').Router();
const User = require('../models/users');
const { auth } = require('../auth');

router.route('/')
    .get(auth, async (req, res) => {
        const user = req.user
        // console.log(user)
        if (user === null) {
            return res.status(400).json({ message: 'User not found' })
        }
        const userFound = await User.findOne({ accessToken: user.accessToken })
        const favourites = userFound.metadata.favourits


        if (favourites.length > 0) {
            return res.status(200).json({ favourites })
        } else {
            return res.status(200).json({ message: 'No favourites found' })
        }

    })
    .post(auth, async (req, res) => {
        const user = req.user
        if (user === null) {
            return res.status(400)
        }
        const userUpdated = await User.findOneAndUpdate({ accessToken: user.accessToken }, {
            $addToSet: { 'metadata.favourits': req.body.id }
        },
            { new: true, upsert: true })
        // console.log(userUpdated)
        if (userUpdated) {
            return res.status(200).json({ message: 'Added to favourites' })
        }
    })

module.exports = router;