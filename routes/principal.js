'use strict'
const express = require('express');
const principal=express.Router();
var RutasUsuario=require("./usuario");
var RutasExpediente=require("./expediente");
var RutasCoordinador=require("./coordinador");
var RutasConsulta=require("./consulta");
var ControladorPrincipal=require("../controllers/principal");
principal.get("/:Usuario&:Password",(req,res)=>{
    console.log(req.params.Usuario+req.params.Password);
    res.send("http://localhost:3000/principal/"+req.params.Usuario+"/view");
});
principal.use("/usuarios",RutasUsuario);
principal.use("/expedientes",RutasExpediente);
principal.use("/coordinador",RutasCoordinador);
principal.use("/consulta",RutasConsulta);
principal.post("/principal",ControladorPrincipal.config);
module.exports=principal;