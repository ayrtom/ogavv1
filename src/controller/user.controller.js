const userCtrl = {};
const passport = require('passport');
const User = require('../models/user')

userCtrl.renderSignUpForm = (req,res) =>{
    res.render('users/signup');
};

userCtrl.signup = async(req,res) =>{
    console.log('que raro');
    const {username,phone_number,password} = req.body
    const user = await User.findOne({username : username});
    const codigo = req.body.codigo;
    const codigo_tienda = 'g4m3sh0p';
    console.log(codigo);
    console.log(codigo_tienda);
    console.log(user);
    if(codigo != codigo_tienda){
        console.log('no son lo mismo');
        res.redirect('/');
    }else if(user != null){
        req.flash('error_msg', 'el usuario existe');
        console.log('ya existe el usuario')
        res.redirect('/users/signup');
    }
    else{
        const newUser = new User({username,phone_number,password});
        await newUser.save();
        console.log('se creo el usuario')
        req.flash('success_msg', 'se creo el usuario con exito')
        res.redirect('/users/signin');
       
    }
};

userCtrl.renderSigninForm = (req,res) =>{
    res.render('users/signin');
};

userCtrl.signin = passport.authenticate('local', {
    failureRedirect: '/users/signin',
    successRedirect: '/',
    failureFlash: true
});
userCtrl.logout = (req,res)=>{
    req.logout();
    req.flash('success_msg','ya saliste');
    res.redirect('/');
}

module.exports = userCtrl;