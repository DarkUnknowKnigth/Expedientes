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
    if(!patron.test(params.nombre+params.usuario+params.password+params.apMaterno+params.apPaterno+params.TipoUsuario) && params.nombre!=""  && params.usuario!="" && params.apMaterno!="" && params.apPaterno!="")
    {
        if(params.cedula.length<=8 && params.cedula.length>=7 && !/[a-zA-Z`~!@#$%^&*()_°¬|+\-=?;:'",.<>\{\}\[\]\\\/]/.test(params.cedula))
        {
            if(params.TipoUsuario == "DOCTOR" || params.TipoUsuario == "ENFERMERA" || params.TipoUsuario=="COORDINADOR")
            {
                if(params.password == params.cpassword && params.password!="" && params.cpassword!="")
                {  
                    console.log("ingresando: "+params.usuario);
                    Usuario.findOne({"usuario":params.usuario}).exec((err,user)=>{
                        if(err)
                        {
                            report="Error en la busqueda";
                            res.send({msg:report});
                        }
                        else
                        {
                            if(user)
                            {
                                report="En nombre de usuario: "+user.usuario+"\nya existe.";
                                res.send({msg:report})
                            }
                            else
                            {
                                guardar(params);
                                res.send({url:req.baseUrl.replace("/usuarios",""),msg:"Usuario creado exitosamente!"}); 
                            }
                           
                            
                        }
                    })      
                }
                else
                {
                    report="Las contraseñas no son iguales"
                    res.send({msg:report});
                }
            }
            else
            {
                report="El tipo de usuario es invalido"
                res.send({msg:report});
            }
        }
        else
        {
           report="La Cedula no posee un formato adecuado (8 caracteres)";
           res.send({msg:report});
        }
    }   
    else
    {
       report="Todos los campos deben ser alfanumericos";
       res.send({msg:report});
    }
}
function modificar(req,res)
{
    let id = req.params.id
    let update = req.body
  
    Usuario.findByIdAndUpdate(id, update, (err, user) => {
      if (err) res.status(500).send({message: `Error al actualizar el producto: ${err}`})
  
      res.status(200).send({ product: user })
    })
}
function eliminar(req,res)
{
    let id = req.params.id  //
    Usuario.findById(id, (err, user) => {
        if (err)
        { 
            console.log(err);
            res.send(req.baseUrl.replace('/usuarios',""));
        }
        user.remove(err => {
            if (err)
            { 
                console.log(err);
                res.send(req.baseUrl.replace('/usuarios',""));
            }
            res.send(req.baseUrl.replace('/usuarios',""));
        });
  });
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
    if(/[a-zA-Z0-9]/.test(valor))
    {
        Usuario.findById(valor).populate('permiso').limit(1).exec((err,usuario)=>{
            if(err)
            {
                console.log(err);
                tb='<tr><th scope="row"> 0 coincidencias </th></tr>';
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
    else
    {
        tb='<tr><th scope="row">Contiene caracteres especiales invalidos </th></tr>';
        res.send(tb);
    }
}
module.exports={
    validar,
    guardar,
    modificar,
    eliminar,
    buscar
};