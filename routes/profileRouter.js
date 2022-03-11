const { ProfileController } = require('../controllers/profileController')
const authentication = require('../middleware/authentication')
const profileRouter = require('express').Router()

profileRouter.use(authentication)
profileRouter.get("/", ProfileController.getProfile)
profileRouter.get("/add", ProfileController.getAddForm)
profileRouter.post("/add", ProfileController.addUser)
profileRouter.get("/:id/delete", ProfileController.deleteUser)
profileRouter.get("/:id/edit", ProfileController.getEditForm)
profileRouter.post("/:id/edit", ProfileController.editUser)
profileRouter.get("/:id/profile", ProfileController.getProfileForm)
profileRouter.post("/:id/profile", ProfileController.editProfile)
profileRouter.get("/addProfile/:id", ProfileController.getAddProfileForm)
profileRouter.post("/addProfile/:id", ProfileController.addProfile)

module.exports = profileRouter