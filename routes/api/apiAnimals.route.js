const router = require('express').Router();
const { Animal } = require('../../db/models');
const AnimalOne = require('../../components/Animal');

router.post('/addAnimal', async (req, res) => {
  try {
    const {
      name, url, description, price,
    } = req.body;
    if (name && url && description && price) {
      const animal = await Animal.create({
        name, url, description, price, userId: req.session.userId,
      });
      res.json({ html: res.renderComponent(AnimalOne, { animal }, { htmlOnly: true }) });
    } else {
      res.json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.json({ messageError: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const {
      name,
      price,
      description,
      url,
    } = req.body;
    const animalUpd = await Animal.update({
      name,
      price,
      description,
      url,
    }, { where: { id: req.params.id } });
    res.json({ animalUpd });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.delete('/:idAnimal/delete', async (req, res) => {
  try {
    const { idAnimal } = req.params;
    const delAnimal = await Animal.destroy({ where: { id: idAnimal } });
    res.json({ delAnimal });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
