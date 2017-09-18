const correctUserObj = {
    name: 'Johnny',
    email: 'johnnytsunami@gmail.com',
    passport_id: '1234567890111',
}

/*
missing required fields
*/
const missingFieldsUserObj = {
    passport_id: '1234567890111',
    provider: 'facebook'
}

module.exports = { correctUserObj, missingFieldsUserObj }
