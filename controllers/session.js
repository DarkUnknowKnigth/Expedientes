var Ss=require('../models/session');
var Us=require('../models/usuario');
function guardarSession(id)
{
    let status=false;
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
                    status=true;
                } 
                status= false;
            });
        }
        status= false;
    }); 
    return status;
}
function estaRegistrado(Uid) 
{  
    let status;
    console.log("buscando a: "+ Uid);
    Ss.findOne({"session":Uid}).count().exec((err,value)=>{
        if(!err)
        {
            if(value==1)
            { 
                console.log("usuario encontrado");
                status= true;  
            }
            else
            {
                console.log("no encontrado");
                status= false;
            }
        }
        else
        {
            console.log("error"+err);
            status= false;
        }
    });
    return status;
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
                        return true;
                    }
                    console.log("ocurrio un error");
                    return false;
                });
            }
            else
            {
                console.log("no se elimino");
                return false;
            }
        }
        console.log("erro en la busqueda");
        return false;
    });
}
module.exports={
    estaRegistrado,
    logout,
    guardarSession
}