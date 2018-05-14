//contiene las libresias y metodos , ficheros y rutas 
/*==========================================================
========================= dependencias =====================
============================================================*/
'use strict'

const bodyParser=require('body-parser');
const express=require("express");
const morgan =require("morgan");
var path = require('path');
var Principal=require("./routes/principal");
var RutasValidacion=require('./routes/valida');

/*==========================================================
======================== instanciando express ==============
============================================================*/
const app=express();
/*==========================================================
============== usando motor de plantillas ejs ==============
============================================================*/
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
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

//ruta base carga vista del login
app.get("/",(req,res)=>{
    res.render("pages/login");
});
//ruta de usuario logueado
app.use("/principal",Principal);
app.use("/validacion",RutasValidacion);


//ruta de error
app.get("*",(req,res)=>{
    res.status(404).render("pages/error");
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