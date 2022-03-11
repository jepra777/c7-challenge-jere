const { RegisterController } = require('../controllers/registerController')
const registerRouter = require('express').Router()

registerRouter.get("/", RegisterController.getAddForm)
registerRouter.post("/add", RegisterController.addUser)

module.exports = registerRouter