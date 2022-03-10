'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_profile.belongsTo(models.User)
    }
  }
  User_profile.init({
    userId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    fName: DataTypes.STRING,
    lName: DataTypes.STRING,
    bPlace: DataTypes.STRING,
    bDate: DataTypes.DATEONLY,
    aboutme: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_profile',
  });
  return User_profile;
};