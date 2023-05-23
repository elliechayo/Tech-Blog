const { Post, User, Comment } = require("../models");

const router = require("express").Router();


// GET route /dashboard
router.get("/", async (req, res) => {
    try {
        let allPosts = await Post.findAll({
            where: {
                createdBy: req.session.user.id,
            },
            include: [{
                model: User,
                attributes: ["username"]
            }]
        });
        allPosts = allPosts.map(e => e.get({ plain: true }));
        if (!allPosts) {
            return res.render("dashboard", { user: req.session.user });
        }
        return res.render("dashboard", { user: req.session.user, posts: allPosts });
    } catch (error) {
        console.error(error);
        res.render("dashboard", { user: req.session.user });
    }
});


// GET route /dashboard/createPost
router.get("/createPost", (req, res) => {
    res.render("createPost", { user: req.session.user });
});



//  GET route /dashboard/createPost
router.post("/createPost", async (req, res) => {
    const { title, content } = req.body;
    try {
        const newPost = await Post.create({
            title,
            content,
            createdBy: req.session.user.id
        });

        if (!newPost.dataValues) {
            return res.render("createPost", { error: "Error while creating post", user: req.session.user });
        }

        return res.redirect("/dashboard");
    } catch (error) {
        return res.render("createPost", { error: error.message, user: req.session.user });
    }
});


//  GET route /dashboard/deletepost/:id
router.get("/deletePost/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPost = await Post.destroy({
            where: {
                id,
            }
        });
        res.redirect("/dashboard");
    } catch (error) {
        console.error(error);
        res.redirect("/dashboard");
    }
});



// POST route /dashboard/addComment/:id
router.post("/addComment/:id", async (req, res) => {
    const { id: postId } = req.params;
    const { comment } = req.body;
    try {
        await Comment.create({
            comment,
            postId,
            createdBy: req.session.user.id
        });
        return res.redirect("/viewPost/" + postId);
    } catch (error) {
        console.error(error);
        return res.redirect("/viewPost/" + postId);
    }
});


//  GET route /dashboard/editPost/:id
router.get("/editPost/:id", async (req, res) => {
    const { id } = req.params;
    try {
        let post = await Post.findOne({
            where: {
                id,
            },
        });
        if (!post) {
            return redirect("/dashboard");
        }
        post = post.get({ plain: true });
        res.render("editPost", { user: req.session.user, post: post });
    } catch (error) {
        console.error(error);
        res.redirect("/dashboard");
    }
});


//  POST route /dashboard/editPost/:id
router.post("/editPost/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await Post.update({
            title: req.body.title,
            content: req.body.content
        }, {
            where: {
                id,
            }
        });
        return res.redirect("/viewPost/" + id);
    } catch (error) {
        console.error(error);
        res.redirect("/dashboard");
    }
});

module.exports = router;