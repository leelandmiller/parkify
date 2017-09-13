import axios from 'axios';

const API = {
    getCurrentUser: function() {
        return axios.get('/auth/api/currentuser');
    },
}

export default API;
