const route = require('express').Router();

route.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

module.exports = route;