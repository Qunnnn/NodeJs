const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '20092001', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;