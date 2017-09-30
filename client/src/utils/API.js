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
        return axios.get(`/api/spot/${spotId}`);
    },
    deleteSpot: function(spotId) {
        return axios.delete('/api/spot', { spotId });
    },
    getSpotsByPoint: function(locObj){
        console.log(locObj);
        return axios.post('/api/spot/loc', {
            location: locObj.loc,
            distance: locObj.distance
        });
    },
    /**RESERVATION API CALLS**/
    addReservation: function(reservationObj) {
        return axios.post('/api/reservation', { reservationObj });
    },
    getAllReservations: function(spotId) {
        return axios.get(`/api/reservation/${spotId}`);
    },
    getUserReservations: function(userId) {
        console.log(userId)
        return axios.get(`/api/myreservations/${userId}`);
    },
    getUserSpots: function(userId) {
        return axios.get(`/api/myspots/${userId}`);
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
    },
    /**VEHICLE API CALLS**/
    addVehicle: function(vehicleObj) {
        return axios.post('/api/add/vehicle', { vehicleObj });
    },
    updateVehicle: function(vehicleId) {
        return axios.put(`/api/update/vehicle/${vehicleId}`);
    },
    removeVehicle: function(vehicleId) {
        return axios.delete(`/api/remove/vehicle/${vehicleId}`);
    },
    getVehicle: function(userId) {
        return axios.get('/api/vehicle');
    }
}

export default API;
