import axios from 'axios';

const API = {
    getCurrentUser: function() {
        return axios.get('/auth/api/currentuser');
    },
    addSpot: function(spotObj, spotScheduleObj) {
        return axios.post('/api/spot', { spotObj, spotScheduleObj });
    },
    addReservation: function(reservationObj) {
        return axios.post('/api/reservation', { reservationObj });
    }
}

export default API;
