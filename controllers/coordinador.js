var Expedientes=require('../models/expediente');
var Consulta=require('../models/consulta');
function generarInforme(req,res){

}
function generarHojaDiaria(req,res)
{
    var fecha=req.body.fecha;
    console.log(fecha);
    var d1=new Date(fecha+"T00:00:00.000Z");
    var d2=new Date(fecha+"T24:00:00.000Z");
    console.log(d1+""+d2);


    Consulta.find({"diagnostico.fecha" :{$gte:d1,$lt:d2}}).exec((err,consultas)=>{
        if(!err)
        {
            if(consultas.length>0)
            {
                tb='<table class="table table-striped"><tr><td colspan="6">Signos vitales</td><td colspan="5">Informacion de consulta</td><td colspan="3">Diagnostico</td></tr>'+
                    '<tr><td>Talla</td><td>Peso</td><td>IMC</td><td>Pulso</td><td>TA</td><td>Temperatura</td>'+
                    '<td>Deteccion</td><td>Primera vez en el Año</td><td>Tuberculosis</td><td>Obesidad</td><td>Salud reproductiva</td>'+
                    '<td>Diagnostico</td><td>Programa de Salud</td><td>Fecha de Creacion</td></tr>';
                consultas.forEach(con => {
               
                   tb+= '<tr>'+
                        '<td>con.signosVitales.Talla</td>'+
                        '<td>con.signosVitales.Peso</td>'+
                       ' <td>con.signosVitales.IMC</td>'+
                       ' <td>con.signosVitales.Pulso</td>'+
                       ' <td>con.signosVitales.TA</td>'+
                        '<td>con.signosVitales.Temp</td>'+
                        '<td>con.formatoConsulta.deteccion</td>'+
                        '<td>con.formatoConsulta.primeravez</td>'+
                        '<td>con.formatoConsulta.sintomasTB</td>'+
                        '<td>con.formatoConsulta.nivelObesidad</td>'+
                       ' <td>con.formatoConsulta.saludReprod</td>'+
                        '<td>con.diagnostico.diagnostico</td>'+
                        '<td>con.diagnostico.programa</td>'+
                        '<td>con.diagnostico.fecha</td>'+
                   ' </tr>';
                
                });
                tb+="</table>";
                res.send(tb);
            }
            else
            {
                console.log(consultas);
                res.send("<p>No se pudeo realizar la busqueda</p>");
            }
           
        }
        console.log(err);
        res.send('<p>Ja ocurrido un error en la busqueda de las consultas</p>');
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
module.exports={
    generarHojaDiaria,
    generarInforme,
    estadistica
}