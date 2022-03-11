const { UserProfile } = require('../models')

class ProfileController {
  static getProfile = async (req, res, next) => {
    // ambil userid dari cookies
    const { UserId } = req.cookies

    // ambil dari req.user yang diselipin dari authentikasi
    const userIdDariReqUser = req.cookies.UserId
    const userStatus = req.cookies.role

    try {
      if ( userStatus === "1" ){
        const userProfile = await UserProfile.findAll()
          res.status(200).json({ userProfile })
      }else{
      //res.status(200).json({ message: "Anda Bukan Super Admin" })
        const userProfile = await UserProfile.findOne({
        where: {
          UserId: userIdDariReqUser
        }
      })
      res.status(200).json({ userProfile })
      }
    } catch (error) {
      res.status(500).json(error)
    }
  }

  static getProfileById = async (req, res, next) => {
    try {
    //   const userBiodata = await UserBiodata.findByPk({
    //     where: {
    //       id: req.user.id
    //     }
    //   })
    //   res.status(200).json({ userBiodata })
     // ambil userid dari cookies
     const { UserId } = req.cookies

     // ambil dari req.user yang diselipin dari authentikasi
     const userIdDariReqUser = req.user.id
    const userProfile = await UserProfile.findOne({
        where: {
          UserId: userIdDariReqUser
        }
      })
      res.status(200).json({ userProfile })
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

module.exports = { ProfileController }