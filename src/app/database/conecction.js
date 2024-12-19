import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: process.env.DATABASE_DIALECT,
    dialectModule: require('mysql2'),
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: 3306,
});

export default sequelize;