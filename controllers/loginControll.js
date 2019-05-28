var home = require('express');

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));


exports.loadPage = function(req, res) {
	res.render('login', {title: 'Express' });
}

exports.check = function(req, res) {
	passport.authenticate('login', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
}