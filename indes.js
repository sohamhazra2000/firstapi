require('dotenv').config()
const express=require("express")
const sql=require("mysql")
const connection=sql.createConnection({
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database
})
connection.connect((err)=>{
    if(err){console.log("cooncevvt db not sucess")}
    else{console.log("connection to db possible")}
})
const app=express()
app.use(express.json())
const port=5000
app.get("/",(req,res)=>{
    connection.query("select * from employee",(err,response)=>{
        if(err){console.log("error is there")}
        else{res.send(response)}
    })
})
app.post("/a",(req,res)=>{
    data=req.body
    connection.query("insert into employee set ?",data,(err,response)=>{
        if(err){console.log("error is there")}
        else{res.send({msg:"sucess"})}
    })
})
app.listen(port,()=>{
    console.log("running")
})