var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var SaludReproductivaSchema= Schema({
    RT_Emb:String,
    TrimestreGest:String,
    AltoRiesgo:Boolean,
    Complicaciones:String,
    TerapiaHorm:Boolean,
    EventoPrimVez:Boolean,
    EventoSubsec:Boolean,
    Embarazo:Boolean
    });

    module.exports=mongoose.model('SaludReproductiva',SaludReproductivaSchema);