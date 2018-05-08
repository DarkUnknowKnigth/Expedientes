//contiene las libresias y metodos , ficheros y rutas 
/*==========================================================
========================= dependencias =====================
============================================================*/
'use strict'

const bodyParser=require('body-parser');
const express=require("express");
const morgan =require("morgan");
var user_routes=require("./routes/usuario");
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
app.use("/api",user_routes);
app.get("/",(req,res)=>{
    res.render("pages/login");
});
app.get("/expediente",(req,res)=>{
    res.status(200).send({message:"interfaceExpedientes"});//status 200=ok
});
app.get("/public/assets/1.jpg",(req,res)=>{
    res.status(200).send("/public/assets/1.jpg");
});

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