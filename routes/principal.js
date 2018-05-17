'use strict'
const express = require('express');
const principal=express.Router();
principal.get("/:id&:user&:pass",(req,res)=>{
    res.send({message:
        '<center>'+
        '<span class="badge badge-success">'+
            '<h1>Bienvenido! al Sistema: <br> '+req.params.user+
       '</h1></span>'+
    '</center>',url:"http://localhost:3000/modulo/"+req.params.id+"&"+req.params.user+"&"+req.params.pass});
}); 
module.exports=principal;