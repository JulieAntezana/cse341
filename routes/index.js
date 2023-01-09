const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Ann Elliot');
});

module.exports = routes;