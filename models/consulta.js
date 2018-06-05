var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var ConsultaSchema= Schema({
    signosVitales:{
        Talla:String,
        Peso:String,
        IMC:String,
        Pulso:String,
        TA:String,
        Temp:String
    },
    formatoConsulta:{
        deteccion:String,
        primeravez:Boolean,
        sitomasTB:Boolean,
        nivelObesidad:String,
        saludReprod:String
    },
    Diagnostico:{
        diagnostico:String,
        programa:String,
        fecha:Date
    }
    });
    module.exports=mongoose.model('Consulta',ConsultaSchema);