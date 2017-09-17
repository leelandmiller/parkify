const assert = require('chai').assert;
const mongoose = require('mongoose');
const { userOrm, spotOrm, reservationOrm } = require('../../db');
const { User, Spot, SpotSchdeule, Reservation } = require('../../models');
const { correctUserObj, missingFieldsUserObj } = require('../userTestData');
const { correctSpotObj, correctScheduleObj, correctReservationObj } = require('../spotTestData');
mongoose.Promise = Promise;

let goodUser = new User(correctUserObj);
let userId = goodUser.save();
let badUser = new User(missingFieldsUserObj);

// let testSpot = new Spot(correctSpotObj);
// testSpot.save();
// let testSchedule = new SpotSchedule(correctScheduleObj);
// testSchedule.save();

describe('userOrm', () => {
    before(function(done) {
        mongoose.connect('mongodb://localhost/parkifyTestDatabase');
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function() {
            console.log('We are connected to test database!');
            userId.then(user => {
                userId = user._id;
                correctSpotObj.owner = userId;
            }).then(done, done);
        });
    });

    it('should save a user successfully', (done) => {
        userOrm.findOrCreate(goodUser).then(res => {
            // console.log(res);
            assert.equal(res.success, true, 'res.success is true');
        }).then(done,done);
    });

    it('should fail on saving user', (done) => {
        userOrm.findOrCreate(badUser).then(res => {
            assert.equal(res.success, false, 'res.success is false');
        }).then(done, done);
    });

    it('should populate a spot and schedule with a user', (done) => {
        spotOrm.checkSpotObjAndAdd(correctSpotObj, correctScheduleObj).then(newSpot => {
            userOrm.getUserSpots(userId).then(results => {

                results.posted_spots.forEach(spot => {

                    assert.exists(spot.owner, 'spot owner exists, populate passed');

                    assert.exists(spot.schedule.open_times, 'schedule open times exist, schedule populated successfully');
                });

            }).then(done, done);
        });
    });

    // it('should poopulate a user\'s reservations', (done) => {
    //
    // })

    after((done) => {
        Promise.all([
            User.remove(),
        ]).then(() => {
            mongoose.connection.close();
            done();
        });
    });
});
