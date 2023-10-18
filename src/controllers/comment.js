const commentServices = require('../services/comment');
const airportServices = require('../services/airports');

exports.getComments = async function (request, response) {
    const { airportID, userID } = request.params; //obtain id from url
    const comments = await commentServices.getCommentsbyID(airportID, userID); //send to services
    response.status(200).json(comments).end();
}

exports.createComments = async function (request, response) {
    const { content } = request.body;
    const { icao } = request.params;
    console.log(icao, content);
    if (!content) {
        response.status(400).json({ message: 'Please write a comment' });
    } else {
        try {
            console.log(`createComments: ${content}, ${request.user.User_id}, ${icao}`);
            const userid = request.user.User_id;
            const airportid = await airportServices.findAirportID(icao);
            console.log(`airportidatcommentcontroller: ${airportid}`);
            const newComment = await commentServices.insertComments({ content, User_id: userid, Airport_id: airportid });
            console.log(newComment);
            response.status(201).json({ message: 'Succesfully Created', newComment });
        } catch (e) {
            response.status(500).json({ message: 'Failed to create Comment', e });
        }
    }
};

exports.deleteComments = async function (request, response) {
    const { userID, icao_input } = request.params;
    try {
        if (!icao_input && userID == request.user.id) {
            const commentID = await commentServices.getCommentsbyID(userID && { where: { icao: icao_input } });
            await commentServices.deleteComments(commentID);
            response.status(204).json({
                message: 'Comment deleted'
            }).end();
        } else {
            response.status(404).json({ message: 'Comment not found, check userID or login' })
        }
    }
    catch (e) {
        response.status(401).json({
            messagedev: e.details,
        });
    }
};