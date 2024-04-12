import { Sequelize } from 'sequelize';

const db = new Sequelize('backen-rsg', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

});

export default db;