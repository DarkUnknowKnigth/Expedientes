var Expedientes=require('../models/expediente');
var Consulta=require('../models/consulta');
var moment=require('moment');
function generarInforme(req,res){

}
function generarHojaDiaria(req,res)
{
    var fecha=req.body.fecha;
    console.log(fecha);
    Consulta.find({"fecha":fecha}).populate('expediente').exec((err,consultas)=>{
        if(!err)
        {
            if(consultas)
            {
                tb='<div id="HojaDiaria_clinica"><table class="table table-bordered table-striped"><thead><tr><th colspan="7">Hoja diaria: Centro de Salud <b>SANTA CRUZ</b></th><th colspan="4">Fecha:'+fecha+'</th><th colspan="3"> Tuxtla Gutierrez,Chiapas</th></tr>'+
                //'<tr><th colspan="4">Identificacion</th>'+
                '<th class="bg-primary" colspan="6">Signos vitales</th><th class="bg-primary" colspan="5">Informacion de consulta</th><th class="bg-primary" colspan="3">Diagnostico</th></tr><tr>'+
                   // '<tr><th></th>Nombre<th>sexo</th>CURP<th>Fecha Nacimiento</th><th></th>'+
                    '<th class="bg-danger">Talla</th><th class="bg-danger">Peso</th><th class="bg-danger">IMC</th><th class="bg-danger">Pulso</th><th class="bg-danger">Tension Arterial</th><th class="bg-danger">Temperatura</th>'+
                    '<th class="bg-success">Deteccion</th><th class="bg-success">Primera vez en el Año</th><th class="bg-success">Tuberculosis</th><th class="bg-success">Obesidad</th><th class="bg-success">Salud reproductiva</th>'+
                    '<th class="bg-secondary ">Diagnostico</th><th class="bg-secondary">Programa de Salud</th><th class="bg-secondary">Fecha de Creacion</th></tr></thead><tbody>';
                consultas.forEach(con => {
                   tb+= '<tr>'+
                        // '<td>'+con.signosVitales.Expediente.nombre+'</td>'+
                        // '<td>'+con.signosVitales.Expediente.sexo+'</td>'+
                        // '<td>'+con.signosVitales.Expediente.curp+'</td>'+
                        // '<td>'+con.signosVitales.Expediente.fechaNacimiento+'</td>'+
                        '<td>'+con.signosVitales.Talla+'</td>'+
                        '<td>'+con.signosVitales.Peso+'</td>'+
                       ' <td>'+con.signosVitales.IMC+'</td>'+
                       ' <td>'+con.signosVitales.Pulso+'</td>'+
                       ' <td>'+con.signosVitales.TA+'</td>'+
                        '<td>'+con.signosVitales.Temp+'</td>'+
                        '<td>'+con.formatoConsulta.deteccion+'</td>'+
                        '<td>'+con.formatoConsulta.primeravez+'</td>'+
                        '<td>'+con.formatoConsulta.sintomasTB+'</td>'+
                        '<td>'+con.formatoConsulta.nivelObesidad+'</td>'+
                       ' <td>'+con.formatoConsulta.saludReprod+'</td>'+
                        '<td>'+con.diagnostico.diagnostico+'</td>'+
                        '<td>'+con.diagnostico.programa+'</td>'+
                        '<td>'+con.fecha+'</td>'+
                   ' </tr>';
                
                });
                tb+="</tbody></table></div>";
                console.log(tb);
                res.send(tb);
                
            }
            else
            {
                console.log("VO consultas"+consultas);
                res.send("<p>No se pudeo realizar la busqueda</p>");
            }
           
        }
        else{
            console.log("ha ocurrido:"+err);
            res.send('<p>Ja ocurrido un error en la busqueda de las consultas</p>');
        }
        
    });
}
function estadistica(req,res)
{
    var busqueda=req.body.campoBusqueda;
    var query={},query2={},query3={};
    var proceder=true;
    switch(busqueda)
    {
        case 'sida':
            query={$and: [ {"sexo":"Mujer"},{"AntecedentesHF.sida":"Si"} ]}
            query2={$and: [ {"sexo":"Hombre"},{"AntecedentesHF.sida":"Si"}]};
            query3={ $and: [{"AntecedentesHF.sida":"No"}] };
        break;
        case 'alcohol':
            query={"sexo":"Mujer","alcohol":"Si"}
            query2={"sexo":"Hombre","alcohol":"Si"};
            query3={"alcohol":"No"};
        break;
        case 'tabaco':
            query={"sexo":"Mujer","tabaco":"Si"}
            query2={"sexo":"Hombre","tabaco":"Si"};
            query3={"tabaco":"No"};
        break;
        case 'varicela':
            query={"sexo":"Mujer","varicela":"Si"}
            query2={"sexo":"Hombre","varicela":"Si"};
            query3={"varicela":"No"};
        break;
        case 'escarlatina':
            query={"sexo":"Mujer","escarlatina":"Si"}
            query2={"sexo":"Hombre","escarlatina":"Si"};
            query3={"escarlatina":"No"};
        break;
        case 'sarampion':
            query={"sexo":"Mujer","sarampion":"Si"}
            query2={"sexo":"Hombre","sarampion":"Si"};
            query3={"sarampion":"No"};
        break;
        case 'rubeola':
            query={"sexo":"Mujer","rubeola":"Si"}
            query2={"sexo":"Hombre","rubeola":"Si"};
            query3={"rubeola":"No"};
        break;
        case 'tosferina':
            query={"sexo":"Mujer","tosferina":"Si"}
            query2={"sexo":"Hombre","tosferina":"Si"};
            query3={"tosferina":"No"};
        break;
        case 'parasitosis':
            query={"sexo":"Mujer","parasitosis":"Si"}
            query2={"sexo":"Hombre","parasitosis":"Si"};
            query3={"parasitosis":"No"};
        break;
        case 'urosepsis':
            query={"sexo":"Mujer","urosepsis":"Si"}
            query2={"sexo":"Hombre","urosepsis":"Si"};
            query3={"urosepsis":"No"};
        break;
        case 'cancer':
            query={$and: [ {"sexo":"Mujer"},{"AntecedentesHF.cancer":"Si"} ]}
            query2={$and: [ {"sexo":"Hombre"},{"AntecedentesHF.cancer":"Si"}]};
            query3={ $and: [{"AntecedentesHF.cancer":"No"}] };
        break;
        case 'amigdalitis':
            query={"sexo":"Mujer","amigdalitis":"Si"}
            query2={"sexo":"Hombre","amigdalitis":"Si"};
            query3={"amigdalitis":"No"};
        break;
        case 'HA':
            query={$and: [ {"sexo":"Mujer"},{"AntecedentesHF.HA":"Si"} ]}
            query2={$and: [ {"sexo":"Hombre"},{"AntecedentesHF.HA":"Si"}]};
            query3={ $and: [{"AntecedentesHF.HA":"No"}] };
        break;
        case 'diabetes':
            query={$and: [ {"sexo":"Mujer"},{"AntecedentesHF.diabetes":"Si"} ]}
            query2={$and: [ {"sexo":"Hombre"},{"AntecedentesHF.diabetes":"Si"}]};
            query3={ $and: [{"AntecedentesHF.diabetes":"No"}] };
        break;
        case 'TB':
            query={$and: [ {"sexo":"Mujer"},{"AntecedentesHF.TB":"Si"} ]}
            query2={$and: [ {"sexo":"Hombre"},{"AntecedentesHF.TB":"Si"}]};
            query3={ $and: [{"AntecedentesHF.TB":"No"}] };
        break;
        case 'otro':
            query={$and: [ {"sexo":"Mujer"},{"AntecedentesHF.otro":{ $exists: true }} ]}
            query2={$and: [ {"sexo":"Hombre"},{"AntecedentesHF.otro":{ $exists: true }}]};
            query3={ $and: [{"AntecedentesHF.otro":{ $exists: false }}] };
        break;
        default:
            proceder=false;
            res.send("No se selecciono una modalidad de padecimientos");    
        break;
    }
    if(proceder)
    {
        Expedientes.find(query).count().exec((err,mujeres)=>{
            if(err)
            {
                console.log(err);
                res.send("Lo sentimos ocurrio un error en la coleccion Mujeres");
            }
            else
            {
                if(mujeres>=0)
                {
                    Expedientes.find(query2).count().exec((err,hombres)=>{
                        if(err)
                        {
                            console.log(err);
                            res.send("Lo sentimos ocurrio un error en la coleccion Hombres");
                        }
                        else
                        {
                            if (hombres>=0)
                            {                          
                                Expedientes.find(query3).count().exec((err,total)=>{
                                    if(!err)
                                    {
                                        res.send({m:mujeres,h:hombres,t:total,e:busqueda.toUpperCase()});
                                    }
                                });
                            }
                            else
                            {
                                res.send("Lo sentimos ocurrio un error inesperado no existe Hombres");
                            }
    
                        }
    
                    }); 
                }
                else
                {
                    res.send("Lo sentimos ocurrio un error inesperado no existe mujeres");
                }
            } 
        });

    }  
}
function anual(req,res){
    console.log(Consultas.find({"formatoConsulta.deteccion":"Diabetes Mellitus"}).count());
    Consultas.find({"formatoConsulta.deteccion":"Hipertensión Arterial"}).count();
    Consultas.find({"formatoConsulta.deteccion":"Obesidad"}).count();
    Consultas.find({"formatoConsulta.deteccion":"Dislipidemias"}).count();
    Consultas.find({"formatoConsulta.deteccion":"Depresión"}).count();
    Consultas.find({"formatoConsulta.deteccion":"Alteración de memoria"}).count();
    Consultas.find({"formatoConsulta.deteccion":"Síntomas respiratorios"}).count();
    Consultas.find({"formatoConsulta.deteccion":"Alcoholismo"}).count();
    Consultas.find({"formatoConsulta.deteccion":"Tabaquismo"}).count();
    Consultas.find({"formatoConsulta.deteccion":"Fármacos"}).count();
    Consultas.find({"formatoConsulta.deteccion":"Incontinencia urinaria"}).count();
    Consultas.find({"formatoConsulta.deteccion":"VIH"}).count();
    Consultas.find({"formatoConsulta.deteccion":"Gonorrea"}).count();
    Consultas.find({"formatoConsulta.deteccion":"ITS"}).count();
    Consultas.find({"formatoConsulta.deteccion":"Sífilis"}).count();
    res.send(req.body);
}
module.exports={
    generarHojaDiaria,
    generarInforme,
    estadistica,
    anual,
}