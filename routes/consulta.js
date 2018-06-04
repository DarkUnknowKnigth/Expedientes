'use strict'
const express = require('express');
const controladorConsulta=require('../controllers/consulta');
const consulta=express.Router();
consulta.post('/nuevaConsulta',controladorConsulta.crear);
consulta.post('/guardarConsulta',controladorConsulta.guardar)

module.exports=consulta;