const authRouter = require('./authRouter')
const profileRouter = require('./profileRouter')
const gameRouter = require('./gameRouter')
const router = require('express').Router()

router.get("/", (req, res) => {
    res.render("home")
})

router.use('/auth', authRouter)
router.use('/profile', profileRouter)
router.use('/game', gameRouter)

module.exports = router