var Expedientes=require('../models/expediente');
function generarInforme(req,res){

}
function generarHojaDiaria(req,res)
{

}
function estadistica(req,res)
{
    var busqueda=req.campoBusqueda;
    var query={};
    switch(busqueda)
    {
        case 'sida':
        query={"sida":"Si"}
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
        case 'aborto':
        query={"aborto":"Si"}
        break;
        case 'amigdalitis':
        query={"amigdalitis":"Si"}
        break;
        default:
        break;
    }
    Expedientes.find(query).count().exec((err,conteo)=>{
        if(err)
        {
            res.send("Lo sentimos ocurrio un error inesperado");
        }
        else
        {
            if(conteo)
            {
                Expedientes.find({}).count().exec((err,total)=>{
                    if(err)
                    {
                        res.send("Lo sentimos ocurrio un error inesperado");
                    }
                    else
                    {
                        if (total)
                        {
                            res.send([busqueda,conteo],["Total",total]);
                        }
                        else
                        {
                            res.send("Lo sentimos ocurrio un error inesperado");
                        }

                    }

                }); 
            }
            else
            {
                res.send("Lo sentimos ocurrio un error inesperado");
            }
        } 
    });
}
module.exports={
    generarHojaDiaria,
    generarInforme,
    estadistica
}