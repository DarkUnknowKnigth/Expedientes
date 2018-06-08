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
    var valores={
        quien:"",
        diabetes:"",
        ha:"",
        obesidad:"",
        disl:"",
        dep:"",
        alt:"",
        sin:"",
        alc:"",
        tab:"",
        farm:"",
        inc:"",
        vih:"",
        gon:"",
        its:"",
        sif:"",
        enf:"",
        cro:"",
        otr:"",
        plan:"",
        asan:"",
        bp:"",
        np:"",
        sp:"",
        ob0:"",
        ob1:"",
        ob2:""
    };
    if(req.body.seleccion=="detecciones")
    {
        Consulta.find({"formatoConsulta.deteccion":"Diabetes Mellitus"}).count().exec((err,dm)=>{
            if(!err)
            {
                valores.diabetes=dm;
                Consulta.find({"formatoConsulta.deteccion":"Hipertensión Arterial"}).count().exec((err,ha)=>{
                    if(!err)
                    {
                        valores.ha=ha;
                        Consulta.find({"formatoConsulta.deteccion":"Obesidad"}).count().exec((err,o)=>{
                            if(!err)
                            {
                                valores.obesidad=o;
                                Consulta.find({"formatoConsulta.deteccion":"Dislipidemias"}).count().exec((err,d)=>{
                                    if(!err)
                                    {
                                        valores.disl=d;
                                        Consulta.find({"formatoConsulta.deteccion":"Depresión"}).count().exec((err,de)=>{
                                            if(!err)
                                            {
                                                valores.dep=de;
                                                Consulta.find({"formatoConsulta.deteccion":"Alteración de memoria"}).count().exec((err,am)=>{
                                                    if(!err)
                                                    {
                                                        valores.alt=am;
                                                        Consulta.find({"formatoConsulta.deteccion":"Síntomas respiratorios"}).count().exec((err,sr)=>{
                                                            if(!err)
                                                            {
                                                                valores.sin=sr;
                                                                Consulta.find({"formatoConsulta.deteccion":"Alcoholismo"}).count().exec((err,a)=>{
                                                                    if(!err)
                                                                    {
                                                                        valores.alc=a;
                                                                        Consulta.find({"formatoConsulta.deteccion":"Tabaquismo"}).count().exec((err,t)=>{
                                                                            if(!err)
                                                                            {
                                                                                valores.tab=t;
                                                                                Consulta.find({"formatoConsulta.deteccion":"Fármacos"}).count().exec((err,f)=>{
                                                                                    if(!err)
                                                                                    {
                                                                                        valores.farm=f;
                                                                                        Consulta.find({"formatoConsulta.deteccion":"Incontinencia urinaria"}).count().exec((err,iu)=>{
                                                                                            if(!err)
                                                                                            {
                                                                                                valores.inc=iu;
                                                                                                Consulta.find({"formatoConsulta.deteccion":"VIH"}).count().exec((err,v)=>{
                                                                                                    if(!err)
                                                                                                    {
                                                                                                        valores.vih=v;
                                                                                                        Consulta.find({"formatoConsulta.deteccion":"Gonorrea"}).count().exec((err,g)=>{
                                                                                                            if(!err)
                                                                                                            {
                                                                                                                valores.gon=g;
                                                                                                                Consulta.find({"formatoConsulta.deteccion":"ITS"}).count().exec((err,i)=>{
                                                                                                                    if(!err)
                                                                                                                    {
                                                                                                                        valores.its=i;
                                                                                                                        Consulta.find({"formatoConsulta.deteccion":"Sífilis"}).count().exec((err,s)=>{
                                                                                                                            if(!err)
                                                                                                                            {
                                                                                                                                valores.sif=s;
                                                                                                                                valores.quien="detec";
                                                                                                                                res.send(valores);
                                                                                                                            }
                                                                                                                        });
                                                                                                                    }
                                                                                                                });
                                                                                                            }
                                                                                                        });
                                                                                                    }
                                                                                                });
                                                                                            }
                                                                                        });
                                                                                    }
                                                                                });
                                                                            }
                                                                        });
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
    else
    {

        if(req.body.seleccion=="programas")
        {
            Consulta.find({"diagnostico.programa":"Enfermedades transmisibles"}).count().exec((err,et)=>{
                if(!err)
                {
                    valores.enf=et;
                    Consulta.find({"diagnostico.programa":"Crónico degenerativas"}).count().exec((err,crd)=>{
                        if(!err)
                        {
                            valores.cro=crd;
                            Consulta.find({"diagnostico.programa":"Otras enfermedades"}).count().exec((err,otf)=>{
                                if(!err)
                                {
                                    valores.otr=otf;
                                    Consulta.find({"diagnostico.programa":"A sanos"}).count().exec((err,asa)=>{
                                        if(!err)
                                        {
                                            valores.asan=asa;
                                            Consulta.find({"diagnostico.programa":"Planificación familiar"}).count().exec((err,plf)=>{
                                                if(!err)
                                                {
                                                    valores.quien="prog";
                                                    valores.plan=plf;
                                                    res.send(valores);
                                                }
                                                throw err;
                                            });
                                        }
                                        throw err;
                                    });
                                }
                                throw err;
                            });
                        }
                        throw err;
                    });
                }
                throw err;
            });
        }
        else
        {
            if(req.body.seleccion=="obesidad")
            {
                Consulta.find({"formatoConsulta.nivelObesidad":"bajoPeso"}).count().exec((err,bp)=>{
                    if(!err)
                    {
                        valores.bp=bp;
                        Consulta.find({"formatoConsulta.nivelObesidad":"normal"}).count().exec((err,np)=>{
                            if(!err)
                            {
                                valores.np=np;
                                Consulta.find({"formatoConsulta.nivelObesidad":"sobrepeso"}).count().exec((err,sp)=>{
                                    if(!err)
                                    {
                                        valores.sp=sp;
                                        Consulta.find({"formatoConsulta.nivelObesidad":"obesidad"}).count().exec((err,ob0)=>{
                                            if(!err)
                                            {
                                                valores.ob0=ob0;
                                                Consulta.find({"formatoConsulta.nivelObesidad":"obesidad I"}).count().exec((err,ob1)=>{
                                                    if(!err)
                                                    {
                                                        valores.ob1=ob1;
                                                        Consulta.find({"formatoConsulta.nivelObesidad":"obesidad II"}).count().exec((err,ob2)=>{
                                                            if(!err)
                                                            {
                                                                valores.ob2=ob2;
                                                                valores.quien="obes";
                                                                res.send(valores);
                                                            }
                                                            throw err;
                                                        });
                                                    }
                                                    throw err;
                                                });
                                            }
                                            throw err;
                                        });
                                    }
                                    throw err;
                                });
                            }
                            throw err;
                        });
                    }
                    throw err;
                });
            }
            else
            {
                res.send({msg:"No se selecciono el tipo de grafico"});
            } 
        }
    } 
}
module.exports={
    generarHojaDiaria,
    generarInforme,
    estadistica,
    anual,
}