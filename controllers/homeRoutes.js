const { Post, User, Comment } = require("../models");

const router = require("express").Router();


// GET route for "/"
// Retrieve all posts with associated user information
router.get("/", async (req, res) => {
     try {
         let allPosts = await Post.findAll({
             include: [{
                 model: User,
                 attributes: ["username"]
             }]
         });
          // If there are no posts, render the homepage with an empty array of posts
         if (!allPosts) {
             res.render("homepage", { user: req.session.user, posts: [] });
         }
         allPosts = allPosts.map(e => e.get({ plain: true }));
          // Render the homepage with the user data and the retrieved posts
         res.render("homepage", { user: req.session.user, posts: allPosts });
     } catch (error) {
         console.error(error);
         res.render("homepage", { user: req.session.user, posts: [] });
     }
 });