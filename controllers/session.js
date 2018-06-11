var Ss=require('../models/session');
var Us=require('../models/usuario');

function guardarSession(id)
{
    Us.findById(id).exec((err,user)=>{
        if(!err)
        {
            var uss=new Ss();
            uss.session=id;
            let now=new Date(); 
            uss.fecha=now.getFullYear()+"-0"+(now.getMonth()+1)+"-0"+now.getDate()+"|"+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
            uss.uname=user.usuario;
            uss.save((err,session)=>{
                if(!err)
                {
                    console.log(session);  
                } 
            });
        }
    }); 
}

function estaRegistrado(req,res) 
{  
    console.log("local : "+req.locals );
    Ss.findOne({"session":Uid}).count().exec((err,value)=>{
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
                    guardarSession(res.locals.idUser);
                    res.redirect(res.locals.yes);
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
}
function logout(id) 
{  
    Ss.find({'session':id}).count().exec((err,value)=>{
        if(!err)
        {
            if(value==1)
            {
                Ss.deleteOne({'session':id},(err)=>{
                    if(!err)
                    {
                        console.log("sacado")
                    }
                    console.log("ocurrio un error");
                });
            }
            else
            {
                console.log("no se elimino");
            }
        }
        console.log("erro en la busqueda");
    });
}
module.exports={
    estaRegistrado,
    logout,
    guardarSession
}