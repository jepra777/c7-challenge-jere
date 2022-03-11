const { UserGameHistoryController } = require('../controllers/gameController')
const authentication = require('../middleware/authentication')
const gameRouter = require('express').Router()

gameRouter.use(authentication)
gameRouter.get("/", UserGameHistoryController.viewAll)
gameRouter.get("/add/:status", UserGameHistoryController.addGamehistories)

module.exports = gameRouter