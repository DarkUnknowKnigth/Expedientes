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
        sintomasTB:Boolean,
        nivelObesidad:String,
        saludReprod:String
    },
    diagnostico:{
        diagnostico:String,
        programa:String,
    },
    fecha:String,
    Expediente:{type:Schema.ObjectId,ref:'Expediente'},
    });
    module.exports=mongoose.model('Consulta',ConsultaSchema);