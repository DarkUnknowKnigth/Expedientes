var mongoose=require("mongoose");
var bcrypt=require('bcrypt-nodejs');
var Schema=mongoose.Schema;
var Administrador=require('../models/administrador');
var Permiso=require('../models/permiso');
var UsuarioSchema= Schema({
    usuario:String,
    password:String,
    nombre:String,
    apPaterno:String,
    apMaterno:String,
    activo:Boolean,
    cedula:String,
    fechaCreacion:Date,
    TipoUsuario:String,
    administrador:{type:Schema.ObjectId,ref:'Administrador'},
    permiso:{type:Schema.ObjectId,ref:'Permiso'},
    });
UsuarioSchema.pre("save",(next)=>{
    const usuario= this;
    bcrypt.genSalt(10,(err,salt)=>{
        if(err)
        {
            next(err);
        }
        bcrypt.hash(usuario.password,salt,null,(err,hash)=>{
            if(err)
            {
                next(err);
            }
            usuario.password=hash;
            next();
        });
    });
});
UsuarioSchema.methods.comparar=(password,callback)=>{
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
module.exports=mongoose.model('Usuario',UsuarioSchema);

