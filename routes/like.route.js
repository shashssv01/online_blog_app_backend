const express = require('express');
const routerLike = express.Router();
//Importing the model so that the structure of data acc to various use cases
const Like = require('../models/like.model.js');
// Importing the controller function
const { updateLike,
    deleteLikeOne,
    postLikes,
    getLikes,
    getLikeWithId } = require('../controllers/like.controller.js');
//To get all the db on the specific endpoint

//Routes
routerLike.get('/', getLikes);
routerLike.get('/:id', getLikeWithId);
routerLike.post('/',postLikes);
routerLike.delete('/:id',deleteLikeOne);
routerLike.put('/:id',updateLike);


module.exports = routerLike;
