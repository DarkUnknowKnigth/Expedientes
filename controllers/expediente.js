'use strict'
const Expediente=require("../models/expediente");//llamamos al modelo
function query(req,res) 
{
    var query=req.body.query;
    var tipo=req.body.tipo;
    var find;
    switch(tipo)
    {
        case "_id":
            find={'_id':query};
        break;
        case "curp":
            find={'curp':query};
        break;
        case "nombre":
            find={'nombre':query}; 
        break;
        default:
            find={'_id':query};
        break;
    }
    if(/[a-zA-Z0-9]/.test(query))
    {
        Expediente.findOne(find).exec((err,exp)=>{
            if(err)
            {
                console.log(err);
                res.send("<p>No se encontro el expediente</p>");
            }
            else{
                if(exp)
                {
                    res.send( 
                        '<table class="table table-bordered table-striped"'+
                        '		<tr class="thead-dark">'+
                        '			<th colspan="2">Ficha identificacion</th>'+
                        '			<th colspan="2">APNP</th>'+
                        '			<th colspan="2">Inmunizaciones</th>'+
                        '			<th colspan="2">APP</th>'+
                        '		</tr>'+
                        '		<tr>'+
                        '			<th>Campo</th>'+
                        '			<th>Informacion</th>'+
                        '			<th>Patologia</th>'+
                        '			<th>estado</th>'+
                        '			<th>Inmunizacion</th>'+
                        '			<th>Aplicado</th>'+
                        '			<th>Enfermedad</th>'+
                        '			<th>Padecida</th>'+
                        '		</tr>'+
                        '		<tr>'+
                        '			<td>nombre</td>'+
                        '			<td>'+exp.nombre+' '+exp.apPaterno+' '+exp.apMaterno+'</td>'+
                        '			<td>Promiscuidad</td>'+
                        '			<td>'+exp.promiscuidad+'</td>'+
                        '			<td>SABIN</td>'+
                        '			<td>'+exp.sabin+'</td>'+
                        '			<td>Traumatismo</td>'+
                        '			<td>'+exp.traumatismo+'</td>'+
                        '		</tr>'+
                        '		<tr>'+
                        '			<td>direccion</td>'+
                        '			<td>'+exp.direccion+'</td>'+
                        '			<td>Hacinamiento</td>'+
                        '			<td>'+exp.hacinamiento+'</td>'+
                        '			<td>BCG</td>'+
                        '			<td>'+exp.bcg+'</td>'+
                        '			<td>Rubeola</td>'+
                        '			<td>'+exp.rubeola+'</td>'+
                        '		</tr>'+
                        '		<tr>'+
                        '			<td>curp</td>'+
                        '			<td>'+exp.curp+'</td>'+
                        '			<td>Tabaco</td>'+
                        '			<td>'+exp.tabaco+'</td>'+
                        '			<td>DPT</td>'+
                        '			<td>'+exp.dpt+'</td>'+
                        '			<td>Varicela</td>'+
                        '			<td>'+exp.varicela+'</td>'+                    
                        '		</tr>'+
                        '		<tr>'+
                        '			<td>sexo</td>'+
                        '			<td>'+exp.sexo+'</td>'+
                        '			<td>Alcohol</td>'+
                        '			<td>'+exp.alcohol+'</td>'+
                        '			<td>Antisarampion</td>'+
                        '			<td>'+exp.antisarampion+'</td>'+
                        '			<td>Sarampion</td>'+
                        '			<td>'+exp.sarampion+'</td>'+
                        '		</tr>'+
                        '		<tr>'+
                        '			<td>ocupacion</td>'+
                        '			<td>'+exp.ocupacion+'</td>'+
                        '			<td>Dieta</td>'+
                        '			<td>'+exp.dieta+'</td>'+
                        '			<td></td>'+
                        '			<td></td>'+
                        '			<td>Tosferina</td>'+
                        '			<td>'+exp.tosferina+'</td>'+
                        '		</tr>'+
                        '		<tr>'+
                        '			<td>Estado Civil</td>'+
                        '			<td>'+exp.estadoCivil+'</td>'+
                        '			<td></td>'+
                        '			<td></td>'+
                        '			<td></td>'+
                        '			<td></td>'+
                        '			<td>Escarlatina</td>'+
                        '			<td>'+exp.tosferina+'</td>'+
                        '		</tr>'+
                        '		<tr>'+
                        '			<td></td>'+
                        '			<td></td>'+
                        '			<td></td>'+
                        '			<td></td>'+
                        '			<td></td>'+
                        '			<td></td>'+
                        '			<td>Amigdalitis</td>'+
                        '			<td>'+exp.amigdalitis+'</td>'+
                        '		</tr>'+
                        '		<tr>'+
                        '			<td></td>'+
                        '			<td></td>'+
                        '			<td></td>'+
                        '			<td></td>'+
                        '			<td></td>'+
                        '			<td></td>'+
                        '			<td>Parasitosis</td>'+
                        '			<td>'+exp.parasitosis+'</td>'+
                        '		</tr>'+
                        '		<tr>'+
                        '			<td></td>'+
                        '			<td></td>'+
                        '			<td></td>'+
                        '			<td></td>'+
                        '			<td></td>'+
                        '			<td></td>'+
                        '			<td>Convulsiones</td>'+
                        '			<td>'+exp.convulsiones+'</td>'+
                        '		</tr>'+
                        '		<tr>'+
                        '			<td></td>'+
                        '			<td></td>'+
                        '			<td></td>'+
                        '			<td></td>'+
                        '			<td></td>'+
                        '			<td></td>'+
                        '			<td>Urosepsis</td>'+
                        '			<td>'+exp.urosepsis+'</td>'+
                        '		</tr>'+
                        '	</table>');
                }
                else
                {
                    res.send("<p>No existe el expediente</p>");
                }
            }
        });
    }
    else
    {
        res.send("<p>Su busquede debe contener solo caracteres alfanumericos</p>");
    }
    
}
function modificar(req,res)
{

}
function buscar(req,res)
{
    Expediente.findById(req.body.id,(err,exp)=>{
        if(err)
        {
            res.send("Error en la busqueda del Expediente: "+req.body.id);
        }
        else{
            if(exp)
            {
               res.send( 
                '<table class="table table-bordered table-striped">'+
                    '		<tr class="thead-dark">'+
                    '			<th colspan="2">Ficha identificacion</th>'+
                    '			<th colspan="2">APNP</th>'+
                    '			<th colspan="2">Inmunizaciones</th>'+
                    '			<th colspan="2">APP</th>'+
                    '		</tr>'+
                    '		<tr>'+
                    '			<th>Campo</th>'+
                    '			<th>Informacion</th>'+
                    '			<th>Patologia</th>'+
                    '			<th>estado</th>'+
                    '			<th>Inmunizacion</th>'+
                    '			<th>Aplicado</th>'+
                    '			<th>Enfermedad</th>'+
                    '			<th>Padecida</th>'+
                    '		</tr>'+
                    '		<tr>'+
                    '			<td>nombre</td>'+
                    '			<td>'+exp.nombre+' '+exp.apPaterno+' '+exp.apMaterno+'</td>'+
                    '			<td>Promiscuidad</td>'+
                    '			<td>'+exp.promiscuidad+'</td>'+
                    '			<td>SABIN</td>'+
                    '			<td>'+exp.sabin+'</td>'+
                    '			<td>Traumatismo</td>'+
                    '			<td>'+exp.traumatismo+'</td>'+
                    '		</tr>'+
                    '		<tr>'+
                    '			<td>direccion</td>'+
                    '			<td>'+exp.direccion+'</td>'+
                    '			<td>Hacinamiento</td>'+
                    '			<td>'+exp.hacinamiento+'</td>'+
                    '			<td>BCG</td>'+
                    '			<td>'+exp.bcg+'</td>'+
                    '			<td>Rubeola</td>'+
                    '			<td>'+exp.rubeola+'</td>'+
                    '		</tr>'+
                    '		<tr>'+
                    '			<td>curp</td>'+
                    '			<td>'+exp.curp+'</td>'+
                    '			<td>Tabaco</td>'+
                    '			<td>'+exp.tabaco+'</td>'+
                    '			<td>DPT</td>'+
                    '			<td>'+exp.dpt+'</td>'+
                    '			<td>Varicela</td>'+
                    '			<td>'+exp.varicela+'</td>'+                    
                    '		</tr>'+
                    '		<tr>'+
                    '			<td>sexo</td>'+
                    '			<td>'+exp.sexo+'</td>'+
                    '			<td>Alcohol</td>'+
                    '			<td>'+exp.alcohol+'</td>'+
                    '			<td>Antisarampion</td>'+
                    '			<td>'+exp.antisarampion+'</td>'+
                    '			<td>Sarampion</td>'+
                    '			<td>'+exp.sarampion+'</td>'+
                    '		</tr>'+
                    '		<tr>'+
                    '			<td>ocupacion</td>'+
                    '			<td>'+exp.ocupacion+'</td>'+
                    '			<td>Dieta</td>'+
                    '			<td>'+exp.dieta+'</td>'+
                    '			<td></td>'+
                    '			<td></td>'+
                    '			<td>Tosferina</td>'+
                    '			<td>'+exp.tosferina+'</td>'+
                    '		</tr>'+
                    '		<tr>'+
                    '			<td>Estado Civil</td>'+
                    '			<td>'+exp.estadoCivil+'</td>'+
                    '			<td></td>'+
                    '			<td></td>'+
                    '			<td></td>'+
                    '			<td></td>'+
                    '			<td>Escarlatina</td>'+
                    '			<td>'+exp.tosferina+'</td>'+
                    '		</tr>'+
                    '		<tr>'+
                    '			<td></td>'+
                    '			<td></td>'+
                    '			<td></td>'+
                    '			<td></td>'+
                    '			<td></td>'+
                    '			<td></td>'+
                    '			<td>Amigdalitis</td>'+
                    '			<td>'+exp.amigdalitis+'</td>'+
                    '		</tr>'+
                    '		<tr>'+
                    '			<td></td>'+
                    '			<td></td>'+
                    '			<td></td>'+
                    '			<td></td>'+
                    '			<td></td>'+
                    '			<td></td>'+
                    '			<td>Parasitosis</td>'+
                    '			<td>'+exp.parasitosis+'</td>'+
                    '		</tr>'+
                    '		<tr>'+
                    '			<td></td>'+
                    '			<td></td>'+
                    '			<td></td>'+
                    '			<td></td>'+
                    '			<td></td>'+
                    '			<td></td>'+
                    '			<td>Convulsiones</td>'+
                    '			<td>'+exp.convulsiones+'</td>'+
                    '		</tr>'+
                    '		<tr>'+
                    '			<td></td>'+
                    '			<td></td>'+
                    '			<td></td>'+
                    '			<td></td>'+
                    '			<td></td>'+
                    '			<td></td>'+
                    '			<td>Urosepsis</td>'+
                    '			<td>'+exp.urosepsis+'</td>'+
                    '		</tr>'+
                    '	</table>');
            }
            else{
                res.send("Error en la captura de los datos");
            }
        }
    });
}
function eliminar(req,res)
{
    let id = req.params.id  
    Expediente.findById(id, (err, exp) => {
        if (err)
        { 
            console.log(err);
        res.send({msg:"Ha ocurrido un error \nmientras se buscaba el expediente",url:req.baseUrl.replace('/expedientes',"")});
        }
        exp.remove(err => {
            if (err)
            { 
                console.log(err);
                res.send({msg:"Ha ocurrido un error \nmientras se eliminaba el expediente",url:req.baseUrl.replace('/expedientes',"")});
            }
            res.send({msg:"Se elimino correctamente el expediente",url:req.baseUrl.replace('/expedientes',"")});
        });
  });
}
function guardar(req, res) {
    var nuevo = req.body;
    console.log(nuevo);
    var expediente = new Expediente({
        AntecedentesHF: [
            {
                parentesco: nuevo.parentesco,
                HA: nuevo.HA,
                cancer: nuevo.cancer,
                sida: nuevo.sida,
                diabetes: nuevo.diabetes,
                TB: nuevo.TB,
                otro: nuevo.otro
            },
            {
                parentesco: nuevo.parentesco2,
                HA: nuevo.HA2,
                cancer: nuevo.cancer2,
                sida: nuevo.sida2,
                diabetes: nuevo.diabetes2,
                TB: nuevo.TB2,
                otro: nuevo.otro2
            }
        ],
        nombre: nuevo.nombre,
        apPaterno: nuevo.apPaterno,
        apMaterno: nuevo.apMaterno,
        direccion: nuevo.direccion,
        curp: nuevo.curp,
        estadoCivil: nuevo.estadoCivil,
        ocupacion: nuevo.ocupacion,
        sexo:nuevo.sexo,
        promiscuidad: nuevo.promiscuidad,
        tabaco: nuevo.tabaco,
        alcohol: nuevo.alcohol,
        fauna: nuevo.fauna,
        hacinamiento: nuevo.hacinamiento,
        dieta: nuevo.dieta,
        vivienda: nuevo.vivienda,
        sabin: nuevo.sabin,
        bcg: nuevo.bcg,
        dpt: nuevo.dpt,
        antisarampion: nuevo.antisarampion,
        sonrie: nuevo.sonrie,
        ingresoHos: nuevo.ingresoHos,
        sostieneCab: nuevo.sostieneCab,
        sienta: nuevo.sienta,
        gatea: nuevo.gatea,
        habla: nuevo.habla,
        traumatismo: nuevo.traumatismo,
        sarampion: nuevo.sarampion,
        rubeola: nuevo.rubeola,
        tosferina: nuevo.tosferina,
        varicela: nuevo.varicela,
        escarlatina: nuevo.escarlatina,
        amigdalitis: nuevo.amigdalitis,
        parasitosis: nuevo.parasitosis,
        convulsiones: nuevo.convulsiones,
        urosepsis: nuevo.urosepsis,
        cirugia: nuevo.cirugia,
        ultimaMenst: nuevo.ultimaMenst,
        fechaAnti: nuevo.fechaAnti,
        gesta: nuevo.gesta,
        ritmo: nuevo.ritmo,
        magnitudSang: nuevo.magnitudSang,
        menarquia: nuevo.menarquia,
        aborto: nuevo.aborto,
        cesarea: nuevo.cesarea,
        vidaSex: nuevo.vidaSex,
        legradoUt: nuevo.legradoUt,
        pruebaEnb: nuevo.pruebaEnb,
        citologia: nuevo.citologia,
        tipoAnt: nuevo.tipoAnt,
    });
    expediente.save((err)=>{
        if(err)
        {
            console.log(err);
            res.send({msg:"Ha ocurrido un erro en el guardado, porfavor intente de nuevo",url:req.baseUrl.replace("/expedientes","")});
        }
        else{

            res.send({msg:"Expediente creado Exitosamente1 !",url:req.baseUrl.replace("/expedientes","")});
        }
    });
    //console.log(expediente);
}
module.exports={
    modificar,
    eliminar,
    guardar,
    buscar,
    query
}
