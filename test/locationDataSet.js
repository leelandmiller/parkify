const User = require('../models/user');
const Spot = require('../models/spot');
const SpotSchdeule = require('../models/spotSchedule');
const {correctUserObj} = require('./userTestData');
const {checkSpotObjAndAdd} = require('../db/spotOrm');
const moment = require('moment')


const schoolLocDataSet = [{
        loc: {
            type: 'Point',
            coordinates: [-117.182875, 32.853002]
        },
        cost: {
            day: 1,
            hr: 1
        }
    },
    {
        loc: {
            type: 'Point',
            coordinates: [-117.215338, 32.869911]
        },
        cost: {
            day: 1,
            hr: 1
        }
    },
    {
        loc: {
            type: 'Point',
            coordinates: [-117.417940, 32.854810]
        },
        cost: {
            day: 1,
            hr: 1
        }
    }, {
        {
            type: 'Point',
            coordinates: [-117.191085, 32.852441]
        },
        cost: {
            day: 1,
            hr: 1
        }
    }, {
        {
            type: 'Point',
            coordinates: [-117.192621, 32.857205]
        },
        cost: {
            day: 1,
            hr: 1
        }
    }, {
        {
            type: 'Point',
            coordinates: [-117.208757, 32.855474]
        },
        cost: {
            day: 1,
            hr: 1
        }
    }, {
        {
            type: 'Point',
            coordinates: [-117.202191, 32.842820]
        },
        cost: {
            day: 1,
            hr: 1
        }
    }, {
        {
            type: 'Point',
            coordinates: [-117.201247, 32.840728]
        },
        cost: {
            day: 1,
            hr: 1
        }
    }, {
        {
            type: 'Point',
            coordinates: [-117.204251, 32.836329]
        },
        cost: {
            day: 1,
            hr: 1
        }
    }
]

const downtownLocDataSet = [
    {
        {
            type: 'Point',
            coordinates: [-117.122841, 32.698051]
        },
        cost: {
            day: 1,
            hr: 1
        }
    },{
        {
            type: 'Point',
            coordinates: [-117.126102, 32.697618]
        },
        cost: {
            day: 1,
            hr: 1
        }
    },{
        {
            type: 'Point',
            coordinates: [-117.126789, 32.704407]
        },
        cost: {
            day: 1,
            hr: 1
        }
    },{
        {
            type: 'Point',
            coordinates: [-117.119751, 32.706141]
        },
        cost: {
            day: 1,
            hr: 1
        }
    },{
        {
            type: 'Point',
            coordinates: [-117.122498, 32.700940]
        },
        cost: {
            day: 1,
            hr: 1
        }
    },{
        {
            type: 'Point',
            coordinates: [-117.129536, 32.709029]
        },
        cost: {
            day: 1,
            hr: 1
        }
    },{
        {
            type: 'Point',
            coordinates: [-117.125416, 32.696462]
        },
        cost: {
            day: 1,
            hr: 1
        }
    },{
        {
            type: 'Point',
            coordinates: [-117.132282, 32.697762]
        },
        cost: {
            day: 1,
            hr: 1
        }
    },{
        {
            type: 'Point',
            coordinates: [-117.144470, 32.710763]
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
                newCorrectCloseSpotLocations = schoolLocDataSet.map(ele => {
                    ele.owner = user._id;
                    return ele
                })
                newFarSpotLocations = downtownLocDataSet.map(ele => {
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
