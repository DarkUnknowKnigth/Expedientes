var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var SessionSchema= Schema({
    session:String,
    fecha:String,
    uname:String,
});
module.exports=mongoose.model('Session',SessionSchema);