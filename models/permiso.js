var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var PermisoSchema= Schema({
    idPermiso:String,
    AccesoExp:Boolean,
    CrearExp:Boolean,
    ModificarExp:Boolean,
    EliminarExp:Boolean,
    AccesoUser:Boolean,
    CrearUser:Boolean,
    ModificarUser:Boolean,
    EliminarUser:Boolean,
	AccesoCenso:Boolean,
    AccesoConsulta:Boolean  
    });

    module.exports=mongoose.model('Permiso',PermisoSchema);