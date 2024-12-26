const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const blogPostSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String, // Rich text can be stored as a string
      required: true,
    },
    author: {
      type: ObjectId,
      // This should reference the user id 
      ref: 'User', // This references the 'User' model
    },
    categories: {
      type: [String], // Array of category IDs or names
      default: [],
    },
    tags: {
      type: [String], // Array of tag names
      default: [],
    },
    coverImage: {
      type: String, // URL
    },
    published: {
      type: Boolean,
      default: false,
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    publishedAt: {
      type: Date,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;