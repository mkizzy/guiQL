const User = require("../models/user.js")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const postLogin = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email: email.toLowerCase()});
        if(user && (await bcrypt.compare(password, user.password))){
            //want to send new token if we found a user that has the matching email and password

            /*
            This code is generating a JSON Web Token (JWT) for a user when they successfully log in. A JWT is a compact, URL-safe means of representing claims to be transferred between 
            two parties. In this case, the server is generating a JWT containing the user's userId and email information, along with a secret TOKEN_KEY that is stored on the server.
            The jwt.sign function takes three arguments:
                1.The payload, which in this case is an object containing the user's userId and email.
                2.The secret key, which is used to sign the token and should only be known to the server.
                3.An options object, which includes the token's expiration time (in this case, 24 hours from generation).
            Once the JWT is generated, it is returned to the client in the server's response. The client can then store the token and use it to authenticate future requests to the server.
            In this code, the JWT is returned in a JSON response along with some basic user information (email, first name, and last name) in the userDetails object. The client can extract
            the JWT from the response and include it in the Authorization header of future requests to the server. When the client sends a request to a protected endpoint, the server will 
            verify the JWT by decoding it using the same secret TOKEN_KEY and checking its expiration time. If the JWT is valid and has not expired, the server will allow the request to 
            proceed. If the JWT is invalid or has expired, the server will reject the request.
            */
            const token = jwt.sign(
                {
                    userId: user._id,
                    email
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "24h"
                }
            );
            
            res.cookie('token', token, {
                httpOnly: true,
                
            })

            return res.status(200).json({
                userDetails :{
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    token: token,
                }
            })
        }

        return res.status(400).send("Invalid credentials. Please try again")
    }catch (err){
        return res.status(500).send("Something went wrong. Please try again")
    }
}

module.exports = postLogin