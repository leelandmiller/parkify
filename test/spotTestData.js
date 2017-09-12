const moment = require('moment')
const correctSpotObj = {
    loc:{
        lat:'80',
        lng:'150'
    },
    cost:{
        day:1,
        hr:1
    }
}

const falseSpotObj = {
    loc:{
        lat:'100',
        lng:'250'
    },
    cost:{
        day:0,
        hr:0
    }
}

const correctScheduleObj ={
    open_times:[{
        day:'mon'
    }],
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

module.exports = {
    correctSpotObj,
    correctScheduleObj,
    falseSpotObj,
    falseScheduleObj
}