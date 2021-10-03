const User = require('../models/User');

module.exports = (app) => {
  app.get('/api/test_db', async (req, res) => {
    const user = await User.findByPk('0');
    res.send(user);
  });

  app.post('/api/user', async (req, res) => {
    return User.create({
      user_id: req.body.user_id,
      user_name: req.body.user_name,
      user_wins: req.body.user_wins
    });
  });
}