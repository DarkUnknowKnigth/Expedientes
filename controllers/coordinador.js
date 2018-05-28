var Expedientes=require('../models/expediente');
function generarInforme(req,res){

}
function generarHojaDiaria(req,res)
{

}
function estadistica(req,res)
{
    var busqueda=req.body.campoBusqueda;
    var query={},query2={},query3={};
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

        break;
    }
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
module.exports={
    generarHojaDiaria,
    generarInforme,
    estadistica
}