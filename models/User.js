const { DataTypes } = require('sequelize');

module.exports = sequelize => sequelize.define('user', {
  user_id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
  user_name: { type: DataTypes.STRING, allowNull: false },
  user_wins: { type: DataTypes.INTEGER, allowNull: false },
}, { tableName: 'users', timestamps: false });