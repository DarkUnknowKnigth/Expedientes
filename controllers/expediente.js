'use strict'
var Expediente=require("../models/expediente");
function modificar(req,res)
{

}
function eliminar(req,res)
{
    
}
function guardar(req,res){
    var newExp=req.body;
    console.log(newExp);
    
    var expediente= new Expediente();
    console.log("recibi");
    console.log(expediente);
    console.log("expedinete");
    //console.log(expediente);
    expediente.save((err,StoredExp)=>{
        if(err){
            res.send("Error en almacenamiento:"+err);
        }
        else{
            if(StoredExp)
            {
                console.log("pude");
                console.log(StoredExp);
                res.send("Guardado exitosamente");
            }
            else{
                res.send("Error en el almacenamiento"+err);

            }
        }
    });
}
module.exports={
    modificar,
    eliminar,
    guardar
}
