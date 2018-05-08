'use strict'
const express = require('express');
const UserController=require('../controllers/usuario');
const api=express.Router();
api.get('/',(req,res)=>{
    res.status(200).send("estas en el api");
});
api.post('/newUser',UserController.save);
api.get('/doctor',(req,res)=>{
    res.status(200).render("../views/pages/consulta.ejs");
});

module.exports=api;