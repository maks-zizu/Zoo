const router = require('express').Router();
const AnimalCard = require('../../components/AnimalCard');
const { Animal } = require('../../db/models');

router.get('/:idAnimal', async (req, res) => {
  const { idAnimal } = req.params;
  const animal = await Animal.findOne({
    where: { id: idAnimal },
  });
  res.renderComponent(AnimalCard, {
    title: animal.name,
    animal,
  });
});

module.exports = router;
