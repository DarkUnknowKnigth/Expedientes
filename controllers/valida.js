'use strict'
//modelos de la base de datos
var bcrypt=require('bcrypt-nodejs');
var Usuario=require("../models/usuario");
var Administrador=require("../models/administrador");
//funcion que determina si un usuario es valido
//parametros(Datos enviados por post, respuesta del servidor heredada)
function validarUsuario(req,res)
{
    //verifica si existe un parametro usuario y password enviados por Post
    if(req.body.Usuario && req.body.Password)
    {
        //ver quien es?
        console.log(`usuario: ${ req.body.Usuario } contraseña: ${ req.body.Password }`);
        var patern=/[`~!@#$%^&*()_°¬|+\-=?;:'",.<>\{\}\[\]\\\/]/;
        //valida si user es un conjunto de letras y numeros y si la contraseña no contiene caracteres especiales del lado del server
        //en busca de parametros inexistentes o corrupcion de datos
        if(!patern.test(req.body.Usuario) && req.body.Usuario!="")
        {
            if(req.body.Password!="" && !patern.test(req.body.Password))
            {
 
                //validar
                
                Usuario.findOne({usuario:req.body.Usuario,password:req.body.Password},(err,usuario)=>{

                    if(err){
                        //si encuentra un error informar
                        res.send({message:
                            '<div class="alert alert-dark" role="alert">'+
                                '<form action="http://localhost:3000/" method="GET">'+
                                    '<strong class="form-control">Ha ocurrido un error <br>Porfavor intente de nuevo</strong>'+
                                    '<button type="submit" class="btn btn-danger form-control">Aceptar</button>'+
                                '</form>'+
                            '</div>'});
                    }
                    else
                    {
                        if(usuario)
                        {
                            //compara la contraseña con la de la base de datos
                            if(req.body.Password == usuario.password)
                            {
                                //console.log(usuario);
                                //luego redireccionar con los parametros validos a principal
                                res.redirect(`http://localhost:3000/principal/${usuario._id}&${usuario.usuario}&${usuario.password}`);
                            }
                            else
                            {
                                res.send({message:
                                    '<div class="alert alert-dark" role="alert">'+
                                        '<form action="http://localhost:3000/" method="GET">'+
                                            '<strong class="form-control">Usuario o contraseña no existe</strong>'+
                                            '<button type="submit" class="btn btn-danger form-control">Aceptar</button>'+
                                        '</form>'+
                                    '</div>'});
                            }
                            
                        }
                        else
                        {
                            res.send({message:
                                '<div class="alert alert-dark" role="alert">'+
                                    '<form action="http://localhost:3000/" method="GET">'+
                                        '<strong class="form-control">Usuario o contraseña no existe</strong>'+
                                        '<button type="submit" class="btn btn-danger form-control">Aceptar</button>'+
                                    '</form>'+
                                '</div>'});
                        }
                        
                    }
                });
               
            }
            else
            {
                res.status(400).send({message:"Usted proporciono una contraseña invalida",url:"http://localhost:3000/"});
            }
        }
        else
        {
            res.status(404).send({message:"Usted proporciono una usuario invalido",url:"http://localhost:3000/"});
        }
    }
    else
    {
        console.log("12");
    }
    
    //
}
module.exports={
    validarUsuario
}