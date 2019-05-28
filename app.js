var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var conn = require('./controllers/connection');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  {
    usernameField: 'Username',
    passwordField: 'Password',
    passReqToCallback: true //passback entire req to call back
  }, function (req, username, password, done) {
    if (!username || !password) {
      console.log("login fail");
      return done(null, false);
    }
    conn.query("select * from admins where username = ?", [username], function (err, rows) {
      console.log(err);
      console.log(rows);
      if (err) {
        console.log("login fail");
        return done();
      }
      if (!rows.length) {
        console.log("login fail");
        return done(null, false);
      }

      var dbPassword = rows[0].password;
      if (!(dbPassword == passport)) {
        console.log("login fail");
        return done(null, false);
      }
      console.log("login success");
      return done(null, rows[0]);
    });
  }
));


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/home');
var categoryRouter = require('./routes/categories');
var productRouter = require('./routes/products');
var statisticsRouter = require('./routes/statistics');
var orderRouter = require('./routes/orders');
var loginRouter = require('./routes/login');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);
app.use('/categories', categoryRouter);
app.use('/products', productRouter);
app.use('/statistics', statisticsRouter);
app.use('/orders', orderRouter);
app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login'})
);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
