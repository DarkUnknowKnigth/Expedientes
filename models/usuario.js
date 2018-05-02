var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var UsuarioSchema= Schema({
    id_user:String,
    usuario:String,
    password:String,
    apPaterno:String,
    apMaterno:String,
    activo:Boolean,
    TipoUsuario:String,
    permiso:{type:Schema.ObjectId,ref:'Permiso'}
    });

    module.exports=mongoose.model('Usuario',UsuarioSchema);