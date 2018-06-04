const Consulta=require('../models/consulta');
const Expediente=require("../models/expediente");
const Hoja=require('../models/hoja');
function crear(req,res)
{
    var curp=req.body.curp;
    Expediente.findOne({"curp":curp}).exec((err,exp)=>{
        if(!err)
        {
            if(exp)
            {
                res.send({msg:'<table class="table table-striped"><tr><td>'+exp.nombre+'</td><td>'+exp._id+'</td><td>'+exp.curp+'</td><td><button value="'+exp._id+'"class="btn btn-success" onclick="consulta.id_exp=this.value">Seleccionar</button></td></tr></table>'});
            }
            else{
                res.send({msg:"No se encontro el expediente"});
            }
        }
    });
}
function guardar(req,res) { 
    let consulta=req.body;
    con= new Consulta();
    con.signosVitales.Talla=consulta.Talla;
    con.signosVitales.Peso=consulta.Peso;
    con.signosVitales.IMC=consulta.IMC;
    con.signosVitales.TA=consulta.TA;
    con.signosVitales.Temp=consulta.Temp;
    con.formatoConsulta.deteccion=consulta.deteccion;
    con.formatoConsulta.primeravez=consulta.primeravez;
    con.formatoConsulta.sintomasTB=consulta.sintomasTB;
    con.formatoConsulta.nivelObesidad=consulta.nivelObesidad;
    con.formatoConsulta.saludReprod=consulta.saludReprod;
    con.diagnostico.diagnostico=consulta.diagnostico;
    con.diagnostico.programa=consulta.programa;
    con.diagnostico.fecha=consulta.fecha;
    con.save((err,saved)=>{
        if(!err)
        {
            if(saved)
            {
                Expediente.where({_id:consulta.id_exp}).update({$push:{Consulta:saved._id}}).exec((err,pass)=>{
                    if(err)
                    {
                        throw err
                    }
                    else{
                        console.log(pass);
                        hojaD=new Hoja();
                        hojaD.Consulta.push(saved._id);
                        hojaD.save((err,hoja)=>{
                            if(!err)
                            {
                                res.send("Se ha agregado la consulta al expediente y se ha insertado en la Hoja Diaria");
                            }
                            throw err;
                            res.send({msg:"No se pudo insertar en la hoja diaria"});
                        });
                        
                    }
                });
            }
            else
            {
                res.send({msg:"La consulta tuvo un error interno"})
            }
        }
        else{
            res.send({msg:"Error al guardar la consulta"});
        }

    });
 }

module.exports={
    crear,
    guardar
}