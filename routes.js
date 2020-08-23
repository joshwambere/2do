const { Router }=require("express");
const Todo=require("./routes/todo");
const { model } = require("./models/todo");
const router=Router();

router.use('/api',Todo);

module.exports=router