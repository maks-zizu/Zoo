const router = require('express').Router();
const Favorites = require('../../components/Favorites');
const { Animal, Favorite } = require('../../db/models');

router.get('/', async (req, res) => {
  const favorites = await Favorite.findAll({
    where: { userId: req.session.userId },
    include: { model: Animal },
  });

  res.renderComponent(Favorites, { title: 'Favorites', favorites });
});

module.exports = router;
