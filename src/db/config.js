const { Sequelize } = require ('sequelize');

const dotenv = require ("dotenv");
dotenv.config({path: './.env'});

const sequelize = new Sequelize(process.env.db_name, process.env.db_username, process.env.db_password,{
    host: process.env.db_host,
    dialect: process.env.db_dialect
})

const db = {};

db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.users = require("../schema/users")(sequelize, Sequelize)

module.exports = db