var mongoose=require('mongoose');
var SessionSchema= Schema({
    id:String,
    fecha:String
});
module.exports=mongoose.model('Session',SessionSchema);