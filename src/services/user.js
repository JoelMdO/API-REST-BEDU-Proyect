//create a user in database
const User = require("../models/user");

exports.createNewUser = async function (newUser) {

    const createdUser = await User.create(newUser);
    return createdUser;
};

exports.findByUsername = async function (username) {
    return User.findOne({
        where: {
            username,
        },
    });
};

exports.findByID = async function (id) {

    return User.findByPk(id);
};