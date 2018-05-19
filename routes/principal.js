'use strict'
const express = require('express');
const principal=express.Router();
var address='https://stark-sea-10471.herokuapp.com';
principal.get("/:id&:user&:pass",(req,res)=>{
    res.send({message:
        '<center>'+
        '<span class="badge badge-success border-dark">'+
            '<h1>Bienvenido al Sistema: <br> '+req.params.user+
       '!</h1></span>'+
    '</center>',url:address+"/modulo/"+req.params.id+"&"+req.params.user+"&"+req.params.pass});
}); 
module.exports=principal;