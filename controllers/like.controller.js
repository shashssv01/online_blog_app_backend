// In this controller ,we write various function to perform asynchronous operations with db.
const Like = require('../models/like.model.js');

// To get all the data (No specifics)
const getLikes = async ( req, res) =>{
    try{
        const likes = await Like.find({}).lean().exec();
        res.status(200).json(likes);
        // This sends the response withe the status code and in the json format
    }
    catch(err){
        res.status(500).json({message: error.message});
    }
};

// To get an Like with specific user
const getLikeWithId = async (req, res) =>{
    try{
        const {id} = req.params;

        //Find the product by ID using Mongoose 'findById' method.
        const like = await Like.findById(id).lean().exec();

        // Check if the Like exists
        if(!like){
            return res.status(404).json({message: "User not found"});
        }

        // Return the likes found as a response
        res.status(200).json(like);

    }
    catch(err){
        // Handle any errors that occur
        console.error(error);
        res.status(500).json({message: 'Interneal server error'});
    }
};


// To insert new likes data into the databse: Mongodb
const postLikes = async (req, res)=>{
    try{
        const likePost = await Like.create(req.body);
        res.status(200).json(likePost);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

const deleteLikeOne = async (req, res) =>{
    try{
    const {id} = req.params;
      const likeDel = await Like.findByIdAndDelete(id).lean().exec();
      // To check if Like exists after deletion
      if(!likeDel){
        return res.status(404).json({message: "Like Not Found"});
      }
      res.status(200).json({message: "Like deleted successfully."});
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};

const updateLike = async (req, res) =>{
    try{
        const { id } = req.params;
        const {bio = " ",
        } = req.query;
        const Likeupdated = await User.updateOne(
        {_id: id},{$set: { bio }});
        //This is used to find the document by its number
        if(!Likeupdated)
        {
          console.log("Like  not updated");
        }
        console.log("Like updated successfully! ")
        res.status(200).json(updated);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};



//Every controller function of the user are exported here
module.exports ={
  updateLike,
  deleteLikeOne,
  postLikes,
  getLikes,
  getLikeWithId
}