require("dotenv").config();
const mongoose=require('mongoose');
const express=require('express');
const bodyParser=require('body-parser')
const router=require('./routes')
const port=process.env.PORT || 7000

//connect to db
mongoose.connect(process.env.CONNECT, {useNewUrlParser:true}).then(()=>{
    console.log('connection established')
    const app=express();

    app.use(bodyParser.json());
    
    app.get("/", (req, res) =>{
        return res.send('Todo List');
    });
   
    app.use(router);

    app.listen(port, ()=>console.log(`listening on port ${port} `))
})