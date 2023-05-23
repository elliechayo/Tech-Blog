const { Comment } = require("../models");

const comments = [
    {
        comment: "I just learned about this in my class",
        createdBy: "1",
        postId: 1
    },
    {
        comment: "Very helpful. Thank you.",
        createdBy: "2",
        postId: 1
    },
    {
        comment: "I couldn't agree more. ",
        createdBy: "2",
        postId: 2
    },
    {
        comment: "Loved reading your post. Very interesting",
        createdBy: "1",
        postId: 3
    },
];

const commentSeeds = () => Comment.bulkCreate(comments);

module.exports = commentSeeds;