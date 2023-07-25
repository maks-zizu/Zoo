const { User } = require("../db/models");

async function auth(req, res, next) {
  if (req.session.userId) {
    const user = await User.findOne({ where: { id: req.session.userId } });
    res.locals.userLogin = user.login;
    res.locals.userId = user.id;
    res.locals.userStat = user.isAdmin;
  }
  next();
}

module.exports = auth;
