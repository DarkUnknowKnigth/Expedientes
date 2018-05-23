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
var Expediente=require("../models/expediente");
var Administrador=require("../models/administrador");
const ejsLint = require('ejs-lint');
    
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
                var Usuariosfinded = "0 results";
                var Expfined = "0 results";
                if(req.params.user==usuario.usuario && req.params.pass==usuario.password)
                {
                    Expediente.find({}).exec((err, expedientes) => {
                        if (!err) {
                            console.log(expediente);
                            Expfined = expedientes;
                        }
                        else {
                            console.info("error: " + err);
                        }

                    });
                    res.render("../views/pages/principal.ejs",
                    {
                        //variables para la vista --->principal.ejs
                        //nombre
                        data:usuario,
                        user:usuario.nombre+" "+usuario.apPaterno+" "+usuario.apMaterno,
                        //permisos de acceso
                        permiso:{
                            expediente:usuario.permiso.AccesoExp,
                            usuario:usuario.permiso.AccesoUser,
                            consulta:usuario.permiso.AccesoConsulta,
                            coordinador:usuario.permiso.AccesoCenso,
                            //permisos de exp
                            crearExp:usuario.permiso.CrearExp,
                            modificarExp:usuario.permiso.ModificarExp,
                            eliminarExp:usuario.permiso.EliminarExp,  
                            //permisos de user
                            crearUser:usuario.permiso.CrearUser,
                            modificarUser:usuario.permiso.ModificarUser,
                            eliminarUser:usuario.permiso.EliminarUser,
                            
                        },
                        //links usuarios
                        crearUsuario:`${address}/modulo/${usuario._id}&${usuario.usuario}&${usuario.password}/usuarios/nuevoUsuario`,
                        modificarUsuario:`${address}/modulo/${usuario._id}&${usuario.usuario}&${usuario.password}/usuarios/modificaUsuario`,
                        buscarUsuario:`${address}/modulo/${usuario._id}&${usuario.usuario}&${usuario.password}/usuarios/buscarUsuario`,
                        eliminarUsuario:`${address}/modulo/${usuario._id}&${usuario.usuario}&${usuario.password}/usuarios/eliminarUsuario`,
                        //link expedientes
                        crearExpediente:`${address}/modulo/${usuario._id}&${usuario.usuario}&${usuario.password}/expedientes/nuevoExpediente`,
                        modificarExpediente:`${address}/modulo/${usuario._id}&${usuario.usuario}&${usuario.password}/expedientes/modificarExpediente`,
                        eliminarExpediente:`${address}/modulo/${usuario._id}&${usuario.usuario}&${usuario.password}/expedientes/eliminarExpediente`,
                        buscarExpediente:`${address}/modulo/${usuario._id}&${usuario.usuario}&${usuario.password}/expedientes/buscarExpediente`,
                        //link coordinador
                        generarHoja:`${address}/modulo/${usuario._id}&${usuario.usuario}&${usuario.password}/coordinador/generarHojaDiaria`,
                        generarInforme:`${address}/modulo/${usuario._id}&${usuario.usuario}&${usuario.password}/coordinador/generarInforme`,
                        //link consulta
                        nuevaConsulta:`${address}/modulo/${usuario._id}&${usuario.usuario}&${usuario.password}/consulta/nuevaConsulta`,
                        usuarios:"",
                        ExpeT:Expfined,
                        localURL:`${address}/modulo/${usuario._id}&${usuario.usuario}&${usuario.password}/`
                    });
                    console.log("fine");
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
                            var Usuariosfinded="0 results";
                            var Expfined="0 results";
                            
                            if(req.params.user==admin.usuario && req.params.pass==admin.password)
                            {
                               
                                Expediente.find({}).exec((err,expedientes)=>{
                                    if(!err)
                                    {
                                        Expfined=expedientes;
                                    }
                                    else{
                                        console.info("error: "+err);
                                    }
            
                                });
                                Usuario.find({}).exec((err,usuarios)=>{
                                    if(!err)
                                    {
                                        Usuariosfinded=usuarios;
                                        res.render("../views/pages/principal.ejs",
                                        {
                                            //permisos de acceso
                                            data:admin,
                                            user:admin.usuario,
                                            permiso:{
                                                expediente:true,
                                                usuario:true,
                                                consulta:false,
                                                coordinador:false,
                                                //expedientes
                                                crearExp:true,
                                                modificarExp:true,
                                                eliminarExp:true,
                                                //permisos de user
                                                crearUser:true,
                                                modificarUser:true,
                                                eliminarUser:true,
                                            },
                                            //link de usuarios
                                            crearUsuario:`${address}/modulo/${admin._id}&${admin.usuario}&${admin.password}/usuarios/nuevoUsuario`,
                                            modificarUsuario:`${address}/modulo/${admin._id}&${admin.usuario}&${admin.password}/usuarios/modificaUsuario`,
                                            buscarUsuario:`${address}/modulo/${admin._id}&${admin.usuario}&${admin.password}/usuarios/buscarUsuario`,
                                            eliminarUsuario:`${address}/modulo/${admin._id}&${admin.usuario}&${admin.password}/usuarios/eliminarUsuario/`,
                                            //link expedientes
                                            crearExpediente:`${address}/modulo/${admin._id}&${admin.usuario}&${admin.password}/expedientes/nuevoExpediente`,
                                            modificarExpediente:`${address}/modulo/${admin._id}&${admin.usuario}&${admin.password}/expedientes/modificarExpediente`,
                                            eliminarExpediente:`${address}/modulo/${admin._id}&${admin.usuario}&${admin.password}/expedientes/eliminarExpediente`,
                                            buscarExpediente:`${address}/modulo/${admin._id}&${admin.usuario}&${admin.password}/expedientes/buscarExpediente`,
                                            //link coordinador
                                            generarHoja:`${address}/modulo/${admin._id}&${admin.usuario}&${admin.password}/coordinador/generarHojaDiaria`,
                                            generarInforme:`${address}/modulo/${admin._id}&${admin.usuario}&${admin.password}/coordinador/generarInforme`,
                                            //link consulta
                                            nuevaConsulta:`${address}/modulo/${admin._id}&${admin.usuario}&${admin.password}/consulta/nuevaConsulta`,
                                            //feed de tabla
                                            ExpeT:Expfined,
                                            usuarios: Usuariosfinded,
                                            localURL:`${address}/modulo/${admin._id}&${admin.usuario}&${admin.password}/`
                                        });
                                    }
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
modulo.use("/:id&:user&:pass/usuarios",RutasUsuario);
modulo.use("/:id&:user&:pass/expedientes",RutasExpediente);
modulo.use("/:id&:user&:pass/coordinador",RutasCoordinador);
modulo.use("/:id&:user&:pass/consulta",RutasConsulta);
module.exports=modulo;