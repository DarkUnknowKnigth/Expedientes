var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var CoberturaSchema= Schema({
    PrimeraVezAnio:String,
    IMC_10_19a:String,
    SintRespTB:Boolean
    });

    module.exports=mongoose.model('Cobertura',CoberturaSchema);