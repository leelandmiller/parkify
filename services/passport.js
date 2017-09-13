const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_KEYS = require('../config/keys').GOOGLE_KEYS;
const User = require('../models/user');
const userOrm = require('../db/userOrm');

passport.use(new GoogleStrategy({
    clientID: GOOGLE_KEYS.clientID,
    clientSecret: GOOGLE_KEYS.clientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log('PROFILE-----------')

    const { id, displayName, provider, _json } = profile;
    const sessionInfo = {
        provider,
        name: displayName,
        passport_id: id,
        email: _json.emails[0].value,
        photo: _json.image.url,
    }

    userOrm.findOrCreate(sessionInfo).then(user => {
        console.log(user);
        return done(null, user);
    });
}));
