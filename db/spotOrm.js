const Spot = require('../models/spot');
const SpotSchdeule = require('../models/spotSchedule');
const Reservation = require('../models/reservation');
const User = require('../models/user');
const { addSpotIDToUser } = require('./userOrm')
const moment = require('moment');


const _updateSpotSchedule = (spotId, newSpotSchedule) => SpotSchdeule.update({
    spot: spotId
}, {
    $set: newSpotSchedule
}).then(updatedSpotSchedule => {
    return {
        success: true,
        spotSchedule: updatedSpotSchedule
    }
}).catch(err => {
    return {
        success: false,
        err
    }
})

const checkAndUpdateSpotSchedule = (spotId, newSpotSchedule) => {
    return _checkSpotSchedulAndAdd(newSpotSchedule, null, spotId, true)
}

const deleteSpot = (_id, userId) => {
    Spot.findById({
        _id
    }).then(results => {
        if (results.owner.toString() !== userId.toString()) {
            return {
                success: false,
                err: ["only the owner may delete their spot"]
            }
        } else {
           return Spot.remove({
                _id
            }).then(results => {
                return {
                    success: true,
                    spot: results
                }
            }).catch(err => {
                return {
                    success: false,
                    err
                }
            })
        }
    }).catch(err => {
                return {
                    success: false,
                    err
                }


}

const getSpotsFromPoint = (coordinates, distance) => {
    return Spot.aggregate(
        [{
            "$geoNear": {
                "near": {
                    "type": "Point",
                    coordinates
                },
                "distanceField": "distance",
                "sperical": true,
                "maxDistance": distance
            }
        }])

}

const getSpotInfo = _id =>
    Spot.find({ _id })
    .populate('schedule')
    .then(results => {
        return {
            success: true,
            spot: results
        }
    })
    .catch(err => {
        return {
            success: false,
            err
        }
    })


const _addSpot = spotObj => {
    const newSpot = new Spot(spotObj)
    return newSpot.save().catch(err => {
        return {
            success: false,
            err,
            func: '_addSpot'
        }
    })
}

const _addSpotSchedule = scheduleObj => {
    const newSpotSchedule = new SpotSchdeule(scheduleObj)
    return newSpotSchedule.save().then(scheduleObj => {
        return Spot.findByIdAndUpdate({ _id: scheduleObj.spot }, {
            $set: {
                schedule: scheduleObj._id
            }
        }).then(res => {
            return {
                success: true,
                spot: res
            }
        })
    }).catch(err => {
        return {
            success: false,
            err,
            func: '_addSpotSchedule',
            spotId: scheduleObj.spot
        }
    })
}

const _checkSpotSchedulAndAdd = (scheduleObj, spotObj, spotId, update) => {
    //to check if valid value for day
    const validDays = {
        mon: true,
        tue: true,
        wed: true,
        thr: true,
        fri: true,
        sat: true,
        sun: true
    }
    let errors = [];
    //converts endDate into moment object and determines distance till endDAte
    const endDate = moment(scheduleObj.end_dates.end);
    const timeTillEndDate = endDate.diff(moment(Date.now()), 'days')
    scheduleObj.open_times.forEach(ele => {
        if (!validDays[ele.day]) {
            errors.push('invaild day')
        }
    })
    if (timeTillEndDate < 1) {
        console.log(timeTillEndDate)
        errors.push('end date must be at least one day away')
    }

    if (errors.length > 0) {
        return {
            success: false,
            errors,
            func: '_checkSpotSchedulAndAdd'
        }
    } else {
        if (update) {
            return _updateSpotSchedule(spotId, scheduleObj)
        } else {
            return _addSpot(spotObj).then(res => {
                scheduleObj.spot = res._id
                addSpotIDToUser(res.owner, res._id)
                return _addSpotSchedule(scheduleObj)
            })
        }

        /*return _addSpotSchedule(scheduleObj)*/
    }

}

const checkSpotObjAndAdd = (spotObj, scheduleObj) => {

    let errors = []
    const lat = parseInt(spotObj.loc.coordinates[1])
    const lng = parseInt(spotObj.loc.coordinates[0])
    const cost = spotObj.cost
    //check that all data is vaild
    if (lat > 90 || lat < -90) {
        errors.push('Latitude out of range')
    }
    if (lng > 180 || lng < -180) {
        errors.push('Longitude out of range')
    }
    if (cost.day <= 0 || cost.hr <= 0) {
        errors.push('cost must be above 0')
    }
    //makes sure the user id exists in db
    return User.findById(spotObj.owner).then(res => {
        if (!res || errors.length > 0) {
            return {
                success: false,
                errors,
                func: 'checkSpotObjAndAdd'
            }
        } else {
            return _checkSpotSchedulAndAdd(scheduleObj, spotObj)
        }
    }).catch(err => {
        return {
            success: false,
            err,
            func: 'checkSpotObjAndAdd'
        }
    })
}

module.exports = {
    checkSpotObjAndAdd,
    getSpotInfo,
    checkAndUpdateSpotSchedule,
    deleteSpot
}