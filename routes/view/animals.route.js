const router = require('express').Router();
const AnimalList = require('../../components/AnimalList');
const { Animal } = require('../../db/models');
const UpdateForm = require('../../components/UpdateForm');

router.get('/', async (req, res) => {
  const animals = await Animal.findAll();
  res.renderComponent(AnimalList, { title: 'Животные', animals });
});

router.get('/updForm/:id', async (req, res) => {
  const animal = await Animal.findOne({ where: { id: req.params.id } });
  res.renderComponent(UpdateForm, { title: 'Изменения', animal });
});

module.exports = router;
