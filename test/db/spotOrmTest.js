const assert = require('chai').assert;
const mongoose = require("mongoose");
const {deleteSpot, getSpotsFromPoint, checkSpotObjAndAdd, getSpotInfo,  getLatLngByAddress} = require('../../db/spotOrm');
const User = require('../../models/user');
const Spot = require('../../models/spot');
const SpotSchdeule = require('../../models/spotSchedule');
const { correctSpotObj, correctScheduleObj, falseSpotObj, falseScheduleObj } = require('../spotTestData')
const {correctUserObj} = require('../userTestData');
const {saveAllSpotLocations} = require('../spotLocationTestData');
mongoose.Promise = Promise

let testUser = new User(correctUserObj)
let userId = testUser.save()
let testSpotId;
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
                falseSpotObj.owner = userId
            }).then(()=>{
                saveAllSpotLocations().then(()=>done())
            })
        });
    })

    it('should return a object that has a _id', (done) => {
        checkSpotObjAndAdd(correctSpotObj, correctScheduleObj).then(results => {
            testSpotId = results.spot._id
            assert.exists(results.spot._id, "return object has a mongodb objectId")
        }).then(done, done)
    })

    it('should return a object with errors array length of three', done => {
        checkSpotObjAndAdd(falseSpotObj, correctScheduleObj).then(results => {
            assert.equal(results.errors.length, 1)
        }).then(done, done)
    })

    it('should return a object with errors array length of two', done => {
        checkSpotObjAndAdd(correctSpotObj, falseScheduleObj).then(results => {
            assert.equal(results.errors.length, 2)
        }).then(done, done)
    })

    it('should find object with a object id matching the search', done => {
        getSpotInfo(testSpotId).then(results => {
            assert.equal(results.spot[0]._id.toString(), testSpotId.toString(), 'should have save objectId')
        }).then(done, done)
    })

    it('should return 4 points from db' , done => {
        getSpotsFromPoint("University City, San Diego, CA, USA", 100000).then(data => {
            assert.equal(data.spots.length, 6, 'should return 3 spots')
        }).then(done, done)
    })

    it('should delete spot from db', done => {
        deleteSpot(testSpotId, userId).then(results => {
            assert.equal(results.success, true, 'should return object with success true')
        }).then(done, done)
    })

    it('should fail deleting spot', done => {
        deleteSpot("lookMaFakeData", userId).then(results => {
            assert.equal(results.success, false, 'should return object with success false')
        }).then(done, done)
    })

    it('should fail deleting spot', done => {
        deleteSpot(testSpotId, 'lookMaFakeData').then(results => {
            assert.equal(results.success, false, 'should return object with success false')
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