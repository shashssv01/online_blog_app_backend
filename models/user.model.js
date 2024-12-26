const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;


const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email address"],
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  profilePicture: {
    type: String,
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
// moongoose.Schema({}) : to create a schema

userSchema.methods.toJSON = function () {
    const userObject = this.toObject()
    delete userObject.password
    return userObject
}

const User = mongoose.model("User", userSchema);
module.exports = User;

// Schema in the form of object
