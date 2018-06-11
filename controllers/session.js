var Ss=require('../models/session');
function logout(id) 
{  
    Ss.deleteOne({'session':id},(err)=>{
        if(!err)
        {
            console.log("Salio: "+ id );
        }
        console.log("ocurrio un error"+err);
    });
}
module.exports={
    logout
}