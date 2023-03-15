const express = require('express')
const router = express.Router()
const authController = require("../controllers/authController")
const Joi = require('joi')
const { joiPasswordExtendCore } = require('joi-password');
const joiPassword = Joi.extend(joiPasswordExtendCore);
const validator = require('express-joi-validation').createValidator({})

const registerSchema = Joi.object({
    firstName: Joi.string().min(2).max(30).required(),
    lastName: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
    password:joiPassword
        .string()
        .minOfSpecialCharacters(1)
        .minOfLowercase(1)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .min(8)
        .noWhiteSpaces()
        .required(),
    confirmPassword: Joi.string().required().valid(Joi.ref('password'))
})

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password:Joi.string().min(8).max(20).required(),
})

router.post(
    "/register", 
    validator.body(registerSchema),
    authController.postRegister
)

router.post(
    "/login", 
    validator.body(loginSchema),
    authController.postLogin
)

router.delete(
    "/deleteUser",
    authController.deleteUser
)

module.exports = router