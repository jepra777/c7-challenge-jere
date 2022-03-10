require('dotenv').config()
module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "dbc7jere",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "port": process.env.DB_PORT,
    "logging": true
  }
}