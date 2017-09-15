const correctUserObj = {
    id: '12345',
    name: 'Johnny',
    email: 'johnnytsunami@gmail.com',
    ph_num: '1235551234',
    google_id: '1234567890111'
}

/*
missing required fields
*/
const missingFieldsUserObj = {
    ph_num: '1235551234',
    google_id: '1234567890111'
}

module.exports = { correctUserObj, missingFieldsUserObj }
