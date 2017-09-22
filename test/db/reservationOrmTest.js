const assert = require('chai').assert;
const mongoose = require("mongoose");
const {checkSpotObjAndAdd}= require('../../db/spotOrm')
const {checkResevationObj, finalReservationConflicts} = require('../../db/reservationOrm')
const SpotSchdeule = require('../../models/spotSchedule');
const Reservation = require('../../models/reservation')
const User = require('../../models/user');
const Spot = require('../../models/spot');
const { correctSpotObj, correctScheduleObj, correctReservationObj, falseReservationObj, singleDayScheduleObj, lateCorrectReservationObj } = require('../spotTestData')
const {correctUserObj} = require('../userTestData');
mongoose.Promise = Promise;

let testUser = new User(correctUserObj);
let userId = testUser.save();
let testRes;
let testSpotId;
describe("spotOrm", () => {

    before(function(done) {
        mongoose.connect('mongodb://localhost/parkifyTestDatabase');
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function() {
            console.log('We are connected to test database!');
            userId.then(user => {
                userId = user._id;
                correctSpotObj.owner = userId;
                correctReservationObj.renter = userId;
                lateCorrectReservationObj.renter = userId;
            }).then(()=>{
                checkSpotObjAndAdd(correctSpotObj, correctScheduleObj)
                .then(spotObj => {
                    correctReservationObj.spot = spotObj.spot._id;
                    testSpotId = spotObj.spot._id;
                    checkSpotObjAndAdd(correctSpotObj, singleDayScheduleObj).then(spotObj => {
                        lateCorrectReservationObj.spot = spotObj.spot._id;
                    }).then(done, done)
                })
            })
        });
    })


    it('checkResevationObj: should return a object that has success:true', (done) => {
        checkResevationObj(correctReservationObj).then(results => {
            assert.equal(results.success, true,  "return object has success:true")
            testRes = results._id
        }).then(done, done)
    })

    it('checkResevationObj: should return object with errors array length of 3', done =>{
        checkResevationObj(falseReservationObj).then(results => {
            assert.equal(results.errors.length, 3,  "return object has errors legnth of 3")
        }).then(done, done)
    })

    it('checkResevationObj: should return object with errors array length of 3', done =>{
        checkResevationObj(lateCorrectReservationObj).then(results => {
            assert.equal(results.errors.length, 3,  "return object has errors legnth of 3")
        }).then(done, done)
    })

   it('finalReservationConflicts: should return a object with success:true', done => {
        finalReservationConflicts(testRes, testSpotId).then(results =>{
            assert.equal(results.success, true)
        }).then(done, done)
   })

   it('finalReservationConflicts: should return a object with success:false', done=>{
        const testReservation = new Reservation(correctReservationObj)
        testReservation.save().then(newResObj => {
            finalReservationConflicts(newResObj._id, testSpotId).then(results => {
                assert.equal(results.success, false)
            }).then(()=>done())
        })
   })

    after((done) => {
        Promise.all([
            User.remove(),
            Spot.remove(),
            SpotSchdeule.remove(),
            Reservation.remove()
        ]).then(() => {
            mongoose.connection.close();
            done();
        });
    });
});