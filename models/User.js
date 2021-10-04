const { DataTypes } = require('sequelize');
const db = require('../services/db');

module.exports = db.define('user', {
  user_id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
  user_name: { type: DataTypes.STRING, allowNull: false },
  user_wins: { type: DataTypes.INTEGER, allowNull: false },
}, { tableName: 'users', timestamps: false });