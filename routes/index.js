const authRouter = require('./authRouter')
const dashboardRouter = require('./dashboardRouter')
const profileRouter = require('./profileRouter')
const gameRouter = require('./gameRouter')
const playGameRouter = require('./playGameRouter')
const registerRouter = require('./registerRouter')
const router = require('express').Router()

router.get("/", (req, res) => {
    res.render("home")
})

router.use('/auth', authRouter)
router.use('/dashboard', dashboardRouter)
router.use('/profile', profileRouter)
router.use('/gamehistories', gameRouter)
router.use('/game', playGameRouter)
router.use('/register', registerRouter)

module.exports = router