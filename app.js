//contiene las libresias y metodos , ficheros y rutas 
/*==========================================================
========================= dependencias =====================
============================================================*/
'use strict'

const bodyParser=require('body-parser');
const express=require("express");
const morgan =require("morgan");
var RutasValidacion=require('./routes/valida');
var RutasUsuario=require("./routes/usuario");
var RutasExpediente=require("./routes/expediente");
var RutasCoordinador=require("./routes/coordinador");
var RutasConsulta=require("./routes/consulta");
/*==========================================================
======================== instanciando express ==============
============================================================*/
const app=express();
/*==========================================================
============== usando motor de plantillas ejs ==============
============================================================*/
app.set('view engine','ejs');
/*==========================================================
======================== middleware ========================
============================================================*/
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('short'));
/*==========================================================
========================= RUTAS ============================
============================================================*/
app.get("/",(req,res)=>{
    res.render("pages/login");
});
app.use("/validacion",RutasValidacion);
app.use("/usuarios",RutasUsuario);
app.use("/expedientes",RutasExpediente);
app.use("/coordinador",RutasCoordinador);
app.use("/consulta",RutasConsulta);


//ruta de error
app.get("*",(req,res)=>{
    res.status(404).send("<h1>Oh no algo malo ha ocurrido!...</h1>");
});
/*==========================================================
========== configuracion del body-parser====================
============================================================*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*==========================================================
=============configuracion de cabeceras=====================
============================================================*/

/*==========================================================
======================== Rutas base ========================
============================================================*/


module.exports=app;