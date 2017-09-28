const Spot = require('../models/spot');
const SpotSchdeule = require('../models/spotSchedule');
const Reservation = require('../models/reservation');
const User = require('../models/user');
const moment = require('moment');
const QrCodes = require('../models/qrCodes');
const uuidv4 = require('uuid/v4');

/*
    add new qr for reservation

*/

const buildNewQrCodeDoc = (userId, resId) => {
    const userPromise = User.findById({
        _id:userId
    })
    const resPromise = Reservation.findById({
        _id:resId
    }).populate('vehicle')
    //TODO: add populate for license data
    const qrObj = {}
    Promise.all([
        userPromise,
        resPromise
        ]).then( results => {
            const userInfo = results[0]
            const resInfo = results[1]
            qrObj.spot = resInfo._id
            qrObj.vehicle = userInfo.vehicle
            qrObj.token = uuidv4()
            qrObj.start =resInfo.start
            qrObj.end = resInfo.end
            QrCodes.save(qrObj).then( data => {
                return{
                    success:true,
                    qrObj:data
                }
            })
        })
}

const getQrCodeData = token => {
    return QrCodes.find({
        token
    }).then(results => {
        return {
            success:true,
            results
        }
    })
}

module.exports - {
    buildNewQrCodeDoc,
    getQrCodeData
}

