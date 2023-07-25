const router = require('express').Router();
const { Favorite } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { animId } = req.body;
    const userIdsess = req.session.userId;
    if (animId && userIdsess) {
      const favorites = await Favorite.create({
        userId: userIdsess,
        animalId: animId,
      });
      res.json({ message: 'ok' });
    }
  } catch (error) {
    res.json({ messageError: error.message });
  }
});

router.delete('/:idFavorite/delete', async (req, res) => {
  try {
    const { idFavorite } = req.params;
    const delFavorite = await Favorite.destroy({ where: { id: idFavorite } });
    res.json({ delFavorite });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
