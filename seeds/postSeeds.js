const { Post } = require("../models");

const posts = [
    {
        title: "Handlebars vs Helpers: Enhancing Templating in Web Development",
        content: "Handlebars, a popular templating engine, provides a versatile and intuitive way to render dynamic content in web applications. However, by leveraging helpers, developers can extend Handlebars' capabilities further, enabling the creation of custom functions and reusable logic to enhance templating and streamline data manipulation within the views, making it a powerful tool in the developer's arsena",
        createdBy: 1,
    },
    {
        title: "Authentication and authorization",
        content: "Authentication and authorization are two essential concepts in web development: authentication verifies the identity of users, while authorization determines what actions and resources they are allowed to access, ensuring secure and controlled system access.",
        createdBy: 1,
    },
    {
        title: "Object-Relational Mapping (ORM): Simplifying Database Interactions",
        content: "Object-Relational Mapping (ORM) bridges the gap between object-oriented programming and relational databases, providing developers with a convenient and intuitive way to interact with databases using familiar object-oriented paradigms. By abstracting away the complexities of SQL queries and data mapping, ORM frameworks like Sequelize and Hibernate simplify the development process, increase productivity, and enable efficient data management in modern applications",
        createdBy: 2,
     },

    {
        title: "Why MVC is Important",
        content: "The Model-View-Controller (MVC) architectural pattern is crucial in web development as it promotes separation of concerns, enhances code maintainability, and facilitates efficient collaboration between designers and developers, leading to scalable and robust applications.",
        createdBy: 2,
    },
];

const postSeeds = () => Post.bulkCreate(posts);

module.exports = postSeeds;