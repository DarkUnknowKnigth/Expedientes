var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var HojaSchema= Schema({
    Consulta:[{type:Schema.ObjectId,ref:'Consulta'}]
});
module.exports=mongoose.model('Hoja',HojaSchema);