//Dependências - Frameworks
const mysql = require("mysql");

//Conexão com o SGBD MySQL
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'Papelaria PapelTudo'
});

module.exports = { con };