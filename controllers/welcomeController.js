// Welcome routes.

exports.index = function(req, res) {
    res.render('welcome/index', { title: 'Welcome' });
};

exports.about = function(req, res) {
  res.render('welcome/about', { title: 'About'});
};
