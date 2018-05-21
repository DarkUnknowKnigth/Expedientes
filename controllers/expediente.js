
Exp=require("../models/expediente");
function modificar(req,res)
{

}
function eliminar(req,res)
{
    
}
function guardar(req,res){
    console.log(req.body);
    res.status(200).send("Recibido");
}
module.exports={
    modificar,
    eliminar,
    guardar
}
