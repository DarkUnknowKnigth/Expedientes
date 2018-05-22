'use strict'
const mongoose = require('mongoose');
var Consulta=require("../models/consulta");
var Schema=mongoose.Schema;
var ExpedienteSchema = Schema({
    AntecedentesHF: [
        {
            parentesco: { type: String, required: true },
            HA: { type: String, required: true },
            cancer: { type: String, required: true },
            sida: { type: String, required: true },
            diabetes: { type: String, required: true },
            TB: { type: String, required: true },
            otro: { type: String, required: false }
        }
    ]
    ,
    nombre: { type: String, required: true },
    apPaterno: { type: String, required: true },
    apMaterno: { type: String, required: true },
    direccion: { type: String, required: true },
    curp: { type: String, required: true },
    estadoCivil: { type: String, required: true },
    ocupacion: { type: String, required: true },
    promiscuidad: { type: String, required: true },
    tabaco: { type: String, required: true },
    alcohol: { type: String, required: true },
    fauna: { type: String, required: true },
    hacinamiento: { type: String, required: true },
    dieta: { type: String, required: true },
    vivienda: { type: String, required: true },
    sabin: { type: String, required: true },
    bcg: { type: String, required: true },
    dpt: { type: String, required: true },
    antisarampion: { type: String, required: true },
    sonrie: { type: String, required: false },
    ingresoHos: { type: String, required: false },
    sostieneCab: { type: String, required: false },
    sienta: { type: String, required: false },
    gatea: { type: String, required: false },
    habla: { type: String, required: false },
    traumatismo: { type: String, required: true },
    sarampion: { type: String, required: true },
    rubeola: { type: String, required: true },
    tosferina: { type: String, required: true },
    varicela: { type: String, required: true },
    escarlatina: { type: String, required: true },
    amigdalitis: { type: String, required: true },
    parasitosis: { type: String, required: true },
    convulsiones: { type: String, required: true },
    urosepsis: { type: String, required: true },
    cirugia: { type: String, required: true },
    ultimaMenst: { type: Date, required: false },
    fechaAnti: { type: Date, required: false },
    gesta: { type: String, required: false },
    ritmo: { type: String, required: false },
    magnitudSang: { type: String, required: false },
    menarquia: { type: String, required: false },
    aborto: { type: String, required: false },
    cesarea: { type: String, required: false },
    vidaSex: { type: String, required: false },
    legradoUt: { type: String, required: false },
    pruebaEnb: { type: String, required: false },
    citologia: { type: String, required: false },
    tipoAnt: { type: String, required: false },
    Consulta:{type:Schema.ObjectId,ref:'Consulta'}
});
module.exports=mongoose.model('Expediente',ExpedienteSchema);