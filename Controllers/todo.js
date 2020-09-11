const todoModel = require("../models/todo");
const { deleteOne } = require("../models/todo");

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
  //get all todos
  async getTodos(req, res) {
    const todos = await todoModel.find();
    res.send(todos);
  }

  //delete todo
  async deleteTodo(req, res) {
    try {
      const todoFound = await todoModel.findOne({ _id: req.params.id });
      if (todoFound) {
        await todoModel.deleteOne({ _id: req.params.id });
        res.send({
          status:'Ok',
          message:'todo deleted successfuly'
        }).status(204);
      } else {
        
        res.status.json({
          status: 404,
          message: "todo not available",
        });
      }
    } catch (error) {
      res.status(404);
      res.send({ error: "resources unavailable" });
    }
  }
  //update todo

  async updateTodo(req, res){
    const todoFound=await todoModel.findOne({_id:req.params.id});
    if(!todoFound){
      res.status(404).send({
        status:'Bad',
        message:"todo not found"
      })
    }else{
      const todo={
        name:req.body.name,
        completed:req.body.completed
      }
      await todoModel.updateOne({_id:req.params.id}, todo);
      res.status(200).send({
        status:'Ok',
        message:"todo updated",
        data: todo
      })
    }
  }
}

module.exports = Todos;
