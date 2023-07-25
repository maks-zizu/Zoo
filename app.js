require('@babel/register');
const express = require('express');
const { sequelize } = require('./db/models');
const serverConfig = require('./config/serverConfig');
const indexRouter = require('./routes/index.route');

const app = express();
const PORT = 3020;
serverConfig(app);

app.use('/', indexRouter);

app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Connection BD has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
