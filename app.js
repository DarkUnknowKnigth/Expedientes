//contiene las libresias y metodos , ficheros y rutas 
/*==========================================================
========================= dependencias =====================
============================================================*/
'use strict'
var helmet = require('helmet');
const bodyParser=require('body-parser');
const express=require("express");
const morgan =require("morgan");
var path = require('path');
var session=require('express-session');
var RutasPrincipal=require("./routes/principal");
var RutasValidacion=require('./routes/valida');
var RutasModulo=require("./routes/modulo");

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
app.use(helmet());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(session({
    secret:"sionisourgood",
    resave:false,
    saveUninitialized:false
}));
app.use(morgan('short'));
/*==========================================================
========================= RUTAS ============================
============================================================*/

//ruta base carga vista del login es ala que se accede al cargar la pagina por primera vez
app.get("/",(req,res)=>{
    res.render("pages/login");
});
//ruta de usuario logueado
app.use("/principal",RutasPrincipal); //menu con todas las opciones segun privilegios
app.use("/validacion",RutasValidacion); //la loguearse se envia la informacion a la ruta de validacion/usuario
app.use("/modulo",RutasModulo);

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