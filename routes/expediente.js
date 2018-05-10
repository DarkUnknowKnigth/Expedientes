'use strict'
const express = require('express');
const controladorExpediente=require('../controllers/expediente');
const expediente=express.Router();

expediente.get('/crear',(req,res)=>{
    res.status(200).render("../views/partials/crearExpedeinte.ejs");
});
expediente.get('/modificar',(req,res)=>{
    res.status(200).render("../views/partials/modificarExpedeinte.ejs");
});
expediente.get('/eliminar',(req,res)=>{
    res.status(200).render("../views/partials/eliminarExpedeinte.ejs");
});
expediente.post('/nuevoExpediente',controladorExpediente.guardar);
expediente.post('/nuevoModificar',controladorExpediente.modificar);
expediente.post('/nuevoEliminar',controladorExpediente.eliminar);
module.exports=expediente;

