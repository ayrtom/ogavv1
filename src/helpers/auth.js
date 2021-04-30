const helpers = {};

helpers.isAuthenticated = (req,res,next) =>{
    if(req.isAuthenticated()){
        console.log('ok')
        return next();
    }
    res.redirect('/');
};

module.exports = helpers;