const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");

class Comment extends Model { }

Comment.init({
      // Define the "id" attribute as an auto-incrementing integer primary key
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
      // Define the "comment" attribute as a non-empty string
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
     // Define the "createdBy" attribute as a non-empty integer 
     //that refers to the "id" column of the "user" table
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "user",
            key: "id"
        },
    },
    // Define the "postId" attribute as a non-empty integer 
    //that refers to the "id" column of the "post" table
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "post",
            key: "id",
        }
    }
}, {
    sequelize: db,
    freezeTableName: true,
    modelName: "comment",
});

module.exports = Comment;