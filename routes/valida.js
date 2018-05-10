'use strict'
const express = require('express');
const valida=express.Router();
var Controladorvalida=require("../controllers/valida");

valida.post("/usuario",Controladorvalida.validarUsuario);
module.exports=valida;