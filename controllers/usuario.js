const bcrypt=require("bcrypt-nodejs");
const Usuario=require("../models/usuario");
const Permiso=require("../models/permiso");
function validar(req,res){  
   
}
function modificar(req,res)
{

}
function eliminar(req,res)
{
    
}
function guardar(req,res){
    var permiso= new Permiso();
    var user= new Usuario();
    var params=req.body;
    console.log(params);
    user.id_user=params.id_user;
    user.nombre=params.nombre;
    user.usuario=params.usuario;
    user.password=params.password;
    user.apPaterno= params.apPaterno;
    user.apMaterno=params.apMaterno;
    user.activo=params.activo;
    user.TipoUsuario=params.TipoUsuario;
    res.status(200).send("<h1>exitoso</h1>");
}
module.exports={
    validar,
    guardar,
    modificar,
    eliminar
};