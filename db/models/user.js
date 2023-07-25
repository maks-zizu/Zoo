'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Animal, Favorite }) {
      this.hasMany(Animal, { foreignKey: 'userId' });
      this.hasMany(Favorite, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      login: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
