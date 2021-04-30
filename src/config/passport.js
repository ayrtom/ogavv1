const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user')

passport.use(new LocalStrategy({
    usernameField:'username',
    passwordField:'password'
},async(username,password,done) =>{
    console.log('verificando');
    const user = await User.findOne({username})
    if(!user){
        console.log('no existe el usuario')
        return done(null,false, {message:'user not found'})
    }else{
        if(password == user.password){
            return done(null,user);
        }else{
            console.log('contraseña equivocada')
            return done (null,false, {message: 'Incorrect password'});
        }
    }
}));

passport.serializeUser((user,done) =>{
    done(null,user.id);
});

passport.deserializeUser((id,done) =>{
    User.findById(id,(err,user) =>{
        done(err,user);
    });
});