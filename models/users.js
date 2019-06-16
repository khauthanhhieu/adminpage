var conn = require('../controllers/connection');

exports.User = function(){
    return {
        id: Number,
        username: String,
        password: Number,
        fullname:String,
        tel:Number,
        email:String,
        birthday:Date,
        address:String,
        isdelete:Boolean,

    }
}
const get = async (email) => {
    return await await conn.query('SELECT * FROM admins WHERE email = ?',email);//dbs.production.collection(USERS).findOne({email});
  };

const check = async (username) => {
    const user = await conn.query('SELECT * FROM users WHERE username = ?',username);
    if (user)
      return true;
    return false;
  };
  
  exports.check = check;