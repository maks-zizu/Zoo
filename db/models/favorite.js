'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate({ User, Animal }) {
      this.belongsTo(Animal, { foreignKey: 'animalId' });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Favorite.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Users', key: 'id' },
        onDelete: 'CASCADE',
      },
      animalId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Animals', key: 'id' },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Favorite',
    },
  );
  return Favorite;
};
