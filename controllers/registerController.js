const { User, UserProfile } = require('../models')
const { hashPassword, verifyPassword } = require("../helpers/passwordHandler")
class RegisterController {
  

  static getAddForm(req, res) {
    res.render("register")
  }

  static addUser(req, res) {
    let newUser = {
      username: req.body.username,
      email: req.body.email,
      password: hashPassword(req.body.password),
      role: req.body.role
    }

    User.create(newUser)
      .then((_) => {
        res.redirect("/")
      })
      .catch((err) => {
        console.log(err)
      })
  }

}

module.exports = { RegisterController }