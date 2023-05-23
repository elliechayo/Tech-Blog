const { User } = require("../models");

const users = [
    {
        username: "elliechayo",
        password: "password",
    },
    {
        username: "danichayo",
        password: "password",
    },
];

const userSeeds = () => User.bulkCreate(users);

module.exports = userSeeds;