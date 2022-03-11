const { User, UserProfile } = require('../models')
const { hashPassword, verifyPassword } = require("../helpers/passwordHandler")
class ProfileController {
  static getProfile = async (req, res, next) => {
    // ambil userid dari cookies
    const { UserId } = req.cookies

    // ambil dari req.user yang diselipin dari authentikasi
    const userIdDariReqUser = req.cookies.UserId
    const userStatus = req.cookies.role

    try {
      if ( userStatus === "1" ){
        const user = await User.findAll()
          //res.status(200).json({ userProfile })
          res.render("users", { user })
      }else{
      //res.status(200).json({ message: "Anda Bukan Super Admin" })
        const user = await User.findAll({
        where: {
          id: userIdDariReqUser
        }
      })
      //res.status(200).json({ userProfile })
      res.render("users", { user })
      }
    } catch (error) {
      res.status(500).json(error)
    }
  }

  static getAddForm(req, res) {
    res.render("users/add")
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
        res.redirect("/profile")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static getEditForm(req, res) {
    const id = req.params.id
    User.findByPk(id)
      .then((data) => {
        console.log(data)
        res.render('users/edit', { data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static getProfileForm(req, res) {
    const id = req.params.id
    //UserProfile.findByPk(id)
    UserProfile.findAll({
      where: {
          UserId: req.params.id 
      },
    })
      .then((data) => {
        if (data[0] != null){
        console.log(data)
        res.render('users/profile', { data })}
        else{
        res.redirect(`/profile/addProfile/${id}`)
        
        }
      })
      
      .catch((err) => {
        console.log(err)
      })
  }

  static getAddProfileForm(req, res) {
    const id = req.params.id
    res.render("users/addProfile", {id})
  }

  static addProfile(req, res) {
    const id = req.params.id
    let newProfile = {
      UserId: id,
      fName: req.body.firstName,
      lName: req.body.lastName,
      bPlace: req.body.birthPlace,
      bDate: req.body.birthDate,
      gender: req.body.gender
    }

    UserProfile.create(newProfile)
      .then((_) => {
        res.redirect("/profile")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static editUser(req, res) {
    const id = req.params.id
    let updatedUser = {
      username: req.body.username,
      email: req.body.email,
      password: hashPassword(req.body.password),
      role: req.body.role
    }
    User.update(updatedUser, {
      where: {
        id: id
      }
    })
      .then(() => {
        res.redirect("/profile")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static editProfile(req, res) {
    const id = req.params.id
    console.log(id)
    let updatedProfile = {
      fName: req.body.firstName,
      lName: req.body.lastName,
      bPlace: req.body.birthPlace,
      bDate: req.body.birthDate,
      gender: req.body.gender
    }
    UserProfile.update(updatedProfile, {
      where: {
        id: id
      }
    })
      .then(() => {
        res.redirect("/profile")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static deleteUser(req, res) {
    const id = req.params.id
    UserProfile.destroy({
      where: { UserId: id },
    })
      .then(() => {
        User.destroy({
          where: { id: id },
        })
        res.redirect("/profile")
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = { ProfileController }