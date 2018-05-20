const bcrypt=require("bcrypt-nodejs");
const Usuario=require("../models/usuario");
const Permiso=require("../models/permiso");
const Administrador=require("../models/administrador");

function validar(req,res)
{  
    console.log(req.body);
    var report="Creacion Exitosa";
    var params=req.body; 
    var patron=/[`~!@#$%^&*()_°¬|+\-=?;:'",.<>\{\}\[\]\\\/]/;
    if(!patron.test(params.nombre+params.usuario+params.password+params.apMaterno+params.apPaterno+params.TipoUsuario))
    {
        if(params.cedula.length<=8 && params.cedula.length>=7 && !/[a-zA-Z`~!@#$%^&*()_°¬|+\-=?;:'",.<>\{\}\[\]\\\/]/.test(params.cedula))
        {
            if(params.TipoUsuario == "DOCTOR" || params.TipoUsuario == "ADMINISTRADOR" || params.TipoUsuario == "ENFERMERA" || params.TipoUsuario=="COORDINADOR")
            {
                if(params.password == params.cpassword && params.password!="" && params.cpassword!="")
                {  
                    Usuario.find({"usuario":params.usuario},(err,usuario)=>{
                        if(err)
                        {
                            report="Un error ha ocurrido :( porfavor intente de nuevo";
                            res.send(report);
                        }
                        else{
                            if(usuario!=undefined)
                            {
                                report="El usuario ya existe";
                                res.send(report);
                            }
                            else
                            {
                                guardar(params);
                                res.send(report);
                                res.redirect(req.baseUrl.replace("/usuarios",""));
                            }
                        }
                    });
                   
                }
                else
                {
                    report="Las contraseñas no son iguales"
                    res.send(report);
                }
            }
            else
            {
                report="El tipo de usuario es invalido"
                res.send(report);
            }
        }
        else
        {
           report="La Cedula no posee un formato adecuado";
           res.send(report);
        }
    }   
    else
    {
       report="Todos los campos deben ser alfanumericos";
       res.send(report);
    }
}
function modificar(req,res)
{
    var params= req.body;

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
function buscar(req,res){
    console.log(req.body);
    var tipo=req.body.tipo;
    var valor=req.body.valor;
    var tb="";
    Usuario.find({tipo: { $regex: '.*' + valor + '.*' } }).populate('permiso').exec((err,usuarios)=>{
        if(err)
        {
            console.log(err);
            tb='<tr><th scope="row"> 0 resultados </th></tr>';
            res.send(tb);
        }
        else
        {
            if(usuarios.length>0)
            {
                console.log(usuarios);
                var i=1;
                usuarios.forEach(usuario =>{
                console.log(usuario);
                tb+='<tr>'+
                    '<th scope="row">'+usuario._id+'</th>'+
                    '<td>'+usuario.usuario+'</td>'+
                   ' <td>'+usuario.cedula+'</td>'+
                   ' <td>'+usuario.nombre+'</td>'+
                   ' <td>'+usuario.fechaCreacion+'</td>'+
                   ' <td>'+usuario.activo+'</td>'+
                   ' <td><button class="edit"><i class="fas fa-edit"></i></button><button data-target=".eliminarUser" data-toggle="modal" class="delete"><i class="fas fa-trash-alt"></i></button></td>'+
                '</tr>';
                i++   
                });
                res.send(tb);
            }
            else
            {
                tb='<tr><th scope="row"> 0 resultados </th></tr>';
                res.send(tb);
            }
        }

    });

}
module.exports={
    validar,
    guardar,
    modificar,
    eliminar,
    buscar
};