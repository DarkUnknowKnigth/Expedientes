var Ss=require('../models/session');
function storeSession(id)
{
    var uss=new Ss();
    uss.id=id;
    let now=new Date();
    uss.fecha=now.getFullYear()+"-0"+(now.getMonth()+1)+"-0"+now.getDate();
    uss.save((err,session)=>{
        if(!err)
        {
            console.log(session);
            return true;
        } 
        return false;
    })
}
function estaRegistrado(req,res) 
{  
    Ss.find({id:req.bod.id}).count().exec((err,value)=>{
        if(!err)
        {
            if(value==1)
            { 
                res.redirect('/');   
            }
        }
        else
        {
            return true;
        }
    });
}
function logout(req,res) 
{  
    Ss.find({id:req.bod.id}).count().exec((err,value)=>{
        if(!err)
        {
            if(value==1)
            {
                Ss.deleteOne({id:req.body.id},(err)=>{
                    if(!err)
                    {
                        res.redirect('/');
                    }
                    throw err;
                });
            }
            else
            {
                res.redirect('/');
            }
        }
    });
}
module.exports={
    estaRegistrado,
    logout,
    storeSession
}