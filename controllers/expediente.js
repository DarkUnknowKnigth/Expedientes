
var Exp=require("../models/expediente");
function modificar(req,res)
{

}
function eliminar(req,res)
{
    
}
function guardar(req,res){

    newExp=req.body;
    console.log(newExp);
    expediente= new Exp();
    expediente.AntecedentesHF=newExp.AntecedentesHF;
    expediente.FichaId=newExp.FichaId;
    expediente.APNP=newExp.APNP;
    expediente.Inmunizaciones=newExp.Inmunizaciones;
    expediente.APP=newExp.APP;
    expediente.AntecedentesG=newExp.AntecedentesG;
    console.log(expediente);
    expediente.save((err,StoredExp)=>{
        if(err){
            res.status(500).send("Error en almacenamiento");
        }
        else{
            if(StoredExp)
            {
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
