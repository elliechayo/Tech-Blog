const Sequelize = require("sequelize");
require("dotenv").config();



// let sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: "127.0.0.1",
//     port: "3306",
//     dialect: "mysql"
// });

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
  } else {
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "127.0.0.1",
        dialect: "mysql",
        port: 3306,
      }
    );
  }
module.exports = sequelize;



// module.exports = sequelize;
// module.exports = {
//   HOST: "us-cdbr-east-06.cleardb.net",
//   USER: "bc7faf7100afe1",
//   PASSWORD: "237bafe4",
//   DB: "heroku_960ea987615bad3"
// };