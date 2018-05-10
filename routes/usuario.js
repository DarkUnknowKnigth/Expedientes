'use strict'
const express = require('express');
const controladorUsuario=require('../controllers/usuario');
const usuario=express.Router();

usuario.get("/crear",(req,res)=>{
    res.status(200).render("../views/partials/crearUsuario.ejs");
});
usuario.get("/modificar",(req,res)=>{
    res.status(200).render("../views/partials/modificarUsuario.ejs");
});
usuario.get("/eliminar",(req,res)=>{
    res.status(200).render("../views/partials/eliminarUsuario.ejs");
});
usuario.post('/nuevoUsuario',controladorUsuario.guardar);
usuario.post('/modificaUsuario',controladorUsuario.modificar);
usuario.post('/eliminarUsuario',controladorUsuario.eliminar);
module.exports=usuario;