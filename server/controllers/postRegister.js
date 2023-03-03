const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const postRegister = async (req, res) => {
    try {
        const {firstName, lastName, email, password, confirmPassword} = req.body;
        
        //check if user exist
        const userExists = await User.exists({email});
        if(userExists){
            return res.status(409).send('Email has already been registered.');
        }
        
        if(password!==confirmPassword){
            return res.status(409).send('Please ensure that the passwords match')
        }
        //encrypting password
        const encryptedPassword = await bcrypt.hash(password, 10);
        
        //create a new user account in the db
        const user = await User.create({
            firstName,
            lastName,
            email: email.toLowerCase(),
            password: encryptedPassword
        })

        //creating a token
        const token = jwt.sign(
            {
                userId: user._id,
                email
            },
            process.env.TOKEN_KEY,
            {
                expiresIn:'24h'
            }
        )
        //sending info to client upon successful request
        res.status(201).json({
            userDetails:{
                email: user.email,
                token: token,
                firstName: user.firstName,
                lastName: user.lastName
            },
        });
    } catch (err) {
        return {
            error: err,
            status: 500,
            message: 'Error has occurred. Please try again'
        }
        // return res.status(500).send('Error has occured. Please try again.');
    }
}

module.exports = postRegister;