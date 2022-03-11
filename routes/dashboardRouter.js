const DashboardController = require('../controllers/dashboardController');

const dashboardRouter = require('express').Router();

dashboardRouter.get("/", DashboardController.viewAll)
module.exports = dashboardRouter;