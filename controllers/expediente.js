'use strict'
const Expediente=require("../models/expediente");
function modificar(req,res)
{

}
function eliminar(req,res)
{
    
}
function guardar(req,res){
    var nuevo=req.body;
    var antecedentes=nuevo.AntecedentesHF;
    var ficha=nuevo.FichaId;
    var apnp=nuevo.APNP;
    var inmu=nuevo.Inmunizaciones;
    var app=nuevo.APP;
    var antg=nuevo.AntecedentesG;
    expediente=new Expediente({
        'AntecedentesHF':antecedentes,
        'FichaId':ficha,
        'APNP':apnp,
        'Inmunizaciones':inmu,
        'APP':app,
        'AntecedentesG':antg
    });
    expediente.save((err)=>{
        if(err)
        {
            console.log("ERROR:"+err);
            res.send("No se pudo guardar el expediente, Porfavor intente de nuevo");
        }
    });
    //console.log(expediente);
}
module.exports={
    modificar,
    eliminar,
    guardar
}
