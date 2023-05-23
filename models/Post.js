const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");

class Post extends Model { }

Post.init({
     //define the different attributes  of the post
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    createdBy: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id"
        },
        allowNull: false
    }
}, {
    sequelize: db,
    freezeTableName: true,
    modelName: "post"
});

module.exports = Post;