'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_game_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_game_history.belongsToMany(models.User)
    }
  }
  User_game_history.init({
    userId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    gStatus: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_game_history',
  });
  return User_game_history;
};