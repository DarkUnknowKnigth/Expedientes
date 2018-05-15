'use strict'
const express = require('express');
const valida=express.Router();
var Controladorvalida=require("../controllers/valida");

valida.post("/usuario",Controladorvalida.validarUsuario); //ruta encargada de recibir la informacion y pasarla al controlador
module.exports=valida;