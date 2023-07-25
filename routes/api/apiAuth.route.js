const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.post('/reg', async (req, res) => {
  try {
    const { login, password } = req.body;
    if (login && password) {
      let user = await User.findOne({ where: { login } });
      if (!user) {
        const hashPass = await bcrypt.hash(password, 10);
        user = await User.create({
          login,
          password: hashPass,
        });
        req.session.userId = user.id;
        res.locals.user = user.name;
        res.json({ message: 'ok' });
      } else {
        res.json({ message: 'Такой пользователь уже существует' });
      }
    } else {
      res.json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.json({ messageError: error.message });
  }
});

router.post('/log', async (req, res) => {
  try {
    const { login, password } = req.body;
    if (login && password) {
      let user = await User.findOne({ where: { login } });
      const pass = await bcrypt.compare(req.body.password, user.password);
      if (user.login === login && pass) {
        req.session.userId = user.id;
        res.json({ message: 'ok' });
      } else {
        res.json({ message: 'введены неверные данные' });
      }
    }
  } catch (error) {
    res.json({ messageError: error.message });
  }
});
module.exports = router;
