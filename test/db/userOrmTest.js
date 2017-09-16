const assert = require('chai').assert;
const mongoose = require('mongoose');
const userOrm = require('../../db/userOrm');
const User = require('../../models/user');
const Spot = require('../../models/spot');
const Reservation = require('../../models/reservation');
const { correctUserObj, missingFieldsUserObj } = require('../userTestData');
const { singleDayScheduleObj, correctReservationObj } = require('../spotTestData');
mongoose.Promise = Promise;

// let wrongUser = new User(missingFieldsUserObj);
// let goodUser = new User(correctUserObj);

describe('userOrm', () => {
    before(function(done) {
        mongoose.connect('mongodb://localhost/parkifyTestDatabase');
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function() {
            console.log('We are connected to test database!');
            done();
        });
    });

    it('should save a user successfully', (done) => {
        userOrm._findOrCreateGoogleUser({
            user: correctUserObj
        }).then(res => {
            console.log(res);
            assert.equal(res.success, true, 'res.success is true');
        }).then(done,done);
    });

    it('should fail on saving user', (done) => {
        userOrm._findOrCreateGoogleUser({
            user: missingFieldsUserObj
        }).then(res => {
            assert.equal(res.success, false, 'res.success is false');
        }).then(done, done);
    });

    it('should populate a spot and schedule with a user', (done) => {
        let spot = new Spot(singleDayScheduleObj);
        Spot.save(spot).then(newSpot => {
            
        })
        userOrm.getUserSpots().then(spots => {

        })
    })

    after((done) => {
        Promise.all([
            User.remove(),
        ]).then(() => {
            mongoose.connection.close();
            done();
        });
    });
});
