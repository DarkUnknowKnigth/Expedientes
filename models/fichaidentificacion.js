var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var FichaIdentificacionSchema= Schema({
    Casado:Boolean,
    Soltero:Boolean,
    Viudo:Boolean,
    Divorciado:Boolean,
    UnionLibre:Boolean,
    Separado:Boolean,
    SinOcupacion:Boolean,
    Estudia:Boolean,
    LaboresHogar:Boolean,
	Trabaja:Boolean,
    Jubilado:Boolean,
    PadreSoltero:Boolean 
    });

    module.exports=mongoose.model('FichaIdentificacion',FichaIdentificacionSchema);