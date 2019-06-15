var createError = require('http-errors');
var express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var conn = require('./controllers/connection');
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;

var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admins');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/home');
var categoryRouter = require('./routes/categories');
var productRouter = require('./routes/products');
var statisticsRouter = require('./routes/statistics');
var orderRouter = require('./routes/orders');
var loginRouter = require('./routes/login');
const session=require('express-session');
var app = express();
var md51 = require('md5')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:"mysecret" }))
app.use(passport.initialize())
app.use(passport.session())


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admins', adminRouter);
app.use('/home', homeRouter);
app.use('/categories', categoryRouter);
app.use('/products', productRouter);
app.use('/statistics', statisticsRouter);
app.use('/orders', orderRouter);
app.post('/login',
  passport.authenticate ('local', { successRedirect: '/home',
                                   failureRedirect: '/login'})
);
app.use('/login', loginRouter);
passport.use(new LocalStrategy((username,password,done)=>
  {
    console.log(username)
    conn.query('SELECT * FROM admins WHERE username = ?',username, function (err, users) {
      
      if (err) return done(null,false);
      var res1=md51(password);
      console.log(users[0].password)
      if(users[0] && users[0].password===res1)
     {
        return done(null,users[0])
      }else{
        return done(null,false)
      }
      
    })
    
  }
));
passport.serializeUser((user,done)=>{
  done(null,user.username);

})
passport.deserializeUser((name,done)=>{
  
conn.query('SELECT * FROM admins WHERE username = ?',name, function (err, users) {
  if (err) throw err;
  if(users[0]){
    return done(null,users[0])
  }else{
    return done(null,false)
  }
})

})
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
