var express = require('express');
var router = express.Router();
var passport = require('passport');


// Require controller modules.

const users_controller = require('../controllers/usersController.js');


// Users ROUTES //
// GET user routes. //

router.get('/', users_controller.index);

router.get('/new', users_controller.new)
router.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

module.exports = router;
