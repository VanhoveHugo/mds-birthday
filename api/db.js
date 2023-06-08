const mysql = require('mysql');

// Configuration de la connexion
const connection = mysql.createConnection({
  host: 'localhost',     // L'adresse IP de ton conteneur MySQL
  port: 3306,            // Le port sur lequel ton conteneur MySQL est exposé
  user: 'root',          // L'utilisateur de la base de données
  password: 'password',  // Le mot de passe de l'utilisateur
  database: 'mydatabase' // Le nom de la base de données à laquelle tu souhaites te connecter
});

// Établissement de la connexion
connection.connect((err) => {
  if (err) {
    console.error('Erreur lors de la connexion à MySQL :', err);
    return;
  }

  console.log('Connexion à MySQL établie avec succès !');

  // Ton code d'application ici

  // Fermeture de la connexion lorsque tu as terminé
  connection.end();
});