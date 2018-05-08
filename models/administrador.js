var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var AdministradorSchema= Schema({
    NomUser:String,
    password:String
    });

    module.exports=mongoose.model('Administrador',AdministradorSchema);