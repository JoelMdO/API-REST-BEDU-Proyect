const Comment = require("../models/comment");

exports.insertComments = function (newComment) {
    console.log(newComment);
    return Comment.create(newComment);
}

