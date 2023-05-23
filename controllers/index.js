const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const dashboardRoutes = require("./dashboardRoutes");
const authRoutes = require("./authRoutes");

const authenticate = (req, res, next) => {
    if (!req.session.user) {
        return res.render("login", { error: "Login to continue" });
    } else {
        next();
    }
};

router.use("/", homeRoutes);
router.use("/auth", authRoutes);
router.use("/dashboard", authenticate, dashboardRoutes);

module.exports = router;