const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

class User extends Model { }


User.init({
        //Define the different attributes of a user
      // Define the "id" attribute set as auto-incrementing integer primary key
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
     // Define the "username" attribute set as a non-empty string that must be unique
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
      // Define the "password" attribute set as a non-empty string
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    hooks: {
      //  Hash the password using bcrypt before creating a single user,
        async beforeCreate(userObj) {
            userObj.password = await bcrypt.hash(userObj.password, 10);
            return userObj;
        },
        // Hash the password for each user using bcrypt before bulk creating multiple users,
        async beforeBulkCreate(usersArr) {
            for (const user of usersArr) {
                user.password = await bcrypt.hash(user.password, 10);
            }
        }
    },
    sequelize: db,
    timestamps: false,
    freezeTableName: true,
    modelName: "user"
});

module.exports = User;