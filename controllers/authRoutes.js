const bcrypt = require("bcrypt");
const router = require("express").Router();
const { User } = require("../models");


// GET route /auth/login
router.get("/login", (req, res) => {
    if (req.session.user) {
        redirect("/");
        return;
    }
    res.render("login");
});


// POST route /auth/login
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({
            where: {
                username: username
            }
        });
        if (!user.dataValues) {
            return res.render("login", { error: "Invalid Credentials" });
        }
        if (bcrypt.compareSync(password, user.dataValues.password)) {
            req.session.user = user.dataValues;
            req.session.save(() => {
                res.redirect("/");
            });
        } else {
            res.render("login", { error: "Invalid credentials" });
        }
    } catch (error) {
        return res.render("login", { error: error.message });
    }
});


// GET route /auth/register
router.get("/register", (req, res) => {
    res.render("register");
});


// POST route /auth/register
router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        const newUser = await User.create({
            username,
            password,
        });

        if (!newUser.dataValues) {
            return res.render("register", { error: "Error while creating user" });
        }

        req.session.user = newUser.dataValues;
        req.session.save(() => {
            res.redirect("/");
        });

    } catch (error) {
        return res.render("register", { error: "username must be unique" });
    }
});


// GET route /auth/logout
router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    });
});

module.exports = router;