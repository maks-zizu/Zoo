const router = require('express').Router();
const authRouter = require('./view/auth.route');
const apiAnimalsRouter = require('./api/apiAnimals.route');
const animalsRouter = require('./view/animals.route');
const apiAuthRouter = require('./api/apiAuth.route');
const animalCard = require('./view/animal.route');
const Favorites = require('./view/favorites.route');
const apiFavoritesRouter = require('./api/apiFavorites.route');

router.use('/animal', animalCard);
router.use('/api/animals', apiAnimalsRouter);
router.use('/favorites', Favorites);
router.use('/auth', authRouter);
router.use('/api/auth', apiAuthRouter);
router.use('/api/favorites', apiFavoritesRouter);
router.use('/', animalsRouter);

module.exports = router;
