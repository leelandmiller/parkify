const User = require('../models/user');
const axios = require('axios');

module.exports = {
    // _findOrCreateGoogleUser: function(req, res) {
    //     return User.findOne({
    //         where: {
    //             _id: req.user._id
    //         }
    //     }).then(user => {
    //         if (user) {
    //             res.json(user);
    //         } else {
    //             const newUser = new User(req.user)
    //             return newUser.save().then(newUserRes => {
    //                 res.redirect('/');
    //             }).catch(err => {
    //                 res.json({
    //                     success: false,
    //                     err
    //                 });
    //             });
    //         }
    //     });
    // },
    _fetchCurrentUser: function(req, res) {
        res.send(req.user);
    },
    findOrCreate: function(profile) {
        // find user w/id from passport strategy
        return User.findOne({ email: profile.email }).then(user => {
            // if user exists, return user
            if (user) {
                return user;
            } else {
                // else create new user, retrurn the new user
                const newUser = new User(profile);
                return newUser.save().then(newUserRes => {
                    return newUserRes;
                }).catch(err => {
                    return err;
                });
            }
        });
    },
    deconstructPassportProfile: function(profile) {
        // destructure profile given from Google OAuth
        const { id, displayName, provider, _json } = profile;
        let sessionInfo;
        if (provider === 'google') {
            sessionInfo = {
                provider,
                name: displayName,
                passport_id: id,
                email: _json.emails[0].value,
                photo: _json.image.url,
            }
        } else if (provider === 'facebook') {
            sessionInfo = {
                provider,
                name: displayName,
                passport_id: id,
                email: _json.email,
                photo: _json.picture.data.url
            }
        }

        return sessionInfo;
    }
}
