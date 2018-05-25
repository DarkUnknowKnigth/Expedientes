'use strict'
const express = require('express');
const controladorCoordinador=require('../controllers/coordinador');
const coordinador=express.Router();

coordinador.get("/informe",(req,res)=>{
    res.status(200).render("../views/pages/informe.ejs");
});
coordinador.get("/hojaDiaria",(req,res)=>{
    res.status(200).render("../views/pages/hojaDiaria.ejs");
});
coordinador.post("/generaInforme",controladorCoordinador.generarInforme);
coordinador.post("/generarHojaDiaria",controladorCoordinador.generarHojaDiaria);
coordinador.post("/estadistica",controladorCoordinador.estadistica);
module.exports=coordinador;