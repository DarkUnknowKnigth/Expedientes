//carga la configuracion del app
const app=require("./app");
const mongoose=require("mongoose");
var port= process.env.PORT || 3000; //serverport
var portb=27017; //dbport
mongoose.connect('mongodb://localhost:'+portb+'/dbexpedientes',(err,res)=>{
    if(err){
        throw err;
    }
    else{
        console.log("DB correiendo en mondodb://localhost:"+portb);
        //crea el server
        app.listen(port,()=>{
            console.log("servidor corriendo en http://localhost:"+port);
        });
    }
});


