/* routes/users.js - Chloe Baker - 301062067 - October 22, 2020 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
