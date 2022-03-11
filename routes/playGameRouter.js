const authentication = require('../middleware/authentication')
const gameRouter = require('express').Router()

gameRouter.use(authentication)
gameRouter.get('/', (req,res) =>{
    res.render('game')
})

module.exports = gameRouter