'use strict'
const express = require('express');
const controladorConsulta=require('../controllers/consulta');
const consulta=express.Router();

consulta.get('/signosVitales',(req,res)=>{
    res.status(200).render("../views/partials/signosVitales.ejs");
});
consulta.get('/formato',(req,res)=>{
    res.status(200).render("../views/partials/formato.ejs");
});
consulta.get('/diagnostico',(req,res)=>{
    res.status(200).render("../views/partials/diagnostico.ejs");
});
consulta.post('/nuevaConsulta',controladorConsulta.crear);


module.exports=consulta;