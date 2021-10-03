module.exports = (app, db) => {
  const User = require('../models/User')(db);
  app.get('/api/test_db', async (req, res) => {
    const users = await User.findAll({
      where: {
        user_id: '0'
      }
    });
    res.send(users);
  });
}