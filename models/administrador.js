var mongoose=require("mongoose");
var bcrypt=require('bcrypt-nodejs');
var Schema=mongoose.Schema;
var Usuario=require('../models/usuario');
var AdministradorSchema= Schema({
    usuario:String,
    password:String,
    usuarios:{type:Schema.ObjectId,ref:'Usuario'}
    });
AdministradorSchema.pre("save",(next)=>{
    const admin= this;
    bcrypt.genSalt(10,(err,salt)=>{
        if(err)
        {
            next(err);
        }
        bcrypt.hash(admin.password,salt,null,(err,hash)=>{
            if(err)
            {
                next(err);
            }
            admin.password=hash;
            next();
        });
    });
});
AdministradorSchema.methods.comparar=(password,callback)=>{
    bcrypt.compare(password,this.password,(err,res)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            callback(null,res);
        }
    });
};
module.exports=mongoose.model('Administrador',AdministradorSchema);