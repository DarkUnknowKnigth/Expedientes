var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var DeteccionesSchema= Schema({
    DiabetMelit:Boolean,
    HiperArterial:Boolean,
    Obesidad:Boolean,
    Depresion:Boolean,
    AlterMemoria:Boolean,
    SintomaRespir:Boolean,
    Alcoholismo:Boolean,
    Tabaco:Boolean,
    Farmacos:Boolean,
	VIH:Boolean,
    Gonorrea:Boolean,
    ITS_secretoras:Boolean,
    ITS_Ulserativas:Boolean,
    ITS_Tumorales:Boolean,
    Sifilis:Boolean, 
    });

    module.exports=mongoose.model('Detecciones',DeteccionesSchema);