var LocalStrategy=require('passport-local').Strategy;
module.exports=(passport)=>{
    passport.serializeUser((user,done)=>{
        done(null,user.id,)
    });
};