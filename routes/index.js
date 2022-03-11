const authRouter = require('./authRouter')
const profileRouter = require('./profileRouter')
const router = require('express').Router()

router.get("/", (req, res) => {
    res.render("home")
})

router.use('/auth', authRouter)
router.use('/profile', profileRouter)

module.exports = router