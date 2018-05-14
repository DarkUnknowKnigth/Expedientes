'use strict'
function config(req,res)
{
    console.log(`usuario: ${ req.body.Usuario } contraseña: ${ req.body.Pass }`);
}
module.exports={
    config
}