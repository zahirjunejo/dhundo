module.exports.locationList = function(req, res){
    res.render('location-list', {title:'Home'});
};

module.exports.locationInfo = function(req,res){
    res.render('location-info', {title:'Location Information'});
};

module.exports.addReview = function(req, res){
    res.render('location-review-form', {title:'Add Review'});
};