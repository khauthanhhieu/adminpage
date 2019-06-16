const Admin = require('../../models/users');

exports.check = async (req, res, next) => {
  const userExist = await Admin.check(req.query.email);
  res.json(userExist);
};