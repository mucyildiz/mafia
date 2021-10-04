const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const User = require('../models/user');

passport.serializeUser((user, done) => {
  done(null, user.user_id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then(user => {
      done(null, user);
    })
});

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
  },
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findByPk(profile.id);
  
    if(existingUser){
      return done(null, existingUser);
    }

    const newUser = await User.create({
      user_id: profile.id,
      user_name: profile.name.givenName,
      user_wins: 0
    }).catch(err => console.log(err));
  
    done(null, newUser);
  })
);