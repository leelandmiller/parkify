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
    getCurrentUser: function(req, res) {
        res.json(req.user);
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
    },
    addSpotIDToUser: function(_id, spotId) {
        User.update({ _id }, {
            $push: {
                posted_spots: spotId
            }
        }).catch(err => {
            console.log(`hey, ${err}`);
        });
    },
    addReservationIDToUser: function(_id, reservationId) {
        User.update({ _id }, {
            $push: {
                reservations: reservationId
            }
        }).catch(err => {
            console.log(`addResERR, ${err}`);
        });
    },
    getUserSpots: function(_id) {
        return User.findOne({ _id })
            .deepPopulate('posted_spots', 'posted_spots.schedule')
            .exec((err, populate) => {
                return populate;
            });
        });
    }
}
