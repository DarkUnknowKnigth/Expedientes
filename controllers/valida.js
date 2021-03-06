'use strict'
//modelos de la base de datos
var address = 'https://stark-sea-10471.herokuapp.com'
var Ss=require('../models/session');
var Usuario = require("../models/usuario");
var Administrador = require("../models/administrador");
var Session=require('../controllers/session');
//funcion que determina si un usuario es valido
//parametros(Datos enviados por post, respuesta del servidor heredada)
function validarUsuario(req, res) {
    //verifica si existe un parametro usuario y password enviados por Post
    if (req.body.Usuario && req.body.Password) {
        //ver quien es?
        console.log(`usuario: ${req.body.Usuario} contraseña: ${req.body.Password}`);
        var patern = /[`~!@#$%^&*()_°¬|+\-=?;:'",.<>\{\}\[\]\\\/]/;
        //valida si user es un conjunto de letras y numeros y si la contraseña no contiene caracteres especiales del lado del server
        //en busca de parametros inexistentes o corrupcion de datos
        if (!patern.test(req.body.Usuario) && req.body.Usuario != "") {
            if (req.body.Password != "" && !patern.test(req.body.Password)) {

                //validar

                Usuario.findOne({ usuario: req.body.Usuario, password: req.body.Password }, (err, usuario) => {

                    if (err) {
                        //si encuentra un error informar
                        res.send({
                            message:
                                '<div class="alert alert-dark" role="alert">' +
                                '<form action="' + address + '/" method="GET">' +
                                '<strong class="form-control">Ha ocurrido un error <br>Porfavor intente de nuevo</strong>' +
                                '<button type="submit" class="btn btn-danger form-control">Aceptar</button>' +
                                '</form>' +
                                '</div>'
                        });
                    }
                    else {
                        if (usuario) {
                            //compara la contraseña con la de la base de datos
                            //usuario.comparar(req.body.Password)
                            //req.body.Password == usuario.password
                            if(usuario.activo)
                            {
                                if (req.body.Password == usuario.password) {
                                    //console.log(usuario);
                                    //luego redireccionar con los parametros validos a principal
                                    //=====================new
                                    Ss.findOne({"session":usuario._id}).count().exec((err,value)=>{
                                        if(!err)
                                        {
                                            if(value==1)
                                            { 
                                                res.send({
                                                    message:
                                                        '<div class="alert alert-dark" role="alert">' +
                                                        '<form action="/" method="GET">' +
                                                        '<strong class="form-control">Ya posee una sesion abierta</strong>' +
                                                        '<button type="submit" class="btn btn-danger form-control">Aceptar</button>' +
                                                        '</form>' +
                                                        '</div>'
                                                });
                                            }
                                            else
                                            {
                                                if(value==0)
                                                {
                                                    Usuario.findById(usuario._id).exec((err,user)=>{
                                                        if(!err)
                                                        {
                                                            var uss=new Ss();
                                                            uss.session=user._id;
                                                            let now=new Date(); 
                                                            uss.fecha=now.getFullYear()+"-0"+(now.getMonth()+1)+"-0"+now.getDate()+"|"+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
                                                            uss.uname=user.usuario;
                                                            uss.save((err,session)=>{
                                                                if(!err)
                                                                {
                                                                    console.log(session);  
                                                                    res.redirect( `${address}/principal/${usuario._id}&${usuario.usuario}&${usuario.password}`);

                                                                } 
                                                            });
                                                        }
                                                    }); 
                                                }  
                                                else
                                                {
                                                    res.send({
                                                        message:
                                                            '<div class="alert alert-dark" role="alert">' +
                                                            '<form action="/" method="GET">' +
                                                            '<strong class="form-control">Ya tiene una cuenta iniciada</strong>' +
                                                            '<button type="submit" class="btn btn-danger form-control">Aceptar</button>' +
                                                            '</form>' +
                                                            '</div>'
                                                    });
                                                }  
                                            }
                                        }
                                        else
                                        {
                                            console.log("error"+err);
                                            res.send({
                                                message:
                                                    '<div class="alert alert-dark" role="alert">' +
                                                    '<form action="/" method="GET">' +
                                                    '<strong class="form-control">Error interno</strong>' +
                                                    '<button type="submit" class="btn btn-danger form-control">Aceptar</button>' +
                                                    '</form>' +
                                                    '</div>'
                                            });
                                        }
                                    });
                                    //========================
                                         
                                }
                                else {
                                    res.send({
                                        message:
                                            '<div class="alert alert-dark" role="alert">' +
                                            '<form action="' + address + '/" method="GET">' +
                                            '<strong class="form-control">Usuario o contraseña no existe</strong>' +
                                            '<button type="submit" class="btn btn-danger form-control">Aceptar</button>' +
                                            '</form>' +
                                            '</div>'
                                    });
                                }
    
                            }
                            else
                            {
                                res.send({
                                    message:
                                        '<div class="alert alert-dark" role="alert">' +
                                        '<form action="' + address + '/" method="GET">' +
                                        '<strong class="form-control">Usuario deshabilitado, porfavor contacte al administrador</strong>' +
                                        '<button type="submit" class="btn btn-danger form-control">Aceptar</button>' +
                                        '</form>' +
                                        '</div>'
                                });
                            }
                            
                        }
                        else {
                            Administrador.findOne({ usuario: req.body.Usuario, password: req.body.Password }, (err, admin) => {
                                if (err) {
                                    res.send({
                                        message:
                                            '<div class="alert alert-dark" role="alert">' +
                                            '<form action="' + address + '/" method="GET">' +
                                            '<strong class="form-control">Ha ocurrido un error <br>Porfavor intente de nuevo</strong>' +
                                            '<button type="submit" class="btn btn-danger form-control">Aceptar</button>' +
                                            '</form>' +
                                            '</div>'
                                    });
                                }
                                else {
                                    if (admin) {
                                        //admin.comparar(req.body.Password)
                                        if (req.body.Password == admin.password) {
                                            //luego redireccionar con los parametros validos a principal
                                            res.redirect(`${address}/principal/${admin._id}&${admin.usuario}&${admin.password}`);
                                        }
                                        else {
                                            res.send({
                                                message:
                                                    '<div class="alert alert-dark" role="alert">' +
                                                    '<form action="' + address + '/" method="GET">' +
                                                    '<strong class="form-control">Usuario o contraseña no existe</strong>' +
                                                    '<button type="submit" class="btn btn-danger form-control">Aceptar</button>' +
                                                    '</form>' +
                                                    '</div>'
                                            });
                                        }
                                    }
                                    else {
                                        res.send({
                                            message:
                                                '<div class="alert alert-dark" role="alert">' +
                                                '<form action="' + address + '/" method="GET">' +
                                                '<strong class="form-control">Usuario o contraseña no existe</strong>' +
                                                '<button type="submit" class="btn btn-danger form-control">Aceptar</button>' +
                                                '</form>' +
                                                '</div>'
                                        });
                                    }
                                }
                            });
                        }
                    }
                });
            }
            else {
                res.status(400).send({ message: '<div class="alert alert-dark" role="alert">' +
                '<form action="' + address + '/" method="GET">' +
                '<strong class="form-control">Usted proporciono una contraseña invalida</strong>' +
                '<button type="submit" class="btn btn-danger form-control">Aceptar</button>' +
                '</form>' +
                '</div>', url: address + "/" });
            }
        }
        else {
            res.status(404).send({ message: "Usted proporciono una usuario invalido", url: address + "/" });
        }
    }
    else {
        console.log("12");
    }

    //
}
module.exports = {
    validarUsuario
}