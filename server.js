const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const { apiRoutes, authRoutes } = require('./controllers');
const { User } = require('./models');
const secret = require('./config/keys').SESSION_SECRET;

require('./services/passport');

const {saveAllSpotLocations} = require('./test/spotLocationTestData');

const PORT = process.env.PORT || 3001;
const app = express();

// required for passport
app.set('trust proxy', 1);
app.use(session({
    secret,
    resave: false,
    saveUninitialized: true
})); // session secret

app.use(passport.initialize());
app.use(passport.session());

// serialized and deserialized.
passport.serializeUser(function(user, done) {
    done(null, user);
});

// deserialize user into session
passport.deserializeUser(function(user, done) {
    User.findOne( { _id: user.user._id }).then(dbUser => {
        done(null, dbUser);
    });
});

mongoose.Promise = Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/parkifyTest", {
    useMongoClient: true
})
//.then(() => saveAllSpotLocations());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// require('./controllers/authRoutes')(app);
app.use('/api', apiRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});
