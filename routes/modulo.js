'use strict'
const express = require('express');
const modulo=express.Router();
var RutasUsuario=require("./usuario");
var RutasExpediente=require("./expediente");
var RutasCoordinador=require("./coordinador");
var RutasConsulta=require("./consulta");
var Usuario=require("../models/usuario");
modulo.get("/:id&:user&:pass",(req,res)=>{
    Usuario.findById(req.params.id,(err,usuario)=>
    {
        if(err)
        {
            res.status(404).redirect("http://localhost:3000/");
        }
        else
        {
            if(usuario)
            {
                if(req.params.user==usuario.usuario && req.params.pass==usuario.password)
                {
                    res.render("../views/pages/principal.ejs",{user:req.params.user});
                }
                else
                {
                    res.status(404).redirect("http://localhost:3000/");
                }
            }
        }
    });
   
});
modulo.use("/:id&:user&:pass/usuarios",RutasUsuario);
modulo.use("/:id&:user&:pass/expedientes",RutasExpediente);
modulo.use("/:id&:user&:pass/coordinador",RutasCoordinador);
modulo.use("/:id&:user&:pass/consulta",RutasConsulta);
module.exports=modulo;