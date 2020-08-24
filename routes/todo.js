const express = require("express");
const TodoCont = require("../Controllers/todo");
const todoContr = new TodoCont();
const router = express.Router();

router.post("/todos/add", todoContr.addTodo);
router.get("/todos", todoContr.getTodos);
router.delete('/todo/delete/:id', todoContr.deleteTodo);
router.put('/todo/update/:id', todoContr.updateTodo);
console.log(router);
module.exports = router;
