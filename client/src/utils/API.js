import axios from 'axios';

const API = {
    /**SPOT API CALLS**/
    addSpot: function(spotObj, spotScheduleObj) {
        return axios.post('/api/spot', { spotObj, spotScheduleObj });
    },
    updateSpotSchedule: function(spotId, schedule) {
        return axios.put('/api/spot/schedule', { spotId, schedule });
    },
    getSpot: function(spotId) {
        return axios.get('/api/spot', { spotId });
    },
    deleteSpot: function(spotId) {
        return axios.delete('/api/spot', { spotId });
    },
    getSpotsByPoint: function(locObj){
        return axios.get('/api/spot/loc', {
            location: locObj.loc,
            distance: locObj.distance
        });
    },
    /**RESERVATION API CALLS**/
    addReservation: function(reservationObj) {
        return axios.post('/api/reservation', { reservationObj });
    },
    getAllReservations: function(spotId) {
        return axios.get('/api/reservation', { spotId });
    },
    /**USER API CALLS**/
    getCurrentUser: function() {
        return axios.get('/auth/api/currentuser');
    },
    addNewUser: function(user) {
        return axios.post('/auth/signup', { user });
    },
    loginUser: function(email, password) {
        return axios.post('/auth/login', { email, password });
    }
}

export default API;
