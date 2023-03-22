const jwt = require('jsonwebtoken')
require('dotenv').config()
const User  = require('../models/user')


const verifyRefreshToken = async (req,res,next)=> {
    const refreshToken = req.cookies.jwt;
    console.log(refreshToken)
    if (!refreshToken) {
        return res.status(401).send({ message: 'No refresh token provided' });
    }

    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
        const user = await User.findById(decoded.userID)

        if (!user) {
            return res.status(401).send({ message: 'User not found' });
        }
        req.user = user;
        next();
    } catch (err) {
        return res.status(403).send({ message: 'Invalid refresh token' })
    }   

}

module.exports = verifyRefreshToken