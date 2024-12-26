// In this controller ,we write various function to perform asynchronous operations with regd db.
const Comment = require('../models/comment.model.js');

// To get all the comments data (No specifics)
const getComments = async ( req, res) =>{
    try{
        const comments = await Comment.find({}).lean().exec();
        res.status(200).json(comments);
        // This sends the response withe the status code and in the json format
    }
    catch(err){
        res.status(500).json({message: error.message});
    }
};

// To get an user with specific user
const getCommentsWithId = async (req, res) =>{
    try{
        const {id} = req.params;

        //Find the comments by ID using Mongoose 'findById' method.
        const commentsId = await Comment.findById(id).lean().exec();

        // Check if the comments exists
        if(!commentsId){
            return res.status(404).json({message: "User not found"});
        }

        // Return the Comments based on id found as a response
        res.status(200).json(commentsId);

    }
    catch(err){
        // Handle any errors that occur
        console.error(error);
        res.status(500).json({message: 'Interneal server error'});
    }
};


// To insert new data into the databse: Mongodb
const postComments = async (req, res)=>{
    try{
        const commentPost = await Comment.create(req.body);
        res.status(200).json(commentPost);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

const deleteCommentOne = async (req, res) =>{
    try{
    const {id} = req.params;
      const commentDel = await Comment.findByIdAndDelete(id).lean().exec();
      // To check if Comment exists after deletion
      if(!commentDel){
        return res.status(404).json({message: "User Not Found"});
      }
      res.status(200).json({message: "User deleted successfully."});
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};


//Every controller function of the Comments are exported here
module.exports ={
    getComments,
    deleteCommentOne,
    postComments,
    getCommentsWithId
}