const todoModel = require("../models/todo");

class Todos {
  async addTodo(req, res) {
    const todo = new todoModel({
      name: req.body.name,
      completed: req.body.completed,
      date: new Date(),
    });
    await todo.save();
    res.status(200).json({
      status: 200,
      message: "Task added successfuly",
      data: todo,
    });
  }
  async getTodos(req, res) { 
    const todos=await todoModel.find();
    res.send(todos);

    
  }
}

module.exports = Todos;
