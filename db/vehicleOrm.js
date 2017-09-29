const { User, Vehicle } = require('../models');
const axios = require('axios');
const { addVehicleIDToUser } = require('./userOrm');

module.exports = {
    addVehicle: function(vehicle) {
        const newVehicle = new Vehicle(vehicle);

        return newVehicle.save().then(savedVehicle => {
            addVehicleIDToUser(req.user._id, savedVehicle._id);
            return savedVehicle;
        });
    },
    updateVehicle: function(_id) {
        return Vehicle.update({ _id }).then(updatedVehicle => {
            return updatedVehicle;
        });
    },
    removeVehicle: function(_id, userId) {
        return Vehicle.findById({ _id }).then(vehicle => {
            if (!vehicle) {
                return {
                    success: false,
                    err: 'no vehicle with that id',
                    func: 'removeVehicle',
                }
            } else {
                if (vehicle.owner.toString() === userId.toString()) {
                    return Vehicle.remove({ _id }).then(removedVehicle => {
                        return User.update({ _id: userId }, {
                            $set: {
                                vehicle: {}
                            }
                        }).then(() => {
                            return removedVehicle;
                        });
                    }).catch(err => {
                        return {
                            success: false,
                            err
                        }
                    });
                }
            }
        });
    },
    getUserVehicle: function(_id) {
        return Vehicle.findOne({ _id }).then(vehicle => {
            return vehicle;
        });
    },
}
