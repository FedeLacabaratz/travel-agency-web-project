const Sequelize = require('sequelize');
require('dotenv').config({ path: 'variables.env' });

// Creo la base de datos y la traigo desde MAMP. Parametros: 1ro: nombre de la DB, 2do: Username (si no hay pongo 'root'), 3ro: Password(si no hay pongo 'root'), 4to: opciones de configuración
module.exports = new Sequelize(process.env.DB_NOMBRE, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: '0'
});