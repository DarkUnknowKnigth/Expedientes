
Exp=require("../models/expediente");
function modificar(req,res)
{

}
function eliminar(req,res)
{
    
}
function guardar(req,res){
    newExp=req.body;
    expediente= new Exp();
    expediente=newExp;
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
    })
    res.status(200).send("Recibido");
}
module.exports={
    modificar,
    eliminar,
    guardar
}
