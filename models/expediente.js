var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var ExpedinteSchema= Schema({
    AntecedentesHF:{
        Parientes:[{},{}]
    },
   FormatoConsulta:{
       deteccion:String,
       

    }

});
module.exports=mongoose.model('SignosVitales',SignosVitalesSchema);