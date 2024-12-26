const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true, // Ensure category names are unique
    required: true, // Category name is mandatory
    trim: true, // Remove leading/trailing whitespace
  },
  blogId:{
    type: ObjectId,
    ref: 'BlogPost',
  },
  description: {
    type: String,
    default: '', // Optional description
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

// Middleware to update `updatedAt` on each save
categorySchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
