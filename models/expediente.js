'use strict'
var mongoose=require("mongoose");
var Consulta=require("../models/consulta");
var Schema=mongoose.Schema;
var ExpedienteSchema= Schema({
    AntecedentesHF:[
            {
                parentesco:{type:String,required: true},
                HA:{type:String,required: true},
                cancer:{type:String,required: true},
                sida:{type:String,required: true},
                diabetes:{type:String,required: true},
                TB:{type:String,required: true},
                otro:{type:String,required: true}
            }
    ]
    ,
    FichaId:{
        nombre:{type:String,required: true},
        apPaterno:{type:String,required: true},
        apMaterno:{type:String,required: true},
        direccion:{type:String,required: true},
        curp:{type:String,required: true},
        estadoCivil:{type:String,required: true},
        ocupacion:{type:String,required: true}
    },
    APNP:{
        promiscuidad:{type:String,required: true},
        tabaco:{type:String,required: true},
        alcohol:{type:String,required: true},
        fauna:{type:String,required: true},
        hacinamiento:{type:String,required: true},
        dieta:{type:String,required: true},
        vivienda:{type:String,required: true}
    },
    Inmunizaciones:{
        sabin:{type:String,required: true},
        bcg:{type:String,required: true},
        dpt:{type:String,required: true},
        antisarampion:{type:String,required: true}
    }
    ,
    APP:{
        sonrie:{type:String,required: false},
        ingresoHos:{type:String,required: false},
        sostieneCab:{type:String,required: false},
        sienta:{type:String,required: false},
        gatea:{type:String,required: false},
        habla:{type:String,required: false},
        traumatismo:{type:String,required: false},
        sarampion:{type:String,required: false},
        rubeola:{type:String,required: false},
        tosferina:{type:String,required: false},
        varicela:{type:String,required: false},
        escarlatina:{type:String,required: false},
        amigdalitis:{type:String,required: false},
        parasitosis:{type:String,required: false},
        convulsiones:{type:String,required: false},
        urosepsis:{type:String,required: false},
        cirugia:{type:String,required: false}


    },
    AntecedentesG:{
        ultimaMenst:{type:String,required:false},
        fechaAnti:{type:Date,required:false},
        gesta:{type:String,required: false},
        ritmo:{type:String,required: false},
        magnitudSang:{type:String,required: false},
        menarquia:{type:String,required: false},
        aborto:{type:String,required: false},
        cesarea:{type:String,required: false},
        vidaSex:{type:String,required: false},
        legradoUt:{type:String,required: false},
        pruebaEnb:{type:String,required: false},
        citologia:{type:String,required: false},
        tipoAnt:{type:String,required: false}

    },
    //Consulta:{type:Schema.ObjectId,ref:'Consulta'}

});
module.exports=mongoose.model('Expediente',ExpedienteSchema);