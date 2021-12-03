import { Sequelize, Dialect } from 'sequelize'
const dotenv = require('dotenv')
dotenv.config()

console.log(process.env.DB_DATABASE)

export const connect = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_USERNAME,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT as Dialect
    }
)