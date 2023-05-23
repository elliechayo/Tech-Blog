// models
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

User.hasMany(Post, {
    foreignKey: "createdBy"
});

User.hasMany(Comment, {
    foreignKey: "createdBy",
    onDelete: "cascade",
});

Post.hasMany(Comment, {
    foreignKey: "postId",
    onDelete: "cascade",
});

Post.belongsTo(User, {
    foreignKey: "createdBy",
    onDelete: "cascade",
});

Comment.belongsTo(User, {
    foreignKey: "createdBy",
    onDelete: "cascade",
});

Comment.belongsTo(Post, {
    foreignKey: "postId",
    onDelete: "cascade"
});


module.exports = { User, Post, Comment };