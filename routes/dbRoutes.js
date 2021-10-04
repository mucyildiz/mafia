const User = require('../models/User');

module.exports = (app) => {
  app.post('/api/user', async (req, res) => {
    const existingUser = await User.findByPk(req.body.user_id);
    if(existingUser){
      console.log("User already exists.")
      res.end();
      return;
    }
    await User.create({
      user_id: req.body.user_id,
      user_name: req.body.user_name,
      user_wins: req.body.user_wins
    }).catch(err => console.log(err));
    res.end();
  });
}