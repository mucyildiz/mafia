const keys = require('../config/keys');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(`postgres://${keys.username}:${keys.password}@${keys.host}:${keys.port}/${keys.database}`);
sequelize.authenticate().then(() => {
  console.log('Connection to database has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;