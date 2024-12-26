const jwt = require ('jsonwebtoken');
require('dotenv').config();

//Create a token
function generateToken(user) {
    const payload = { id: user.id, username: user.username};
    const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn : '1h'});
    return token;
}

//Verify a token
function verifyToken(token){
    try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        return decoded;

    } catch(err){
        console.log("Token verification failed:", err);
        return null;
    }
}

module.exports = { 
    generateToken,
    verifyToken
}

// // Example usage
// const user = { id: 1, username: "JohnDoe" };
// const token = generateToken(user);
// console.log("Generated Token:", token);

// const verified = verifyToken(token);
// console.log("Verified Payload:", verified);