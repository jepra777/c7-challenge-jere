const { User, UserGameHistory } = require("../models")

class DashboardController {

    static viewAll(req, res) {
        User.findAll({
        order: [["id", 'ASC']],
        include: [{
            model: UserGameHistory,
            required: true
           }]
    })
        .then((data) => {
            res.render("dashboard", { data, userCount: data.length })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}
module.exports = DashboardController;