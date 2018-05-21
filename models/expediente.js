'use strict'
var mongoose=require("mongoose");
var Consulta=require("../models/consulta");
var Schema=mongoose.Schema;
var ExpedienteSchema= Schema({
    AntecedentesHF:[
            {
                parentesco:{type:String,required: false},
                HA:{type:String,required: false},
                cancer:{type:String,required: false},
                sida:{type:String,required: false},
                diabetes:{type:String,required: false},
                TB:{type:String,required: false},
                otro:{type:String,required: false}
            }
    ]
    ,
    FichaId:{
        nombre:{type:String,required: false},
        apPaterno:{type:String,required: false},
        apMaterno:{type:String,required: false},
        direccion:{type:String,required: false},
        curp:{type:String,required: false},
        estadoCivil:{type:String,required: false},
        ocupacion:{type:String,required: false}
    },
    APNP:{
        promiscuidad:{type:String,required: false},
        tabaco:{type:String,required: false},
        alcohol:{type:String,required: false},
        fauna:{type:String,required: false},
        hacinamiento:{type:String,required: false},
        dieta:{type:String,required: false},
        vivienda:{type:String,required: false}
    },
    Inmunizaciones:{
        sabin:{type:String,required: false},
        bcg:{type:String,required: false},
        dpt:{type:String,required: false},
        antisarampion:{type:String,required: false}
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