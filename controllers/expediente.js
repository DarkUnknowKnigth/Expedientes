'use strict'
var Expediente=require("../models/expediente");
function modificar(req,res)
{

}
function eliminar(req,res)
{
    
}
function guardar(req,res){
    var expediente= new Expediente();
    var newExp=req.body;
    console.log("recibi");
    console.log(newExp);
    for (let i = 0; i < expediente.AntecedentesHF.length; i++) {
        
        expediente.AntecedentesHF[i].parentesco=newExp.AntecedentesHF[i].parentesco;
        expediente.AntecedentesHF[i].HA=newExp.AntecedentesHF[i].HA;
        expediente.AntecedentesHF[i].cancer=newExp.AntecedentesHF[i].cancer;
        expediente.AntecedentesHF[i].sida=newExp.AntecedentesHF[i].sida;
        expediente.AntecedentesHF[i].diabetes=newExp.AntecedentesHF[i].diabetes;
        expediente.AntecedentesHF[i].TB=newExp.AntecedentesHF[i].TB;
        expediente.AntecedentesHF[i].otro=newExp.AntecedentesHF[i].otro;
    }
    expediente.FichaId.nombre=newExp.FichaId.nombre;
    expediente.FichaId.apPaterno=newExp.FichaId.apPaterno;
    expediente.FichaId.apMaterno=newExp.FichaId.apMaterno;
    expediente.FichaId.direccion=newExp.FichaId.direccion;
    expediente.FichaId.curp=newExp.FichaId.curp;
    expediente.FichaId.estadoCivil=newExp.FichaId.estadoCivil;
    expediente.FichaId.ocupacion=newExp.FichaId.ocupacion;
    //expediente.AntecedentesHF=newExp.AntecedentesHF;
    // expediente.FichaId=newExp.FichaId;
    // expediente.APNP=newExp.APNP;
    // expediente.Inmunizaciones=newExp.Inmunizaciones;
    // expediente.APP=newExp.APP;
    // expediente.AntecedentesG=newExp.AntecedentesG;
    console.log("expedinete");
    //console.log(expediente);
    expediente.save((err,StoredExp)=>{
        if(err){
            res.status(500).send("Error en almacenamiento");
        }
        else{
            if(StoredExp)
            {
                console.log("pude");
                console.log(StoredExp);
                res.status(200).send("Guardado exitosamente");
            }
            else{
                res.status(500).send("Error en el almacenamiento");

            }
        }
    });
}
module.exports={
    modificar,
    eliminar,
    guardar
}
