const todoModel=require("../models/todo");

class Todos{
    async addTodo(req, res){
        const todo=new todoModel({
            name:req.body.name,
            completed:req.body.completed,
            date:new Date()
        });
        await todo.save();
        res.status(200).json({
            status:200,
            message:"Task added successfuly",
            data: todo,
        })
    }
}

module.exports=Todos