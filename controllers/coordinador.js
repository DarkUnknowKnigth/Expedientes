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
        query={"alcohol":"Si"}
        break;
        case 'tabaco':
        query={"tabaco":"Si"}
        break;
        case 'varicela':
        query={"varicela":"Si"}
        break;
        case 'escarlatina':
        query={"escarlatina":"Si"}
        break;
        case 'sarampion':
        query={"sarampion":"Si"}
        break;
        case 'rubeola':
        query={"rubeola":"Si"}
        break;
        case 'tosferina':
        query={"tosferina":"Si"}
        break;
        case 'parasitosis':
        query={"parasitosis":"Si"}
        break;
        case 'urosepsis':
        query={"urosepsis":"Si"}
        break;
        case 'cancer':
        query={"aborto":"Si"}
        break;
        case 'amigdalitis':
        query={"amigdalitis":"Si"}
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
                console.log(mujeres);
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
                            console.log(hombres)
                            Expedientes.find(query3).count().exec((err,total)=>{
                                if(!err)
                                {
                                    console.log(total);
                                    res.send({m:mujeres,h:hombres,t:total});
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