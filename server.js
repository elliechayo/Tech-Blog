// env variables
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const express = require("express");
const app = express();

// database
const sequelize = require("./config/db");

// routes
const routes = require("./controllers/index");

// handlebars configuration
const helpers = require("./utils/helpers");
const handlebars = require("express-handlebars");
const hbs = handlebars.create({ helpers });

// session configuration
const session = require("express-session");
const sessionStore = require("connect-session-sequelize")(session.Store);
const sessionConfig = {
    secret: process.env.SESSION_SECRET,
    cookies: { maxAge: 36000 },
    resave: false,
    saveUninitialized: true,
    store: new sessionStore({
        db: sequelize
    })
};

// express configuration and middlewares
app.use(session(sessionConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

// view engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);

// init db and listen
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server listening on *::${PORT}`));
}).catch(err => {
    console.error(err);
    process.exit(1);
});