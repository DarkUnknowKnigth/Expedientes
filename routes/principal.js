'use strict'
const express = require('express');
const principal=express.Router();
var ControladorPrincipal=require("../controllers/principal");
principal.get("/:id&:nombre",(req,res)=>{
    res.send({message:"Ingresando...",url:"http://localhost:3000/modulo/"+req.params.nombre});
});


module.exports=principal;