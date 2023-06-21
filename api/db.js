const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'db',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'birth'
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur lors de la connexion à MySQL :', err);
    return;
  }
});

module.exports = connection;