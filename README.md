# Tech-Blog


The objective of the project was to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. 

The application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents

* [Description](#Description)
* [Technologies](#Technologies)
* [Preview](#preview)
* [Links](#links)
* [License](#license)


## Description 

When users visit the tech blog site for their first time, they are presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in.

When a user clicks on the homepage option, he/she is taken to the homepage.

When a user clicks on any other links in the navigation, he/she is prompted to either sign up or sign in.

When a user chooses to sign up, he/she is prompted to create a username and password.

When a user clicks on the sign-up button, user’s credentials are saved, and he/she is logged into the site.

When a user revisits the site at a later time and choose to sign in, he/she is prompted to enter my username and password.

When a user is signed into the site, he/she sees navigation links for the homepage, the dashboard, and the option to log out.

When a user clicks on the homepage option in the navigation, he/she is taken to the homepage and presented with existing blog posts that include the post title and the date created.

When a user clicks on an existing blog post, he/she is presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment.

When a user enters a comment and click on the submit button while signed in, the comment is saved, and the post is updated to display the comment, the comment creator’s username, and the date created.

When a user clicks on the dashboard option in the navigation, he/she is taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post.

When a user clicks on the button to add a new blog post, he/she is prompted to enter both a title and contents for my blog post.

When a user clicks on the button to create a new blog post, the title and contents of his/her post are saved, and user is taken back to an updated dashboard with his/her new blog post.

When a user clicks on one of his/her existing posts in the dashboard, user is able to delete or update his/her post and taken back to an updated dashboard.

When a user clicks on the logout option in the navigation, the user is signed out of the site.

When use is idle on the page for more than a set time, user is  I am signed out of the site.

## Technologies
<hr>

- Node 
- MySQL2 package
- Sequelize
- dotenv package
- Handlebars.js
- HTML/CSS
- Javascript
- Express.js
- bcrypt


 

## Preview
<hr>

The following images show the web application's appearance and functionality:
 ### Deployed Application
![Deployed app Homepage](/assests/image1.png)
### Register View
![Register ](/assests/image2.png)
### Sign-In View
![Sign in](/assests/image3.png)
### User Homepage View
![User Homepage](/assests/image4.png)
### User Dashboard View
![User Dashboard](/assests/image5.png)
### Create a Post View
![Create a post](/assests/image6.png)
### Edit a Post View
![Edit a post](/assests/image7.png)
### Comment on s Post View
![Comment on a post](/assests/image8.png)


## Links
<hr>

[URL of the deployed application](https://tech-blog-is.herokuapp.com/)

[URL of the GitHub repository](https://github.com/elliechayo/Tech-Blog)


## License
<hr>

MIT License

Copyright (c) [2023] 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.




