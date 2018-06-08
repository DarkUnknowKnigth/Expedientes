var Ss=require('../models/sessiones');
function storeSession(req,res)
{
    var uss=new Ss();
    uss.id=req.body.id;
    let now=new Date();
    uss.fecha=now.getFullYear()+"-0"+(now.getMonth()+1)+"-0"+now.getDate();
    uss.save((err,session)=>{
        if(!err)
        {
            console.log(session);
        } 
    })
}
function estaRegistrado(req,res) 
{  

}
function logout(req,res) 
{  

}
module.exports={
    estaRegistrado,
    logout,
    storeSession
}