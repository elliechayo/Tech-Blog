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


 // GET route for "/viewPost/:id"
 router.get("/viewPost/:id", async (req, res) => {
     const { id } = req.params;
     try {
           // Find the post with the specified ID and include associated user and comment information
         let post = await Post.findOne({
             where: { id },
             include: [
                 { model: User, attributes: ["username"] },
                 {
                     model: Comment,
                     attributes: ["id", "comment", "postId", "createdBy", "createdAt"],
                     include: {
                         model: User,
                         attributes: ["username"]
                     }
                 }
             ]
         });
           // If the post doesn't exist, redirect to the homepage
         if (!post) {
             return res.redirect("/");
         }
         post = post.get({ plain: true });
          // Render the viewPost page with the user data and the retrieved post
         res.render("viewPost", { user: req.session.user, post: post });
     } catch (error) {
         console.error(error);
           // If an error occurs, redirect to the homepage
         return res.redirect("/");
     }
 });

 module.exports = router;