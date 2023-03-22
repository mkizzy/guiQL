const User = require("../models/user.js")
const jwt = require('jsonwebtoken')
require('dotenv').config()


//ASSIGNING NEW ACCESS TOKEN UPON EXPIRATION
const handleRefreshToken = (req,res) => {
    const cookies = req.cookies
    if(!cookies?.jwt) return res.sendStatus(401);

    const refreshToken = cookies.jwt
    // console.log({refreshToken})
    const user = User.findOne({refreshToken: refreshToken})
    // console.log({user})
    if(!user) return res.sendStatus(403)

    jwt.verify(
        refreshToken, 
        process.env.REFRESH_TOKEN_KEY,
        (err, decoded) => {
            if(err || user.id !== decoded.userID){
                return res.sendStatus(505)
            } 
            const accessToken = jwt.sign(
                {
                    "userID": decoded.userId,
                    "email" : decoded.email
                },
                process.env.ACCESS_TOKEN_KEY,
                {expiresIn: "300s"}
            );
            res.json({accessToken})
        }
    )
}

module.exports = {handleRefreshToken}