var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var SignosVitalesSchema= Schema({
    Talla:String,
    Peso:String,
    IMC:String,
    Pulso:String,
    TA:String,
    Temp:String
    });

    module.exports=mongoose.model('SignosVitales',SignosVitalesSchema);