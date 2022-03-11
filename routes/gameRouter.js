const { UserGameHistoryController } = require('../controllers/gameController')
const authentication = require('../middleware/authentication')
//const authorisasiBiodata = require('../middleware/authorisasiBiodata')
const gameRouter = require('express').Router()


/**
 * proses authentikasi yang terjadi
 * 1. dari login, login controller akan generate cookies dan diselipin di browser
 * 2. di biodataRouter.get("/"), ketika user akses ("/") dia akan masuk ke middleware authentikasi terlebih dahulu
 */
gameRouter.use(authentication)
gameRouter.post("/", UserGameHistoryController.addGamehistories)
//profileRouter.get("/:id", authorisasiBiodata, BiodataController.getBiodataById)

module.exports = gameRouter