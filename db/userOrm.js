const User = require('../models/user');
const axios = require('axios');

module.exports = {
    _findOrCreateGoogleUser: function(req, res) {
        return User.findOne({
            where: {
                _id: req.user._id
            }
        }).then(user => {
            if (user) {
                res.json(user);
            } else {
                const newUser = new User(req.user)
                return newUser.save().then(newUserRes => {
                    res.redirect('/');
                }).catch(err => {
                    res.json({
                        success: false,
                        err
                    });
                });
            }
        });
    },
    _fetchCurrentUser: function(req, res) {
        res.send(req.user);
    },
    findOrCreate: function(profile) {
        return User.findOne({
            where: {
                passport_id: profile.id
            }
        }).then(user => {
            if (user) {
                return user;
            } else {
                const newUser = new User(profile);
                return newUser.save().then(newUserRes => {
                    return newUserRes;
                }).catch(err => {
                    // res.json({
                    //     success: false,
                    //     err
                    // });
                });
            }
        });
    }
}
