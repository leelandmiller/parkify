const router = require('express').Router();
const {checkSpotObjAndAdd, getSpotInfo} = require('../db/spotOrm');
const {checkResevationObj, getAllReservations, finalReservationConflicts} = require('../db/reservationOrm');

router.post("/spot", (req, res)=>{
    const spotObj = req.body.spotObj
    const spotSchedule = req.body.spotScheduleObj
    spotObj.user = req.user._id
    checkSpotObjAndAdd(spotObj, spotScheduleObj).then(result =>{
        res.json(result);
    });
});

router.post('/reservation', (req, res) => {
    const reservationObj = req.body.reservationObj
    checkResevationObj(reservationObj).then(results => {
        res.json(results);
    });

});

router.get('/spot', (req, res)=>{
    if(req.body.spotId){
        getSpotInfo(req.body.spotId).then(results => {
            res.json(results)
        })
    }
})

router.get('/reservation', (req, res)=>{
    getAllReservations(req.body.spotId).then(results => {
        res.json(results)
    })
})

module.exports = router