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
                    return true;
                } 
                return false;
            });
        }
        return false;
    });  
}
function estaRegistrado(Uid) 
{  

    console.log("buscando a: "+ Uid);
    Ss.findOne({"session":Uid}).count().exec((err,value)=>{
        if(!err)
        {
            if(value==1)
            { 
                console.log("usuario encontrado");
                return true;  
            }
            else
            {
                console.log("no encontrado");
                return false;
            }
        }
        else
        {
            console.log("error"+err);
            return false;
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