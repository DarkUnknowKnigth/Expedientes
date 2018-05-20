const bcrypt=require("bcrypt-nodejs");
const Usuario=require("../models/usuario");
const Permiso=require("../models/permiso");
const Administrador=require("../models/administrador");

function validar(req,res)
{  
    console.log(req.body);
    var params=req.body; 
    var patron=/[`~!@#$%^&*()_°¬|+\-=?;:'",.<>\{\}\[\]\\\/]/;
    if(!patron.test(params.nombre+params.usuario+params.password+params.apMaterno+params.apPaterno+params.TipoUsuario))
    {
        if(params.cedula.length>0)
        {
            if(params.TipoUsuario == "DOCTOR" || params.TipoUsuario == "ADMINISTRADOR" || params.TipoUsuario == "ENFERMERA" || params.TipoUsuario=="COORDINADOR")
            {
                if(params.password == params.cpassword)
                {   guardar(params);
                    res.redirect(req.baseUrl.replace("/usuarios","/done"));
                }
                else
                {
                    console.log("No pass");
                    res.redirect(req.baseUrl.replace("/usuarios","/fail"));
                }
            }
            else
            {
               console.log("No Campo");
               res.redirect(req.baseUrl.replace("/usuarios","/fail"));
            }
        }
        else
        {
           console.log("No cedula");
           res.redirect(req.baseUrl.replace("/usuarios","/fail"));
        }
    }   
    else
    {
       console.log("No valido");
       res.redirect(req.baseUrl.replace("/usuarios","/fail"));
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
    var tipo=req.body.tbusqueda;
    var valor=req.body.buscadorUser;
    Usuario.find({tipo:valor}).populate('permiso').exec((err,usuarios)=>{
        if(err)
        {
            throw err
        }
        else
        {
            if(usuarios)
            {
                var tb="";
                var i=1;
                usuarios.forEach(usuario =>{
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
                res.send({table:tb});
            }
            else
            {
                res.redirect('/');
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