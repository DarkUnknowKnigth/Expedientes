var mongoose=require("mongoose");
var bcrypt=require('bcrypt-nodejs');
var Schema=mongoose.Schema;
var Permiso=require('../models/permiso');
var UsuarioSchema= Schema({
    usuario:{type:String,required: true},
    password:{type:String,required: true},
    nombre:{type:String,required: true},
    apPaterno:{type:String,required: true},
    apMaterno:{type:String,required: true},
    activo:{type:Boolean,required: true},
    cedula:{type:String,required: true},
    fechaCreacion:{type:Date,required: true},
    TipoUsuario:{type:String,required: true},
    permiso:{type:Schema.ObjectId,ref:'Permiso',required:true}
    });
// UsuarioSchema.pre("save",(next)=>{
//     const usuario= this;
//     bcrypt.genSalt(10,(err,salt)=>{
//         if(err)
//         {
//             next(err);
//         }
//         bcrypt.hash(usuario.password,salt,null,(err,hash)=>{
//             if(err)
//             {
//                 next(err);
//             }
//             usuario.password=hash;
//             next();
//         });
//     });
// });
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

