const BlogPost = require("../models/blog.model.js");

// To get all the blogs
// Need to initialize

const getBlogs = async (req, res) => {
  try {
    const blogs = await BlogPost.find({})
      .populate({ path: "author" })
      .lean()
      .exec();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await BlogPost.findById(id)
      .populate({ path: "author" })
      .lean()
      .exec();
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// User Id check is not verified. Only when the user id is passed,
// Then only we can create based on the user
const postBlog = async (req, res) => {
  //
  try {
    const blogs = await BlogPost.create(req.body).then((blog) => {
      if (!blog) {
        console.log("Blog creation failed");
      }
    });
    console.log("Blog creation successful", blogs);
    res.status(200).json({ message: "Blog creation successful" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Update Blog by Id
const updateBlogOne = async (req, res) => {
  try {
    const { id } = req.params;
    const { title = " " } = req.query;
    const updated = await BlogPost.updateOne({ _id: id }, { $set: { title } });
    //This is used to find the document by its number
    if (!updated) {
      console.log("Blog not updated");
    }
    console.log("Blog  updated successfully! ");
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Delete API by Id
// /api/product:id -> API endpoint
const deleteBlogOne = async (req, res) => {
  try {
    const { id } = req.params;
    const blogDel = await BlogPost.findByIdAndDelete(id).lean().exec();
    // To check if Blog exists after deletion
    if (!blogDel) {
      return res.status(404).json({ message: "Blog Not Found" });
    }
    res.status(200).json({ message: "Blog deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getBlogs,
  getBlogById,
  postBlog,
  updateBlogOne,
  deleteBlogOne,
};

// Do we need seperate API for /search???
