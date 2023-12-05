const Comment = require("../models/comment");

exports.insertComments = function (newComment) {

    return Comment.create(newComment);
}

