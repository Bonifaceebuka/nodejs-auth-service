const Sequelize = require('sequelize');
const logger = require("moment-logger").default;

const { 
  DB_CONNECTION_DIALECT,
  DB_HOST,
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD
} = require('../config');

 const db_connect = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_CONNECTION_DIALECT,
  pool: { 
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

db_connect
  .authenticate()
  .then(() => {
    logger.info('Connection has been established successfully.');
    // console.log('Connection has been established successfully.');
  })
  .catch(err => {
    logger.error('Unable to connect to the database:', err);
  });

module.exports = db_connect;