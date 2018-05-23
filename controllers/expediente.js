'use strict'
const Expediente=require("../models/expediente");
function modificar(req,res)
{

}
function buscar(req,res)
{
    Expediente.findById(req.body.id,(err,exp)=>{
        if(err)
        {
            res.send("Error en la busqueda del Expedeinte: "+req.body.id);
        }
        else{
            if(exp)
            {
               res.send( '<table>'+
				'		<tr>'+
				'			<th colspan="2">Ficha identificacion</th>'+
				'		</tr>'+
				'		<tr>'+
				'			<td>Campo</td>'+
				'			<td>Valor</td>'+
				'		</tr>'+
				'		<tr>'+
				'			<td>nombre</td>'+
				'			<td>'+exp.nombre+'</td>'+
				'		</tr>'+
				'		<tr>'+
				'			<td>direccion</td>'+
				'			<td>'+exp.direccion+'</td>'+
				'		</tr>'+
				'		<tr>'+
				'			<td>curp</td>'+
				'			<td>'+exp.curp+'</td>'+
				'		</tr>'+
				'		<tr>'+
				'			<td>sexo</td>'+
				'			<td>'+exp.sexo+'</td>'+
				'		</tr>'+
				'		<tr>'+
				'			<td>ocupacion</td>'+
				'			<td>'+exp.ocupacion+'</td>'+
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
            res.send(req.baseUrl.replace('/expedientes',""));
        }
        exp.remove(err => {
            if (err)
            { 
                console.log(err);
                res.send(req.baseUrl.replace('/expedientes',""));
            }
            res.send(req.baseUrl.replace('/expedientes',""));
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
            console.log("ERROR:"+err);
            res.send({msg:"Ha ocurrido un erro en el guardado, porfavor intente de nuevo",url:req.baseUrl.replace("/expedientes","")});
        }
        else{

            res.send({msg:"Expedeinte creado Exitosamente1 !",url:req.baseUrl.replace("/expedientes","")});
        }
    });
    //console.log(expediente);
}
module.exports={
    modificar,
    eliminar,
    guardar,
    buscar
}
