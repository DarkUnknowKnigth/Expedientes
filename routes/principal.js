'use strict'
const express = require('express');
const principal=express.Router();
var ControladorPrincipal=require("../controllers/principal");
principal.post("/principal",ControladorPrincipal.config);
module.exports=principal;