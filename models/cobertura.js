var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var SaludReproductivaSchema= Schema({
    RT_Emb:String,
    TrimestreGest:String,
    AltoRiesgo:Boolean,
    Complicaciones:String
    });

    module.exports=mongoose.model('Cobertura',SaludReproductivaSchema);