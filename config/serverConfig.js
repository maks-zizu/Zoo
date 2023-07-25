const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const ssr = require('../middleware/renderComponent');
const auth = require('../middleware/auth');
const sessionConfig = require('./sessionConfig');

const serverConfig = (app) => {
  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(auth);
  app.use(ssr);
  app.use(express.urlencoded({ extended: true })); // читать данные из тела запросов
  app.use(express.json()); // читать JSON-данные из тела запросов
};

module.exports = serverConfig;
