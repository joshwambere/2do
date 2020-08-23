const mongoose=require("mongoose");

const shcema=mongoose.Schema({
    name:String,
    completed:Boolean
})

module.exports=mongoose.model('Todo', shcema);