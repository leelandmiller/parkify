const User = require('../models/user');
const axios = require('axios');
const bcrypt = require('bcrypt');

module.exports = {
    getCurrentUser: function(req, res) {
        res.json(req.user);
    },
    findOrCreate: function(profile) {
        // find user w/id from passport strategy
        return User.findOne({ email: profile.email }).then(user => {
            // if user exists, return user
            if (user) {
                return {
                    success: true,
                    user
                };
            } else {
                // else create new user, retrurn the new user
                const newUser = new User(profile);
                return newUser.save().then(newUserRes => {
                    return {
                        success: true,
                        newUserRes
                    };
                }).catch(err => {
                    return {
                        success: false,
                        func: 'findOrCreate',
                        err
                    };
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
            console.log(`addSpotIdToUserERR, ${err}`);
        });
    },
    addReservationIDToUser: function(_id, reservationId) {
        User.update({ _id }, {
            $push: {
                reservations: reservationId
            }
        }).catch(err => {
            console.log(`addResToUserERR, ${err}`);
        });
    },
    addVehicleIDToUser: function(_id, vehicleId) {
        User.update({ _id }, {
            $set: {
                vehicle: vehicleId
            }
        }).catch(err => {
            console.log(`addVehIDToUserERR, ${err}`);
        });
    },
    getUserSpots: function(_id) {
        return User.findOne({ _id })
            .deepPopulate([
                'posted_spots',
                'posted_spots.schedule'
            ])
            .exec((err, populate) => {
                //TODO: destructure userObj, only return spot/schedule info
                return populate;
            }
        );
    },
    getUserReservations: function(_id) {
        return User.findOne({ _id })
            .deepPopulate([
                'reservations',
                'reservations.spot'
            ])
            .exec((err, populate) => {

                return populate;
            }
        );
    },
    getUserVehicle: function(_id) {
        return User.findOne({ _id })
            .populate('vehicle')
            .exec((err, populate) => {
                return populate;
            }
        );
    },
    getUserProfileInfo: function(_id) {
        return User.findOne({ _id }).then(user => {
            const userObj = { name, email };

            return {
                success: true,
                userObj
            }
        }).catch(err => {
            return {
                success: false,
                err
            }
        });
    },
    addNewUser: function(userObj) {
        return bcrypt.hash(userObj.password, 10).then(hash => {
            // Store hash in your password DB.
            userObj.pw_hash = hash;
            const user = new User(userObj);

            return user.save().then(savedUser => {
                return savedUser;
            });
        });
    }
}
