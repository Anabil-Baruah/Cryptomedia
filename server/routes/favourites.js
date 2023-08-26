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
        const coinId = req.body.id
        if (user === null) {
            return res.status(400)
        }
        if (user.metadata.favourits.includes(coinId)) {
            // console.log(`Value '${coinId}' already exists in favourits.`);
            return res.status(200).json({ message: 'Coin already added' });
        }
        user.metadata.favourits.push(coinId);
        const coinStatus = await user.save();
        if (coinStatus) {
            return res.status(200).json({ message: 'Coin added' });
        }else{
            return res.status(400).json({ message: 'Coin not added cannot be added'});
        }
    })


router.route('/:id')
    .delete(auth, async (req, res) => {
        const user = req.user
        const coinId = req.params.id
        if (user === null) {
            return res.status(400)
        }
        if (!user.metadata.favourits.includes(coinId)) {
            // console.log(`Value '${coinId}' already exists in favourits.`);
            return res.status(200).json({ message: 'Coin not found' });
        }
        const index = user.metadata.favourits.indexOf(coinId);
        // console.log(index)
        if (index > -1) {
            user.metadata.favourits.splice(index, 1);
            // return res.status(200).json({ message: 'Coin removed' });
        }
        await user.save();
    })

module.exports = router;