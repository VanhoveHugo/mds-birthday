const connection = require('./db');

const route = require('express').Router();

route.get('/', (req, res) => {
    connection.query('SELECT CONCAT(firstname, " ", lastname) AS name FROM birthdays WHERE MONTH(birthday) = MONTH(NOW()) AND DAY(birthday) = DAY(NOW())', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

module.exports = route;