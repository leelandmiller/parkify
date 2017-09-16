const router = require('express').Router();
const {checkSpotObjAndAdd, getSpotInfo, checkAndUpdateSpotSchedule, deleteSpot} = require('../db/spotOrm');
const {checkResevationObj, getAllReservations, finalReservationConflicts} = require('../db/reservationOrm');
const {getUserSpots} = require('../db/userOrm');

// update spot schedule
router.put('/spot/schedule', (req, res) => {
    const spotId = req.body.spotId;
    const newSchedule = req.body.schedule;
    checkAndUpdateSpotSchedule(spotId, newSchedule).then(results => {
        res.json(results);
    });
});

// add new spot
router.post("/spot", (req, res) => {
    const spotObj = req.body.spotObj
    const spotSchedule = req.body.spotScheduleObj
    spotObj.owner = req.user._id
    checkSpotObjAndAdd(spotObj, spotScheduleObj).then(result =>{
        res.json(result);
    });
});

// add new reservation
router.post('/reservation', (req, res) => {
    const reservationObj = req.body.reservationObj
    checkResevationObj(reservationObj).then(results => {
        res.json(results);
    });
});

router.get('/spot', (req, res) => {
    //add logic for getting spots by location [lng, lat]
    if(req.body.spotId){
        getSpotInfo(req.body.spotId).then(results => {
            res.json(results);
        });
    }
});

// delete a spot
router.delete('/spot', (req, res) => {
    const userId = req.user._id;
    const spotId = req.body.spotId;
    deleteSpot(spotId, userId).then(results => {
        res.json(results)
    });
});

// get all reservations for a spot
router.get('/reservation', (req, res) => {
    getAllReservations(req.body.spotId).then(results => {
        res.json(results);
    });
});

// add a reservation
router.post('/reservation', (req, res) => {
    const reservationObj = req.body.reservationObj
    reservationObj.retner = req.user._id
    checkResevationObj(reservationObj).then(results => {
        res.json(results);
    });
});

//get users spots
router.get('/myspots', (req, res) => {

});
//get users reservation
//get all users info

module.exports = router
