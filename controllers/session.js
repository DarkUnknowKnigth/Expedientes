var Ss=require('../models/session');
var Us=require('../models/usuario');
function storeSession(id)
{
    var uss=new Ss();
    uss.session=id;
    let now=new Date();
    Us.findOne({"id":id}).exec((err,user)=>{
        if(!err)
        {
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
               return true;  
            }
            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
    });
}
function logout(req,res) 
{  
    Ss.find({'session':req.params.id}).count().exec((err,value)=>{
        if(!err)
        {
            if(value==1)
            {
                Ss.deleteOne({'session':req.params.id},(err)=>{
                    if(!err)
                    {
                        return true;
                    }
                    throw err;
                });
            }
            else
            {
                console.log("no se elimino");
                return false;
            }
        }
        
        console.log("erro en la eliminacion");
        return false;
    });
}
module.exports={
    estaRegistrado,
    logout,
    storeSession
}