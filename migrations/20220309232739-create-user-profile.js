'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User_profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:{
            tableName: "Users",
            key: "id"
          }
        }
      },
      fName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      lName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      bPlace: {
        type: Sequelize.STRING,
        allowNull: true
      },
      bDate: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      aboutme: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('User_profiles');
  }
};