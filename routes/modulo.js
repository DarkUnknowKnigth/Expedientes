'use strict'
const express = require('express');
const modulo=express.Router();
var address='https://stark-sea-10471.herokuapp.com';
var RutasUsuario=require("./usuario");
var RutasExpediente=require("./expediente");
var RutasCoordinador=require("./coordinador");
var RutasConsulta=require("./consulta");
var Usuario=require("../models/usuario");
var Permiso=require("../models/permiso");
var Administrador=require("../models/administrador");
modulo.get("/:id&:user&:pass",(req,res)=>{
    Usuario.findById(req.params.id).populate('permiso').exec((err,usuario)=>
    {
        if(err)
        {
            res.redirect(address+"/");
        }
        else
        {
            if(usuario)
            {
                console.log("usuarios enonctrado: "+usuario);
                if(req.params.user==usuario.usuario && req.params.pass==usuario.password)
                {
                    console.log(usuario.permiso);
                    res.render("../views/pages/principal.ejs",
                    {
                        //nombre
                        user:usuario.nombre+" "+usuario.apPaterno+" "+usuario.apMaterno,
                        //permisos de acceso
                        expediente:usuario.permiso.AccesoExp,
                        usuario:usuario.permiso.AccesoUser,
                        consulta:usuario.permiso.AccesoConsulta,
                        coordinador:usuario.permiso.AccesoCenso,
                        //permisos de exp
                        crearExp:usuario.permiso.CrearExp,
                        ModificarExp:usuario.permiso.ModificarExp,
                        EliminarExp:usuario.permiso.EliminarExp,  
                        //permisos de user
                        CrearUser:usuario.permiso.CrearUser,
                        ModificarUser:usuario.permiso.ModificarUser,
                        EliminarUser:usuario.permiso.EliminarUser,
                        //links para las modificaciones
                        crearUsuarios:`${address}/modulo/${usuario._id}&${usuario.usuario}&${usuario.password}/usuarios/nuevoUsuario`,
                        crearExpedientes:`${address}/modulo/${usuario._id}&${usuario.usuario}&${usuario.password}/expedientes/nuevoExpediente`
                    });
                }
                else
                {
                    res.redirect(address+"/");
                }
            }
            else
            {
                Administrador.findById(req.params.id,(err,admin)=>
                {
                    if(err)
                    {
                        res.redirect(address+"/");
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
                                    expediente:true,
                                    usuario:true,
                                    consulta:false,
                                    coordinador:false,
                                    crearUsuarios:`${address}/modulo/${admin._id}&${admin.usuario}&${admin.password}/usuarios/nuevoUsuario`,
                                    crearExpedientes:`${address}/modulo/${admin._id}&${admin.usuario}&${admin.password}/expedientes`
                                });
                            }
                            else
                            {
                                res.redirect(address+"/");
                            }
                        }
                        else
                        {
                            res.redirect(address+"/");
                        }
                    }
                });
            }
        }
    });
   
});
modulo.get("/:id&:user&:pass/:status",(req,res)=>{
    if(req.params.status=="done")
    {
        
    }
    else
    {

    }
});
modulo.use("/:id&:user&:pass/usuarios",RutasUsuario);
modulo.use("/:id&:user&:pass/expedientes",RutasExpediente);
modulo.use("/:id&:user&:pass/coordinador",RutasCoordinador);
modulo.use("/:id&:user&:pass/consulta",RutasConsulta);
module.exports=modulo;