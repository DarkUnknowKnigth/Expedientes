//creando los permisos
db.permiso.insertOne({tipo:"ROOT",AccesoExp:true,CrearExp:true,ModificarExp:true,EliminarExp:true,AccesoUser:true,CrearUser:true,ModificarUser:true,EliminarUser:true,AccesoCenso:true,AccesoConsulta:true});
db.permiso.insertOne({tipo:"DOCTOR",AccesoExp:true,CrearExp:true,ModificarExp:true,EliminarExp:false,AccesoUser:false,CrearUser:false,ModificarUser:false,EliminarUser:false,AccesoCenso:false,AccesoConsulta:true});
db.permiso.insertOne({tipo:"ENFERMERA",AccesoExp:true,CrearExp:true,ModificarExp:true,EliminarExp:false,AccesoUser:false,CrearUser:false,ModificarUser:false,EliminarUser:false,AccesoCenso:false,AccesoConsulta:false});
db.permiso.insertOne({tipo:"COORDINADOR",AccesoExp:true,CrearExp:true,ModificarExp:true,EliminarExp:false,AccesoUser:true,CrearUser:false,ModificarUser:false,EliminarUser:false,AccesoCenso:true,AccesoConsulta:false});

//Creandi al admnistrador
db.administrador.insertOne({});
