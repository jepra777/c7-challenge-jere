const { UserProfile } = require('../models')

module.exports = async (req, res, next) => {
  try {
    // cari profile yang mau dicek apakah profile tersebut milik siapa disini
    const findProfile = await UserProfile.findOne({
      where: {
        id: req.user.id
      }
    })
    // disini di cek apakah todo milik si user yang login atau bukan, karena kita menyimpan token tadi ke dalam req.user, maka dari itu kita bisa membandingkan Todo.UserId === req.user.id
    if (findProfile.UserId === req.user.id) {
      // ini kenapa pake next() ini biar bisa lanjutin aja, alias dia memang authorized
      console.log('bener ini punya dia')
      next()
    } else {
      // disini ketika Todo.UserId tidak sama dengan User yang login, dia bakal munculin error kaya gini lah pokoknya
      res.status(403).json({ message: "kamu tidak memiliki akses" })
    }
  } catch (error) {
    next(error)
  }
} 