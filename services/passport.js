const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_KEYS = require('../config/keys').GOOGLE_KEYS;
const User = require('../models/user');
const userOrm = require('../db/userOrm');

// set up passport to use the GoogleStrategy
passport.use(new GoogleStrategy({
    clientID: GOOGLE_KEYS.clientID,
    clientSecret: GOOGLE_KEYS.clientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {

    // destructure profile given from Google OAuth
    const { id, displayName, provider, _json } = profile;
    const sessionInfo = {
        provider,
        name: displayName,
        passport_id: id,
        email: _json.emails[0].value,
        photo: _json.image.url,
    }

    // call findOrCreate method from userORM
    userOrm.findOrCreate(sessionInfo).then(user => {
        done(null, user);
    }).catch(err => {
        console.log('do something with the error')
    });
}));
