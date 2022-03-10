require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.SERVER_PORT || 3000
const router = require('./routes')

//Utilities
const cookieParser = require('cookie-parser')

//Middlewares
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
app.use(cookieParser())

//Routes
app.use(router)

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`)
})