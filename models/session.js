var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var SessionSchema= Schema({
    id:String,
    fecha:String
});
module.exports=mongoose.model('Session',SessionSchema);