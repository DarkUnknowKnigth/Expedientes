'use strict'
const Expediente=require("../models/expediente");
function modificar(req,res)
{

}
function eliminar(req,res)
{
    
}
function guardar(req, res) {
    var nuevo = req.body;
    console.log(nuevo);
    var expediente = new Expediente({
        AntecedentesHF: [
            {
                parentesco: nuevo.AntecedentesHF[0][parentesco],
                HA: nuevo.AntecedentesHF[0][HA],
                cancer: nuevo.AntecedentesHF[0][cancer],
                sida: nuevo.AntecedentesHF[0][sida],
                diabetes: nuevo.AntecedentesHF[0][diabetes],
                TB: nuevo.AntecedentesHF[0][TB],
                otro: nuevo.AntecedentesHF[0][otro]
            },
            {
                parentesco: nuevo.AntecedentesHF[1][parentesco],
                HA: nuevo.AntecedentesHF[1][HA],
                cancer: nuevo.AntecedentesHF[1][cancer],
                sida: nuevo.AntecedentesHF[1][sida],
                diabetes: nuevo.AntecedentesHF[1][diabetes],
                TB: nuevo.AntecedentesHF[1][TB],
                otro: nuevo.AntecedentesHF[1][otro]
            }
        ],
        nombre: nuevo.nombre,
        apPaterno: nuevo.apPaterno,
        apMaterno: nuevo.apMaterno,
        direccion: nuevo.direccion,
        curp: nuevo.curp,
        estadoCivil: nuevo.estadoCivil,
        ocupacion: nuevo.ocupacion,
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
            res.send("No se pudo guardar el expediente, Porfavor intente de nuevo");
        }
        else{
            res.send("Expedeinte creado Exitosamente1 !");
        }
    });
    //console.log(expediente);
}
module.exports={
    modificar,
    eliminar,
    guardar,
}
