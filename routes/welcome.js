var express = require('express');
var router = express.Router();


// Require controller modules.

const welcome_controller = require('../controllers/welcomeController.js');


// Welcome ROUTES //
// GET welcome page. //

router.get('/', welcome_controller.index);

router.get('/about', welcome_controller.about)

module.exports = router;
