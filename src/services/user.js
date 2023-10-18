//create a user in database
const User = require("../models/user");

exports.createNewUser = function (newUser) {
    console.log(newUser);
    return User.create(newUser);
};

exports.findByUsername = async function (username) {
    return User.findOne({
        where: {
            username,
        },
    });
};

exports.findByID = async function (id) {
    console.log(id);
    return User.findByPk(id);
};