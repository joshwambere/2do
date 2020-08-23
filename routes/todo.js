const express=require("express");
const TodoCont=require('../Controllers/todo');
const todoContr=new TodoCont()
const router=express.Router();


router.post('/todos', todoContr.addTodo);
console.log(router);
module.exports = router;