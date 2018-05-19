const bcrypt=require("bcrypt-nodejs");
const Usuario=require("../models/usuario");
const Permiso=require("../models/permiso");
const Administrador=require("../models/administrador");

function validar(req,res)
{  
    var params=req.body; 
    var patron=/[`~!@#$%^&*()_°¬|+\-=?;:'",.<>\{\}\[\]\\\/]/;
    if(!patron.test(params.nombre+params.usuario+params.password+params.apMaterno+params.apPaterno+params.TipoUsuario))
    {
        if(params.cedula.length>0 && params.fechaCreacion && params.activo == true)
        {
            if(params.TipoUsuario == "DOCTOR" || params.TipoUsuario == "ADMINISTRADOR" || params.TipoUsuario == "ENFERMERO" || params.TipoUsuario=="COORDINADOR")
            {
                res.send(guardar(params));
            }
            else
            {
               console.log("no");
            }
        }
        else
        {
           console.log("no");
        }
    }   
    else
    {
       console.log("no");
    }
}
function modificar(req,res)
{

}
function eliminar(req,res)
{
    
}
function guardar(info){
    var permiso= new Permiso();
    var user= new Usuario();
    user.nombre=info.nombre;
    user.usuario=info.usuario;
    user.password=info.password;
    user.apPaterno= info.apPaterno;
    user.apMaterno=info.apMaterno;
    user.activo=info.activo;
    user.TipoUsuario=info.TipoUsuario;
    user.cedula=info.cedula;
    user.fechaCreacion=info.fechaCreacion;
    
    return "<h1>exitoso</h1>";
}
module.exports={
    validar,
    guardar,
    modificar,
    eliminar
};