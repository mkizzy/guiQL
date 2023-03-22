const User = require("../models/user.js")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require('dotenv').config()
const postLogin = async (req, res) => {
    try{
        const {email, password} = req.body;

        if(!email, !password) return res.status(400).json({'messsage': 'Email and password are required to login'})

        const user = await User.findOne({email: email.toLowerCase()});
        if(!user) return res.sendStatus(401)
        if(user && (await bcrypt.compare(password, user.password))){
            //creating tokens
            const accessToken = jwt.sign(
                {
                    "userID": user._id,
                    "email": user.email
                },
                process.env.ACCESS_TOKEN_KEY,{expiresIn: "300s"}
            );
            const refreshToken = jwt.sign(
                {
                    "userID": user._id,
                    "email": user.email
                },
                process.env.REFRESH_TOKEN_KEY,{expiresIn: "1d"}
            );

            user.refreshToken = refreshToken;
            user.save((err)=> {
                if(err){
                    console.log("Error saving the refresh token", err)
                    return
                }
            })
            res.cookie('jwt', refreshToken, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000})
            res.json({accessToken, 'success': `Welcome back ${user.firstName}!`})
        } else {
            return res.status(401)
        }
    }catch (err){
        return res.status(500).send("Something went wrong. Please try again")
    }
}

module.exports = postLogin