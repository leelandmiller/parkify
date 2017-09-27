const moment = require('moment')
const correctSpotObj = {
    loc:{
        type:'Point',
        formatted_address: '517 21ST ST, San Diego,CA'
    },
    cost:{
        day:1,
        hr:1
    }
}

const falseSpotObj = {
    loc:{
        type:'Point',
       formatted_address: '511231237 21ST ST, San Diego,CA'
    },
    cost:{
        day:0,
        hr:0
    }
}

const correctScheduleObj ={
    open_times:[{
        day:'mon'
    },{
        day:'tue'
    },{
        day:'wed'
    },{
        day:'thr'
    },{
        day:'fri'
    },{
        day:'sat'
    },{
        day:'sun'
    },],
    end_dates:{
        end: moment().add(7, 'd').toDate()
    }
}

const falseScheduleObj ={
    open_times:[{
        day:'monday'
    }],
    end_dates:{
        end: moment().toDate()
    }
}

const singleDayScheduleObj = {
    open_times:[{
        day:"mon"
    }],
    end_dates: {
        end:moment().add(7, 'd').toDate(),
        blackout_days: [{
            start: moment().add(6, 'd').toDate(),
            end: moment().add(8, 'd').toDate()
        }]
    }
}

const correctReservationObj = {
    start: moment().add(1, 'd').toDate(),
    end: moment().add(2, 'd').toDate()
}

const lateCorrectReservationObj = {
    start: moment().add(7, 'd').toDate(),
    end: moment().add(9, 'd').toDate()
}

const falseReservationObj = {
    start: moment().subtract(2, 'd').toDate(),
    end: moment().subtract(1, 'd').toDate(),
}

module.exports = {
    correctSpotObj,
    correctScheduleObj,
    falseSpotObj,
    falseScheduleObj,
    correctReservationObj,
    singleDayScheduleObj,
    falseReservationObj,
    lateCorrectReservationObj
}