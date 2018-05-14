'use strict'
function validarUsuario(req,res)
{
    if(req.body.Usuario && req.body.Password)
    {
        //ver quien es?
        console.log(`usuario: ${ req.body.Usuario } contraseña: ${ req.body.Password }`);
        var patern=/[`~!@#$%^&*()_°¬|+\-=?;:'",.<>\{\}\[\]\\\/]/;
        //valida si user es un conjunto de letras y numeros y si la contraseña no contiene caracteres especiales del lado del server
        //en busca de parametros o corrupcion de datos
        if(!patern.test(req.body.Usuario) && req.body.Usuario!="")
        {
            if(req.body.Password!="" && !patern.test(req.body.Password))
            {
                //validar
                //luego redireccionar con los parametros validos a principal
                 res.redirect(`http://localhost:3000/principal/${req.body.Usuario}&${req.body.Password}`);
            }
            else
            {
               res.send({message:"Usted proporciono una contraseña invalido"});
            }
        }
        else
        {
            res.send({message:"Usted proporciono una usuario invalido"});
        }
    }
    
    //
}
module.exports={
    validarUsuario
}