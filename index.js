const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
// For importing dot env module
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const port = process.env.PORT || 80;
const host = process.env.HOST || '0.0.0.0'

//Importing Route Files
const routerBlog = require('./routes/blog.route');
const routerUser = require('./routes/user.route');
const routerLike = require('./routes/like.route');
const routerComment = require('./routes/comment.route');

//Adding Middleware

// Enable CORS for all routes
app.use(cors());
// Parsing the req in the json format middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))
// With this line we can add the Form way like Key:value pair into the db.


//Routes
app.use('/users', routerUser);
app.use('/blogs', routerBlog);
app.use('/likes', routerLike);
app.use('/comment', routerComment);

//For Default , API End point
app.get('/', (req, res)=>{
    res.send("Hello, this is the response from Node  Blah API!"); 
})



//Connecting to the mongo db database.
mongoose.connect('mongodb+srv://admin29:Dhanvin%4029@cluster1.2aocv.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster1')
.then(()=>{
    console.log("Connected to the database");
})
.catch(()=>{
    console.log(" Ccnnection failed!")
});

app.listen(port, host, ()=>{
    console.log(`Server running in the port: ${port}`);
});

