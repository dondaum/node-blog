var express = require('express');
var router = express.Router();

/* GET welcome page. */
router.get('/', function(req, res, next) {
  res.render('welcome', { title: 'Welcome' });
});

module.exports = router;
