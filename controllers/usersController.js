// User controller logic

exports.index = function(req, res) {
    res.render('users/index', { title: 'All Users' });
};

exports.new = function(req, res) {
  res.render('users/new', { title: 'Create a new user'});
};
