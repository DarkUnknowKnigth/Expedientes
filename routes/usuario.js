'use strict'
const express = require('express');
const controladorUsuario=require('../controllers/usuario');
const usuario=express.Router();

// usuario.get("/crear",(req,res)=>{
//     res.status(200).render("../views/partials/crearUsuario.ejs");
// });
usuario.get("/modificar/:id",(req,res)=>{
    res.send(req.baseUrl+"/modificaUsuario/"+req.params.id);
});
// usuario.get("/eliminar",(req,res)=>{
//     res.status(200).render("../views/partials/eliminarUsuario.ejs");
// });
usuario.post('/nuevoUsuario',controladorUsuario.validar);
usuario.put('/modificaUsuario/:id',controladorUsuario.modificar);
usuario.put('/toggleUser/:id',controladorUsuario.toggle);
usuario.delete('/eliminarUsuario/:id',controladorUsuario.eliminar);
usuario.post('/buscarUsuario',controladorUsuario.buscar);
module.exports=usuario;