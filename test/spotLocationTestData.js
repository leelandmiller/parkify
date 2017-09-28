const User = require('../models/user');
const Spot = require('../models/spot');
const SpotSchdeule = require('../models/spotSchedule');
const {correctUserObj} = require('./userTestData')
const {checkSpotObjAndAdd} = require('../db/spotOrm')
/*32.853002, -117.182875
32.869911, -117.215338
32.854810, -117.417940
//too far away
16.685658, -93.734039
16.550729, -93.717173*/

const moment = require('moment')
const correctSpotObj = {
    loc: {
        type: 'Point',
        coordinates: [0, 0]
    },
    cost: {
        day: 1,
        hr: 1
    }
};

const closeSpotLocations = [{
        loc: {
            type: 'Point',
            // coordinates: [-117.182875, 32.853002]
            formatted_address: '518 21ST ST, San Diego,CA'
        },
        cost: {
            day: 1,
            hr: 1
        }
    },
    {
        loc: {
            type: 'Point',
            // coordinates: [ -117.215338, 32.869911]
            formatted_address: '519 21ST ST, San Diego,CA'
        },
        cost: {
            day: 1,
            hr: 1
        }
    },
    {
        loc: {
            type: 'Point',
            // coordinates: [-117.417940, 32.854810]
            formatted_address: '520 21ST ST, San Diego,CA'
        },
        cost: {
            day: 1,
            hr: 1
        }
    }
];

const farSpotLocations = [{
        loc: {
            type: 'Point',
            formatted_address: '4029 Chamoune Ave San Diego, CA 92105'
        },
        cost: {
            day: 1,
            hr: 1
        }
    },
    {
        loc: {
            type: 'Point',
            formatted_address: '4030 Chamoune Ave San Diego, CA 92105'
        },
        cost: {
            day: 1,
            hr: 1
        }
    }
]


const correctScheduleObj = {
    open_times: [{
        day: 'mon'
    }, {
        day: 'tue'
    }, {
        day: 'wed'
    }, {
        day: 'thr'
    }, {
        day: 'fri'
    }, {
        day: 'sat'
    }, {
        day: 'sun'
    }, ],
    end_dates: {
        end: moment().add(7, 'd').toDate()
    }
}


const correctReservationObj = {
    start: moment().add(1, 'd').toDate(),
    end: moment().add(2, 'd').toDate()
}

const saveAllSpotLocations = () => {
    let newFarSpotLocations;
    let newCorrectCloseSpotLocations;
    let testUser = new User(correctUserObj);
    let userId = testUser.save();
    return userId.then(user => {
                userId = user._id;
                newCorrectCloseSpotLocations = closeSpotLocations.map(ele => {
                    ele.owner = user._id;
                    return ele
                })
                newFarSpotLocations = farSpotLocations.map(ele => {
                    ele.owner = user._id;
                    return ele
                })
                correctReservationObj.renter = userId;
            }).then(()=>{
                newCorrectCloseSpotLocations = newCorrectCloseSpotLocations.map(ele => checkSpotObjAndAdd(ele, correctScheduleObj))
                newFarSpotLocations = newFarSpotLocations.map(ele => checkSpotObjAndAdd(ele, correctScheduleObj))
               return Promise.all([
                    ...newCorrectCloseSpotLocations,
                    ...newFarSpotLocations]).then(data => data)
            })
}

module.exports = {
    saveAllSpotLocations
}