var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var Usuario=require('../models/usuario');
var AdministradorSchema= Schema({
    NomUser:String,
    password:String,
    usuarios:[{type:Schema.ObjectId,ref:'Usuario'}]
    });

module.exports=mongoose.model('Administrador',AdministradorSchema);