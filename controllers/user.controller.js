// In this controller ,we write various function to perform asynchronous operations with regd db.
const User = require('../models/user.model.js');

// To get all the data (No specifics)
const getUsers = async ( req, res) =>{
    try{
        const users = await User.find({});
        res.status(200).json(users);
        // This sends the response withe the status code and in the json format
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

// To get an user with specific user
const getUserWithId = async (req, res) =>{
    try{
        const {id} = req.params;

        //Find the product by ID using Mongoose 'findById' method.
        const product = await User.findById(id).lean().exec();

        // Check if the products exists
        if(!product){
            return res.status(404).json({message: "User not found"});
        }

        // Return the product found as a response
        res.status(200).json(product);

    }
    catch(err){
        // Handle any errors that occur
        console.error(error);
        res.status(500).json({message: 'Interneal server error'});
    }
};


// To insert new data into the databse: Mongodb
const postUsers = async (req, res)=>{
    try{
        const product = await User.create(req.body);
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

const deleteUserOne = async (req, res) =>{
    try{
    const {id} = req.params;
      const blogDel = await User.findByIdAndDelete(id);
      // To check if User exists after deletion
      if(!blogDel){
        return res.status(404).json({message: "User Not Found"});
      }
      res.status(200).json({message: "User deleted successfully."});
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};

const updateUser = async (req, res) =>{
    try{
        const { id } = req.params;
        const {bio = " ",
        } = req.query;
        const updated = await User.updateOne(
        {_id: id},{$set: { bio }});
        //This is used to find the document by its number
        if(!updated)
        {
          console.log("User not updated");
        }
        console.log("User updated successfully! ")
        res.status(200).json(updated);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};



//Every controller function of the user are exported here
module.exports ={
    getUsers,
    getUserWithId,
    postUsers,
    deleteUserOne,
    updateUser,
}