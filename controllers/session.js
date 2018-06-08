var Ss=require('../models/session');
function storeSession(id)
{
    var uss=new Ss();
    uss.session=id;
    let now=new Date();
    uss.fecha=now.getFullYear()+"-0"+(now.getMonth()+1)+"-0"+now.getDate()+"|"+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
    uss.save((err,session)=>{
        if(!err)
        {
            console.log(session);
            return true;
        } 
        return false;
    })
}
function estaRegistrado(Uid) 
{  
    Ss.find({session:Uid}).count().exec((err,value)=>{
        if(!err)
        {
            if(value==1)
            { 
               return true;  
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
    Ss.find({session:req.params.id}).count().exec((err,value)=>{
        if(!err)
        {
            if(value==1)
            {
                Ss.deleteOne({session:req.params.id},(err)=>{
                    if(!err)
                    {
                        return true;
                    }
                    throw err;
                });
            }
            else
            {
                return false;
            }
        }
        return false;
    });
}
module.exports={
    estaRegistrado,
    logout,
    storeSession
}