const bcrypt=require("bcrypt-nodejs");
const Usuario=require("../models/usuario");
const Permiso=require("../models/permiso");
const Administrador=require("../models/administrador");

function validar(req,res)
{  
    console.log(params.TipoUsuario);
    var params=req.body; 
    var patron=/[`~!@#$%^&*()_°¬|+\-=?;:'",.<>\{\}\[\]\\\/]/;
    if(!patron.test(params.nombre+params.usuario+params.password+params.apMaterno+params.apPaterno+params.TipoUsuario))
    {
        if(params.cedula.length>0)
        {
            if((params.TipoUsuario == "DOCTOR" || params.TipoUsuario == "ADMINISTRADOR" || params.TipoUsuario == "ENFERMERA" || params.TipoUsuario=="COORDINADOR") && params.password == params.cpassword)
            {
                if(guardar(params));
                res.redirect(req.baseUrl);
            }
            else
            {
               console.log("No Campo");
               res.redirect(req.baseUrl);
            }
        }
        else
        {
           console.log("No cedula");
           res.redirect(req.baseUrl);
        }
    }   
    else
    {
       console.log("No valido");
       res.redirect(req.baseUrl);
    }
}
function modificar(req,res)
{

}
function eliminar(req,res)
{
    
}
function guardar(info){
    Permiso.findOne({"tipo":info.TipoUsuario},(err,permiso)=>{
        if(err)
        {
            throw err
            return false
        }
        else
        {
            if(permiso)
            {
                var now=new Date();
                user=new Usuario();
                user.nombre=info.nombre;
                user.usuario=info.usuario;
                user.password=info.password;
                user.apPaterno= info.apPaterno;
                user.apMaterno=info.apMaterno;
                user.activo=info.activo;
                user.TipoUsuario=info.TipoUsuario;
                user.cedula=info.cedula;
                user.fechaCreacion=now;
                user.permiso=permiso._id;
                user.save((err,stored)=>{
                    if(err)
                    {
                        throw err
                        return false
                    }
                    else{
                        if(stored)
                        {
                            console.log(stored);
                            return true;
                        }
                    }
                });
            }
        }
    });
}
module.exports={
    validar,
    guardar,
    modificar,
    eliminar
};