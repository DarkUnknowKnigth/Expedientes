const bcrypt=require("bcrypt-nodejs");
const Usuario=require("../models/usuario");
const Permiso=require("../models/permiso");
const Administrador=require("../models/administrador");

function validar(req,res)
{  
    console.log("validando...")
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
                    Usuario.find({"usuario":params.usuario}).exec((err,user)=>{
                        if(err)
                        {
                            guardar(params);
                            res.redirect(req.baseUrl.replace("/usuarios",""));  
                        }
                        else
                        {
                            report="El usuario ya existe";
                            res.send(report);
                        }
                    })      
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
    var valor=req.body.valor;
    var tb="";
    Usuario.findById(valor).populate('permiso').exec((err,usuario)=>{
        if(err)
        {
            console.log(err);
            tb='<tr><th scope="row"> Lo sentimos su solicitud no fue bien procesada </th></tr>';
            res.send(tb);
        }
        else
        {
            if(usuario)
            {
                console.log(">>>>>>>>>>>>USUARIOSSSS>>>>>>>>>>>>>>"+usuario);
               // var i=1;
                //usuarios.forEach(usuario =>{
                //console.log("!!!!!!!!!!!USER!!!!!!!!!!!!!!!!!!!!!"+usuario);
                tb=
                '<tr>'+
                    '<th scope="row">'+usuario._id +'</th>'+
                    '<th>'+usuario.nombre+'</th>'+
                    '<td>'+usuario.apPaterno+'</td>'+
                    '<td>'+usuario.apMaterno+'</td>'+
                    '<td>'+usuario.TipoUsuario+'</td>'+
                    '<td>'+usuario.activo+'</td>'+
                    '<td><button class="edit" value='+ usuario.id+'><i class="fas fa-edit"></i></button><button data-target=".eliminarUser" value='+usuario._id+'data-toggle="modal" class="delete"><i class="fas fa-trash-alt"></i></button></td>'
                '</tr>';
               // i++   
                //});
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