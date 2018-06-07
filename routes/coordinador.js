'use strict'
const express = require('express');
const controladorCoordinador=require('../controllers/coordinador');
const coordinador=express.Router();
coordinador.post("/generarHojaDiaria",controladorCoordinador.generarHojaDiaria);
coordinador.post("/estadistica",controladorCoordinador.estadistica);
coordinador.post("/anual",controladorCoordinador.anual);
module.exports=coordinador;