var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var UsuarioSchema= Schema({
    iduser:String,
    usuario:String,
    password:String,
    nombre:String,
    apPaterno:String,
    apMaterno:String,
    activo:Boolean,
    TipoUsuario:String,
    permiso:{type:Schema.ObjectId,ref:'Permiso'},
    administrador:{type:Schema.ObjectId,ref:'Administrador'}
    });
    module.exports=mongoose.model('Usuario',UsuarioSchema);