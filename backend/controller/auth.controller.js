// User model MongoDb
var User = require("../models/user.model");

module.exports.login =  (req,res)=> {
    res.render('auth/login');
};
module.exports.loginP = async (req,res)=> {
    var email = req.body.email;
    var password = req.body.password;

    var user = await User.findOne({ email: email});
    if(!user || user.password !== password ){
        res.render('auth/login', 
        {
            errors : ['Wrong password or email'],
            values : req.body
        });
        return;
    }
    // set cookie for user 
    res.cookie('userID',user.id,{
        signed: "true"
    }); // signed cookie 
    res.redirect('/users');

};
