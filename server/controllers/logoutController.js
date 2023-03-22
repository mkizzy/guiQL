const User = require("../models/user.js")

//ASSIGNING NEW ACCESS TOKEN UPON EXPIRATION
const handleLogout = async (req,res) => {
    //make sure we delete the access token in the frontend
    const cookies = req.cookies
    if(!cookies?.jwt) return res.sendStatus(204);

    const refreshToken = cookies.jwt
    // console.log({refreshToken})
    const user = await User.findOne({refreshToken: refreshToken})
    // console.log({user})
    if(!user) {
        res.clearCookie('jwt', {httpOnly: true});
        res.sendStatus(204)
    }

    //delete the refresh token in db
    user.refreshToken = null
    await user.save()
}

module.exports = {handleLogout}