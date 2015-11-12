/* GET home page. */
exports.index = function(req, res){
  res.render('home', { title: 'Home' });
};

exports.Projects = function(req, res){
  res.render('projects', { title: 'Projects' });
};
exports.Coding = function(req, res){
  res.render('coding', { title: 'Coding' });
};
exports.Contact = function(req, res){
  res.render('contact', { title: 'Contact' });
};
exports.Experience = function(req, res){
  res.render('experience', { title: 'Experience' });
};