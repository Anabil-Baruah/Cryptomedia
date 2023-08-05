const router = require('express').Router();
const User = require('../models/users');
const { auth } = require('../auth');

router.route('/')
    .get(auth, (req, res) => {
        const user = req.user
        if (user === null) {
            return res.status(400).json({
                type: 'error',
                message: {
                    header: 'Unauthorized',
                    desc: 'Sign up to continue'
                }
            });
        }
        res.status(200).json({
            name: user.name,
            username: user.username,
            email: user.email,
            tagline: user.tagline,
            linkedin: user.metadata.socialLinks.linkedin,
            facebook: user.metadata.socialLinks.facebook,
            instagram: user.metadata.socialLinks.instagram,
            twitter: user.metadata.socialLinks.twitter,
            website: user.metadata.socialLinks.website,
            location: user.metadata.socialLinks.location,
            profileImg: user.metadata.socialLinks.profileImg
        })
    })
    .post(auth, async (req, res) => {

        const user = req.user
        console.log(req.body)
        if (user === null) {
            return res.status(400).json({
                type: 'error',
                message: {
                    header: 'Unauthorized',
                    desc: 'Sign up to continue'
                }
            });
        }

        const userUpdated = await User.updateOne({ accessToken: user.accessToken }, {
            $set: {
                name: req.body?.name,
                username: req.body?.username,
                tagline: req.body?.tagline,
                email: req.body?.email,
                metadata: {
                    socialLinks: {
                        facebook: req.body?.facebook,
                        instagram: req.body?.instagram,
                        linkedin: req.body?.linkedin,
                        location: req.body?.location,
                        twitter: req.body?.twitter,
                        website: req.body?.website,
                        tagline: req.body?.tagline,
                        profileImg: req.body?.profileImg
                    }
                }
            }
        })

        if (userUpdated) {
            res.status(200).json({
                type: 'success',
                message: {
                    header: 'Success !!',
                    desc: 'Profile updated succesfully',
                }
            })
        } else {
            res.status(400).json({
                type: 'error',
                message: {
                    header: 'Server error',
                    desc: 'Please try again later',
                }
            })
        }
    })

module.exports = router;