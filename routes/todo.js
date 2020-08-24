const express = require("express");
const TodoCont = require("../Controllers/todo");
const todoContr = new TodoCont();
const router = express.Router();

router.post("/todos/add", todoContr.addTodo);
router.get("/todos", todoContr.getTodos);
console.log(router);
module.exports = router;
