// User controller logic
const models = require('../models/index');


exports.index = function(req, res) {
    models.Users.findAll().then(function(users){
      res.render('users/index', {
        users: users
       });
    });
};

exports.new = function(req, res) {
  console.log('New user page is clicked ');
  res.render('users/new', { title: 'Create a new user'});
};

exports.create = function(req, res) {
  console.log(req.body.email);
  console.log(req.body.username);
  console.log(req.body.password);
  console.log(req.body.password_confirmation);



  models.Users.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    })
    .then(function() {
      res.redirect('/users');
  });
};
