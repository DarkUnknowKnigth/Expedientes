var mongoose=require("mongoose");
var Schema=mongoose.Schema;

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
    module.exports=mongoose.model('Usuario',UsuarioSchema);

