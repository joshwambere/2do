const { Router } = require("express");
const Todo = require("./routes/todo");
const { model } = require("./models/todo");
const router = Router();

router.use("/api", Todo,()=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});

module.exports = router;
