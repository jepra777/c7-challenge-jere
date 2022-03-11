const AuthController = require("../controllers/authController")
const { validatorHandler } = require("../middleware/validatorJoi")
const { registerUserSchema, loginUserSchema } = require('../validation/authSchema.joi')
const authRouter = require('express').Router()

// authRouter.post("/register", validatorHandler(registerUserSchema, "body"), AuthController.register)

// authRouter.post("/login", validatorHandler(loginUserSchema, "body"), AuthController.login)

authRouter.post("/register", AuthController.register)

authRouter.post("/login", AuthController.login)
module.exports = authRouter 