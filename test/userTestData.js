const correctUserObj = {
    name: 'Johnny',
    email: 'johnnytsunami@gmail.com',
    passport_id: '1234567890111',
    
}

/*
missing required fields
*/
const missingFieldsUserObj = {
    ph_num: '1235551234',
    google_id: '1234567890111'
}

module.exports = { correctUserObj, missingFieldsUserObj }
