const { ProfileController } = require('../controllers/profileController')
const authentication = require('../middleware/authentication')
//const authorisasiBiodata = require('../middleware/authorisasiBiodata')
const profileRouter = require('express').Router()


/**
 * proses authentikasi yang terjadi
 * 1. dari login, login controller akan generate cookies dan diselipin di browser
 * 2. di biodataRouter.get("/"), ketika user akses ("/") dia akan masuk ke middleware authentikasi terlebih dahulu
 */
profileRouter.use(authentication)
profileRouter.get("/", ProfileController.getProfile)
//profileRouter.get("/:id", authorisasiBiodata, BiodataController.getBiodataById)

module.exports = profileRouter