const assert = require('chai').assert;
const mongoose = require("mongoose");
const {checkSpotObjAndAdd}= require('../../db/spotOrm')
const {checkResevationObj} = require('../../db/reservationOrm')
const SpotSchdeule = require('../../models/spotSchedule');
const User = require('../../models/user')
const Spot = require('../../models/spot')
const { correctSpotObj, correctScheduleObj, correctReservationObj, falseReservationObj, singleDayScheduleObj, lateCorrectReservationObj } = require('../spotTestData')
mongoose.Promise = Promise

let testUser = new User()
let userId = testUser.save()
console.log("hello")

describe("spotOrm", () => {

    before(function(done) {
        mongoose.connect('mongodb://localhost/parkifyTestDatabase');
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function() {
            console.log('We are connected to test database!');
            userId.then(user => {
                userId = user._id
                correctSpotObj.owner = userId
                correctReservationObj.renter = userId
                lateCorrectReservationObj.renter = userId
            }).then(()=>{
                checkSpotObjAndAdd(correctSpotObj, correctScheduleObj)
                .then(spotObj => {
                    correctReservationObj.spot = spotObj._id
                    checkSpotObjAndAdd(correctSpotObj, singleDayScheduleObj).then(spotObj => {
                        lateCorrectReservationObj.spot = spotObj._id
                    })
                }).then(done, done)
            })
        });
    })


    it('should return a object that has success:true', (done) => {
        checkResevationObj(correctReservationObj).then(results => {
            assert.equal(results.success, true,  "return object has success:true")
        }).then(done, done)
    })

    it('should return object with errors array length of 3', done =>{
        checkResevationObj(falseReservationObj).then(results => {
            assert.equal(results.errors.length, 3,  "return object has errors legnth of 3")
        }).then(done, done)
    })

    it('should return object with errors array length of 3', done =>{
        checkResevationObj(lateCorrectReservationObj).then(results => {
            assert.equal(results.errors.length, 3,  "return object has errors legnth of 3")
        }).then(done, done)
    })

    after((done) => {
        Promise.all([
            User.remove(),
            Spot.remove(),
            SpotSchdeule.remove()
        ]).then(() => {
            mongoose.connection.close()
            done()
        })
    })
})