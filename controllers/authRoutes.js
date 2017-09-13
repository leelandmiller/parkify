const passport = require('passport');
const express = require('express');
const router = express.Router();

const userOrm = require('../db/userOrm');

router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/fai'
    }), (req, res) => {
        res.redirect('/');
    });

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/api/currentuser', userOrm._fetchCurrentUser);

module.exports = router;
