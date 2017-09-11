const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");

require('./services/passport');

const PORT = process.env.PORT || 3001;
const app = express();

// required for passport
app.use(session({
    secret: 'r2socj6hecct3cpo',
    resave: false,
    saveUninitialized: true
})); // session secret

app.use(passport.initialize());
app.use(passport.session());

mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/parkifyTest");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});
