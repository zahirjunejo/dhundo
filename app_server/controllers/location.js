module.exports.locationList = function(req, res){
    res.render('index', {title:'Home'});
};

module.exports.locationInfo = function(req,res){
    res.render('index', {title:'Location Information'});
};

module.exports.addReview = function(req, res){
    res.render('index', {title:'Add Review'});
};