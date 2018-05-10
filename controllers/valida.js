'use strict'
function validarUsuario(req,res)
{
    console.log(`usuario: ${ req.body.Usuario } contraseña: ${ req.body.Pass }`);
    res.status(200);
}
module.exports={
    validarUsuario
}