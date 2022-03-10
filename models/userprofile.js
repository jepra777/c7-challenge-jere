'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserProfile.belongsTo(models.User)
    }
  }
  UserProfile.init({
    fName: DataTypes.STRING,
    lName: DataTypes.STRING,
    bPlace: DataTypes.STRING,
    bDate: DataTypes.DATEONLY,
    gender: {
      types: DataTypes.ENUM,
      values: ["Male", "Female", "null"],
      validate: {
        isIn: [["Male", "Female", "null"]]
      }
    }
  }, {
    sequelize,
    modelName: 'UserProfile',
  });
  return UserProfile;
};