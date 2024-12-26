const express = require('express');
const routerUser = express.Router();
//Importing the model so that the structure of data acc to various use cases
const User = require('../models/user.model.js');
// Importing the controller function
const { getUsers, getUserWithId, deleteUserOne, updateUser, postUsers } = require('../controllers/user.controller.js');
//To get all the db on the specific endpoint

//Routes
routerUser.get('/', getUsers);
routerUser.get('/:id', getUserWithId);
routerUser.post('/',postUsers);
routerUser.delete('/:id',deleteUserOne);
routerUser.put('/:id',updateUser);


module.exports = routerUser;
