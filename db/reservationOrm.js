const Reservation = require('../models/reservation');
const Spot = require('../models/spot');
const User = require('../models/user');
const { addReservationIDToUser } = require('./userOrm');
const moment = require('moment');


const getSpotsReservations = spotId => Reservation.find({
    spot: spotId
}).then(spotReservations => {
    return {
        success: true,
        reservation: spotReservations
    }
}).catch(err => {
    return {
        success: false,
        err
    }
})

const finalReservationConflicts = (myResId, spotId) => {
    //get all reservations for spot
    const allReservation = Reservation.find({
        spot: spotId
    })
    //grab my reservation info
    const myReservation = Reservation.find({
        _id: myResId
    })
    return Promise.all([
        allReservation,
        myReservation
    ]).then(results => {
        let allRes = results[0]
        let myRes = results[1]
        //filter to get only cnflicted reservations
        allRes.filter(checkIfDatesConflict(myRes))
        //if only mine comes up return as a success
        if (allRes.length === 1) {
            return {
                success: true,
                reservation: allRes[0]
            }
        }
        //pre set oldest to first array object
        let oldest = allRes[0];
        for (let i = 1; i < allRes.length; i++) {
            let oldestMoment = moment(oldest.created_at)
            let currentMoment = moment(allRes[i].created_at)
            if (currentMoment.isBefore(oldestMoment)) {
                oldest = allRes[i]
            }
        }
        if (oldest._id === myResId) {
            return {
                success: true,
                reservation: oldest
            }
        } else {
            //if myRes isnt the oldest one delete it and return success:false
            return Reservation.remove({
                _id: myResId
            }).then(results => {
                return {
                    success: false,
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
    })
}

const getAllReservations = spotId =>
    Reservation.find({
        spot: spotId
    })
    .deepPopulate([
            'spot',
            'spot.schedule'
        ])
    .then(results => {
        return {
            success: true,
            reservations: results
        }
    })
    .catch(err => {
        return {
            success: false,
            err
        }
    })

const checkResevationObj = resObj => {
    const startDay = moment(resObj.start);
    const endDay = moment(resObj.end);
    let SpotObj = Spot.findById(resObj.spot).populate('schedule').then(res => { return res });
    let UserObj = User.findById(resObj.renter).then(userRes => { return userRes });
    const now = moment(Date.now())
    let errors = [];
    if (endDay.diff(startDay, 'seconds') < 60 * 60) {
        errors.push('end date must be at least 1 hour after start date')
    }
    if (startDay.diff(now, 'seconds') < 0) {
        errors.push('start date must be after current time')
    }
    return Promise.all([
        SpotObj,
        UserObj
    ]).then((results) => {
        SpotObj = results[0];
        UserObj = results[1]
        if (SpotObj === null) {
            errors.push('must have a valid spot associated with it')
        }
        if (UserObj === null) {
            errors.push('must have a vaild user associated with it')
        }
        if (errors.length > 0) {
            return {
                success: false,
                errors,
                func: "checkResevationObj"
            }
        } else {
            return checkIfMatchesSpotSchedule(resObj, SpotObj)
        }
    })
}

const checkIfMatchesSpotSchedule = (resObj, spotObj) => {
    //TODO:rework to check times not just days
    //used to convert number from moment.day() into format weekdays are stored
    const weekdays = ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat'];
    let errors = []
    const startResDay = moment(resObj.start);
    const endResDay = moment(resObj.end);
    const endDate = moment(spotObj.schedule.end_dates.end);
    const blackOutDays = spotObj.schedule.end_dates.blackout_days;
    const openWeekdays = spotObj.schedule.open_times.map(ele => ele.day);
    //create array holding all days reservation is for
    const resWeekdays = weekdays.filter((day, index) => {
        return (index >= startResDay.day() && index <= endResDay.day())
    })
    if (startResDay.isAfter(endDate) || endResDay.isAfter(endDate)) {
        errors.push('reservation must be start and end before last available day')
    }
    //makse sure all days during reservation is in the schedule
    if (resWeekdays.filter(ele => openWeekdays.includes(ele)).length !== resWeekdays.length) {
        errors.push('single reservation must only cover available days')
    }
    if (blackOutDays.filter(checkIfDatesConflict(resObj)).length > 0) {
        errors.push('reservation cant overlap blackout days')
    }
    if (errors.length > 0) {
        return {
            success: false,
            errors,
            func: 'checkIfMatchesSpotSchedule'
        }
    } else {
        return checkForOtherReservations(resObj)
    }


}

const checkForOtherReservations = resObj => {
    return Reservation.find({
        spot: resObj.spot
    }).then(results => {
        //check thru all current reservations to make sure new reservation doesnt conflict
        const confilctReservations = results.filter(checkIfDatesConflict(resObj))
        if (confilctReservations.length > 0) {
            return {
                success: false,
                errors: ['reservation date unavailable'],
                func: 'checkForOtherReservations'
            }
        } else {
            return _addReservation(resObj)
        }
    })
}

const checkIfDatesConflict = testRes => {
    //dates to use for all compares
    const startDay = moment(testRes.start);
    const endDay = moment(testRes.end);
    return ele => {
        //dates from array
        const eleStart = moment(ele.start);
        const eleEnd = moment(ele.end);
        if (startDay.isBetween(eleStart, eleEnd) || endDay.isBetween(eleStart, eleEnd)) {
            return true
        } else {
            return false
        }
    }
}

const _addReservation = resObj => {
    const newRes = Reservation(resObj)
    return newRes.save().then(resObj => {
        addReservationIDToUser(resObj.renter, resObj._id)
        return {
            success: true,
            reservation: resObj
        }
    }).catch(err => {
        return {
            success: false,
            errors: err,
            func: '_addReservation'
        }
    })
}

module.exports = {
    checkResevationObj,
    getAllReservations,
    finalReservationConflicts
}
