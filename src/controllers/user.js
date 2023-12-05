const userService = require("../services/user");
const jwt = require("jsonwebtoken");

exports.getUser = async function (request, response) {
    const { username } = request.params;


    if (username) {
        const userFromDB = await userService.findByUsername(username);

        if (userFromDB && Array.isArray(userFromDB) && userFromDB.length > 0) {
            response.status(200).json(userFromDB);
        } else {
            response.status(404).json({ message: 'User not found, Contact admin' });
        }
    } else {
        response.status(400).json({ message: 'A User name is required' });
    }
};

exports.createUser = async function (request, response) {
    const { username, email, password } = request.body;

    if (!username || !email || !password) {
        response.status(400).json({ message: 'Please review the 3 fields are inserted correctly' });
    } else {
        try {

            const newUser = await userService.createNewUser({ username, email, password });

            response.status(201).json({ message: 'Succesfully Created', newUser });
        } catch (e) {

            response.status(500).json({ message: 'Failed to create user', e });
        }
    }
};

exports.login = async function (request, response) {
    const { username, password } = request.body;
    console.log(`username and password`, username, password);
    const user = await userService.findByUsername(username);

    if (!user || user.password !== password) {
        return response.status(400).json({
            message: "User or password incorrect",
            messagedev: "User or password not found",
            code: "ERR_AUTH",
        });
    }
    const token = jwt.sign(
        { User_id: user.User_id, username: user.username },
        process.env.TOKEN_TXT
    );
    console.log(`tokenfromnode:`, token);
    response.status(200).json({
        jwt: token,
    });
}; 