const express = require('express');
const routerComment = express.Router();
//Importing the model so that the structure of data acc to various use cases
const Comment = require('../models/comment.model.js');
// Importing the controller function
const { getComments,
    deleteCommentOne,
    postComments,
    getCommentsWithId } = require('../controllers/comment.controller.js');
//To get all the db on the specific endpoint

//Routes
routerComment.get('/', getComments);
routerComment.get('/:id', getCommentsWithId);
routerComment.post('/',postComments);
routerComment.delete('/:id',deleteCommentOne);


module.exports = routerComment;
