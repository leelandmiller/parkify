const Spot = require('../models/spot');
const SpotSchdeule = require('../models/spotSchedule');
const Reservation = require('../models/reservation');
const User = require('../models/user')
const moment = require('moment')

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

const _addSpotSchedule = scheduleObj =>{
    const newSpotSchedule = new SpotSchdeule(scheduleObj)
    return newSpotSchedule.save().catch(err=>{
        return {
            success: false,
            err,
            func: '_addSpotSchedule'
        }
    })
}

const checkSpotSchedulAndAdd = scheduleObj => {
    const vaildDays = {
        mon: true,
        tue: true,
        wed: true,
        thr: true,
        fri: true,
        sat: true,
        sun: true
    }
    let errors = [];
    const endDate = moment(scheduleObj.end_dates.end);
    const timeTillEndDate = endDate.diff(moment(Date.now()), 'days')
    scheduleObj.open_times.forEach(ele => {
        if (!vaildDays[ele.day]) {
            errors.push('invaild day')
        }
    })
    if(timeTillEndDate < 1){
        console.log(timeTillEndDate)
        errors.push('end date must be at least one day away')
    }

    if(errors.length > 0){
        return {
            success:false,
            errors,
            func: 'checkSpotSchedulAndAdd'
        }
    } else{
        return _addSpotSchedule(scheduleObj)
    }

}

const checkSpotObjAndAdd = (spotObj, scheduleObj) => {

    let errors = []
    const lat = parseInt(spotObj.loc.lat)
    const lng = parseInt(spotObj.loc.lng)
    const cost = spotObj.cost
    if (lat > 90 || lat < -90) {
        errors.push('Latitude out of range')
    }
    if (lng > 180 || lng < -180) {
        errors.push('Longitude out of range')
    }
    if (cost.day <= 0 || cost.hr <= 0) {
        errors.push('cost must be above 0')
    }
   return User.findById(spotObj.owner).then(res => {
        if (!res || errors.length > 0) {
            return {
                success: false,
                errors,
                func: 'checkSpotObjAndAdd'
            }
        } else {
            return _addSpot(spotObj).then(res =>{
                scheduleObj.spot = res._id
                return checkSpotSchedulAndAdd(scheduleObj)
            })
        }
    }).catch(err => {
        return {
            success: false,
            err,
            func: 'checkSpotObjAndAdd'
        }
    })
}

module.exports = checkSpotObjAndAdd;