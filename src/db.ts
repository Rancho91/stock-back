const { Sequelize, Op, DataTypes } = require('sequelize');
require('dotenv').config();
const {
   DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, PORT_DB
} = process.env; 



const db = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${PORT_DB}/${DB_NAME}`,
    {
       logging: false,
    }
 );


 module.exports = {
    ...db.models,
    conn: db,
 };
 