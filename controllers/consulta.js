const Consulta=require('../models/consulta');
const Expediente=require("../models/expediente");
function crear(req,res)
{
    var curp=req.body.curp;
    Expediente.findOne({"curp":curp}).exec((err,exp)=>{
        if(!err)
        {
            if(exp)
            {
                res.send({msg:'<table class="table table-striped"><tr><td>'+exp.nombre+'</td><td>'+exp._id+'</td><td>'+exp.curp+'</td><td><button value="'+exp._id+'"class="btn btn-success" id="selectExp">Seleccionar</button></td></tr></table>'});
            }
            else{
                res.send({msg:"No se encontro el expediente"});
            }
        }
    });
}
function guardar(req,res) {  }

module.exports={
    crear,
    guardar
}