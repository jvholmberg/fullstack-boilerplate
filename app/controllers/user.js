var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  passport = require('passport'),
  bcrypt = require('bcryptjs');

module.exports = function(app) {
  app.use('/user', router);
};

router.post('/register', (req, res) => {

  // Check if passwords match
  if (req.body.password !== req.body.password2) {
    return res.redirect('/register');
  }

  // Check if username is taken
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) { return console.log(err); }
    if (user) { return console.log(user); }

    // Encrypt password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) { return console.log(err); }

        User.create({
          username: req.body.username,
          password: hash
        }, (err, user) => {
          if (err) { return res.json(err); }
          return res.json(getProfile(user));
        });
      });
    });
  });
});

router.post('/login',
  passport.authenticate('local', { failWithError: false }),
    (req, res) => {
      return res.json(getProfile(req.user));
    },
    (err, req, res) => {
      return res.json(err);
    }
);

router.post('/logout', (req, res) => {
  req.logout();
  res.json(null);
});

router.get('/profile', (req, res) => {
  if (!req.user) return res.redirect('/');
  res.json(getProfile(req.user));
});

router.get('/search/:query', (req, res) => {
  if (!req.user) return res.redirect('/');

});

function getProfile(user) {
  console.log(user);
  return {
    token: user.token,
    username: user.username,
    displayName: user.displayName,
    conversations: user.conversations,
    notifications: user.notifications,
    pendingInvites: user.pendingInvites,
    memberOf: user.memberOf
  }
}
