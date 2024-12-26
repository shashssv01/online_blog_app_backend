const express = require('express');
const routerBlog = express.Router();
//Importing the model so that the structure of data acc to various use cases
const BlogPost = require('../models/blog.model.js');
// Importing the controller function
const { getBlogs, postBlog, updateBlogOne, deleteBlogOne, getBlogById } = require('../controllers/blog.controller.js');
//To get all the db on the specific endpoint


routerBlog.get('/', getBlogs);

routerBlog.get('/:id', getBlogById);

routerBlog.post('/',postBlog);

routerBlog.put('/:id',updateBlogOne);

routerBlog.delete('/:id',deleteBlogOne);


module.exports = routerBlog;
