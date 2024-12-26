const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;


const commentSchema = new mongoose.Schema({
  postId: {
    type: ObjectId,
    ref: 'BlogPost', // References the BlogPost model
    required: true,
  },
  authorId: {
    type: ObjectId,
    ref: 'User', // References the User model
    required: true,
  },
  content: {
    type: String,
    required: true, // Content is mandatory
  },
  likes: {
    type: Number,
    default: 0, // Default likes to 0
  },
  parentId: {
    type: ObjectId,
    ref: 'Comment', // Self-referencing for nested comments
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set to current date
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Automatically set to current date
  },
});

// Middleware to update `updatedAt` on every update
commentSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
