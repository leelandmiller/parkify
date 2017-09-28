const { User } = require('../models');
const axios = require('axios');

module.exports = {
    addVehicle: function(vehicle) {
        const newVehicle = new Vehicle(vehicle);

        return newVehicle.save().then(savedVehicle => {
            return savedVehicle;
        });
    },
    updateVehicle: function() {

    },
    removeVehicle: function() {

    },
    getVehicle: function(vehicleId) {

    },
}
