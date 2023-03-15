const postLogin = require("./postLogin")
const postRegister = require("./postRegister")
const User = require("../models/user.js")

const deleteUser = async (req, res, next) => {
    try{
        const { email } = req.body;
        const deletedUser = await User.findOneAndDelete({email});
        // console.log({deletedUser})
        // if(!deletedUser){
        //     return res.status(400).json({ err: 'User not found'})
        // }
        // return res.status(204).json({ err: 'User deleted successfully'})
        return res.status(204).send(`${email} deleted succesfully`)
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    postLogin,
    postRegister,
    deleteUser
}