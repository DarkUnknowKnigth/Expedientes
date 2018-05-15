'use strict'
const express = require('express');
const modulo=express.Router();
var RutasUsuario=require("./usuario");
var RutasExpediente=require("./expediente");
var RutasCoordinador=require("./coordinador");
var RutasConsulta=require("./consulta");
modulo.get("/:user",(req,res)=>{
    res.render("../views/pages/principal.ejs",{user:req.params.user});
});
modulo.use("/usuarios",RutasUsuario);
modulo.use("/expedientes",RutasExpediente);
modulo.use("/coordinador",RutasCoordinador);
modulo.use("/consulta",RutasConsulta);
module.exports=modulo;