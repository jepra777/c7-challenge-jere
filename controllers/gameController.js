const { UserGameHistory, User } = require('../models')

class UserGameHistoryController {

    static viewAll(req, res) {
        UserGameHistory.findAll({
          order: [["UserId", 'ASC']],
          include: [{
            model: User,
            required: true
           }]
        })
          .then((data) => {
            res.render("gamehistories", { data })
          })
          .catch((error) => {
            console.log(error)
          })
      }

    static addGamehistories = async (req, res, next) => {    
        try {
            const stat = req.params.status
            let gameStatus=stat
            let dataCom=0
            let dataLose=0
            let dataWin=0
            if(gameStatus === "1"){
                dataWin=1
                dataLose = 0
                dataCom = 0
            }else if (gameStatus === "0"){
                dataLose=1
                dataCom=1
                dataWin = 0
            }
            const isGameExist = await UserGameHistory.findOne({ where: { UserId: req.cookies.UserId } })
            if (!isGameExist) {
                
                const payloadGame = {
                    UserId: req.cookies.UserId, win: dataWin, lose: dataLose, com: dataCom
                }
                const game = await UserGameHistory.create(payloadGame)

                //return res.status(409).json({ message: game })
                res.redirect('/game')

            }
            else{
                const updatedGame = {
                    win:isGameExist.win + dataWin, lose:isGameExist.lose + dataLose, com:isGameExist.com + dataCom
                }
                const updateGameHistory = await UserGameHistory.update(updatedGame, {
                    where: {
                        UserId: req.cookies.UserId
                    }
                })

                //return res.status(409).json({ updateGameHistory })
                res.redirect('/game')
            } 
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }
}

module.exports = { UserGameHistoryController }