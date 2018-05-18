'use strict'
const express = require('express');
const modulo=express.Router();
var RutasUsuario=require("./usuario");
var RutasExpediente=require("./expediente");
var RutasCoordinador=require("./coordinador");
var RutasConsulta=require("./consulta");
var Usuario=require("../models/usuario");
var Administrador=require("../models/administrador");
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
                    res.render("../views/pages/principal.ejs",{user:usuario.usuario});
                }
                else
                {
                    res.status(404).redirect("http://localhost:3000/");
                }
            }
            else
            {
                Administrador.findById(req.params.id,(err,admin)=>
                {
                    if(err)
                    {
                        res.status(404).redirect("http://localhost:3000/");
                    }
                    else
                    {
                        if(admin)
                        {
                            if(req.params.user==admin.usuario && req.params.pass==admin.password)
                            {
                                res.render("../views/pages/principal.ejs",
                                {
                                    user:admin.usuario,
                                    expedientes:true,
                                    usuario:true,
                                    consulta:false,
                                    coordinador:false,
                                    linkUsuarios:`http://localhost:3000/modulo/${admin._id}&${admin.usuario}&${admin.password}/usuarios/nuevoUsuario`,
                                    linkExpedientes:`http://localhost:3000/modulo/${admin._id}&${admin.usuario}&${admin.password}/expedientes`
                                });
                            }
                            else
                            {
                                res.status(404).redirect("http://localhost:3000/");
                            }
                        }
                        else
                        {
                            res.status(404).redirect("http://localhost:3000/");
                        }
                    }
                });
            }
        }
    });
   
});
modulo.use("/:id&:user&:pass/usuarios",RutasUsuario);
modulo.use("/:id&:user&:pass/expedientes",RutasExpediente);
modulo.use("/:id&:user&:pass/coordinador",RutasCoordinador);
modulo.use("/:id&:user&:pass/consulta",RutasConsulta);
module.exports=modulo;