'use strict'
const express = require('express');
const controladorExpediente=require('../controllers/expediente');
const expediente=express.Router();
expediente.get('/crear',(req,res)=>{
    res.status(200).render("../views/partials/crearExpedeinte.ejs");
});
// expediente.put('/modificar',controladorExpediente.update);
expediente.get('/eliminar',(req,res)=>{
    res.status(200).render("../views/partials/eliminarExpedeinte.ejs");
});
expediente.post('/nuevoExpediente',controladorExpediente.guardar);
expediente.post('/SolicitarModificarExpediente',controladorExpediente.modificar);
expediente.put('/modificar',controladorExpediente,update);
expediente.delete('/eliminarExpediente/:id',controladorExpediente.eliminar);
expediente.post('/buscarExpediente',controladorExpediente.buscar);
expediente.post('/buscarUno',controladorExpediente.query);
module.exports=expediente;

