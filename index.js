//carga la configuracion del app
const app=require("./app");
const mongoose=require("mongoose");
var port= process.env.PORT || 3000; //serverport
var portb=27017; //dbport
//mongoose.connect('mongodb://localhost:'+portb+'/dbexpedientes',(err,res)=>{
mongoose.connect('mongodb://dany:root@ds053305.mlab.com:53305/dbexpedientes',(err,res)=>{
    if(err){
        throw err;
    }
    else{
        console.log("DB correiendo en mongodb://dany:root@ds053305.mlab.com:53305/dbexpedeintes");
        //crea el server
        app.listen(port,()=>{
            console.log("servidor corriendo en http://localhost:"+port);
        });
    }
});


