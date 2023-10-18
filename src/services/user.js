//create a user in database
const User = require("../models/user");

exports.createNewUser = async function (newUser) {
    console.log(newUser);
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
    console.log(id);
    return User.findByPk(id);
};