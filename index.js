const express = require('express');
const keys = require('./config/keys');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(`postgres://${keys.username}:${keys.password}@${keys.host}:${keys.port}/${keys.database}`);
sequelize.authenticate().then(() => {
  console.log('Connection to database has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

const app = express();

require('./routes/authRoutes')(app);
require('./routes/dbRoutes')(app, sequelize);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))

  const path = require('path');
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))