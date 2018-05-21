var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var ExpedinteSchema= Schema({
    AntecedentesHF:{
        Parientes:[
            {
                parentesco:{type:String,required: true},
                HA:{type:Boolean,required: true},
                cancer:{type:Boolean,required: true},
                sida:{type:Boolean,required: true},
                diabetes:{type:Boolean,required: true},
                TB:{type:Boolean,required: true},
                otro:{type:String,required: true}
            }
        ]
    },
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
        promiscuidad:{type:Boolean,required: true},
        tabaco:{type:Boolean,required: true},
        alcohol:{type:Boolean,required: true},
        Fauna:{type:Boolean,required: true},
        hacinamiento:{type:Boolean,required: true},
        dieta:{type:Boolean,required: true},
        vivienda:{type:String,required: true}
    },
    Inmunizaciones:{
        sabin:{type:Boolean,required: true},
        bgg:{type:Boolean,required: true},
        dpt:{type:Boolean,required: true},
        antisarampion:{type:Boolean,required: true}
    }
    ,
    APP:{
        sonrie:{type:Boolean,required: false},
        ingresoHos:{type:Boolean,required: false},
        sostieneCab:{type:Boolean,required: false},
        sienta:{type:Boolean,required: false},
        gatea:{type:Boolean,required: false},
        habla:{type:Boolean,required: false},
        traumatismo:{type:Boolean,required: true},
        sarampion:{type:Boolean,required: true},
        rubeola:{type:Boolean,required: true},
        tosferina:{type:Boolean,required: true},
        varicela:{type:Boolean,required: true},
        escarlatina:{type:Boolean,required: true},
        amigdalitis:{type:Boolean,required: true},
        parasitosis:{type:Boolean,required: true},
        convulsiones:{type:Boolean,required: true},
        urosepsis:{type:Boolean,required: true},
        cirugia:{type:Boolean,required: true}


    },
    AntecedentesG:{
        ultimaMenst:{type:Date,required:false},
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

    }

});
module.exports=mongoose.model('Expediente',ExpedienteSchema);