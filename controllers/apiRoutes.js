const router = require('express').Router();
const {checkSpotObjAndAdd, getSpotInfo, checkAndUpdateSpotSchedule, deleteSpot, getSpotsFromPoint} = require('../db/spotOrm');
const {checkResevationObj, getAllReservations, finalReservationConflicts} = require('../db/reservationOrm');
const {getUserSpots, getUserReservations} = require('../db/userOrm');
const { addVehicle, updateVehicle, removeVehicle, getUserVehicle } = require('../db/vehicleOrm');

//get spot based on a location and search radius
router.post('/spot/loc', (req, res)=>{
    const loc = req.body.location;
    const distance = req.body.distance;
    console.log("API ROUTES", req.body);
    getSpotsFromPoint(loc, distance).then(results => {
        res.json(results)
    })
})

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
    checkSpotObjAndAdd(spotObj, spotSchedule).then(result =>{
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


//get a spots info based on spotId
router.get('/spot/:spotId', (req, res) => {
        getSpotInfo(req.params.spotId).then(results => {
            res.json(results);
        });

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
router.get('/reservation/:spotId', (req, res) => {
    getAllReservations(req.params.spotId).then(results => {
        res.json(results);
    });
});

// add a reservation
router.post('/reservation', (req, res) => {
    const reservationObj = req.body.reservationObj;
    // reservationObj.renter = req.user._id;

    checkResevationObj(reservationObj).then(results => {
        res.json(results);
    });
});

//get users spots
router.get('/myspots/:id', (req, res) => {
    const _id = req.params.id;

    getUserSpots(_id).then(userSpots => {
        res.json(userSpots)
    })
});
//get users reservation
router.get('/myreservations/:id',  (req, res) => {
    const _id = req.params.id;

    getUserReservations(_id).then(userReservations => {
        res.json(userReservations)
    })
})
//get all users info


//**Vehicle Routes
router.post('/add/vehicle', (req, res) => {
    const vehicle = req.body.vehicleObj;
    vehicle.owner = req.user._id;

    addVehicle(vehicle.owner, vehicle).then(vehicleSaved => {
        res.json(vehicleSaved);
    });
});

router.put('/update/vehicle/:vehicleId', (req, res) => {
    const vehicleId = req.params.vehicleId;

    updateVehicle(vehicleId).then(vehicleUpdated => {
        res.json(vehicleUpdated);
    });
});

router.delete('/remove/vehicle/:vehicleId', (req, res) => {
    const vehicleId = req.params.vehicleId;

    removeVehicle(vehicleId, req.user._id).then(vehicleRemoved => {
        res.json(vehicleRemoved);
    });
});

router.get('/vehicle', (req, res) => {
    const _id = req.user._id;

    getUserVehicle(_id).then(vehicle => {
        res.json(vehicle);
    });
});

module.exports = router
