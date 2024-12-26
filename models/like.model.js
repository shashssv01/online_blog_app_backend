const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;


const likeSchema = new mongoose.Schema({
  number: {
    type: Number,
    default: 0,
  },
  userId: {
    type: ObjectId,
    ref: 'User', // References the User model
    required: true,
  },
  postId: {
    type: ObjectId,
    ref: 'BlogPost', // References the BlogPost model
    default: null, // Either `postId` or `commentId` will be provided
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set to the current date
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Automatically set to the current date
  },
});

// Ensuring that a like is either for a post or a comment, not both
likeSchema.pre('validate', function (next) {
  if (!this.postId && !this.commentId) {
    return next(new Error('A like must be associated with either a post or a comment.'));
  }
  next();
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;
