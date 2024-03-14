require('dotenv').config()
const express=require("express")
const sql=require("mysql")
const cors=require('cors')
const connection=sql.createConnection({
    host:process.env.D_host,
    user:process.env.D_user,
    password:process.env.D_password,
    database:process.env.D_database
})
connection.connect((err)=>{
    if(err){console.log("cooncevvt db not sucess")}
    else{console.log("connection to db possible")}
})
const app=express()
app.use(express.json())
app.use(cors())
const ports= 10000//process.env.P_ort
app.get("/",(req,res)=>{
    connection.query("select * from employee2",(err,response)=>{
        if(err){console.log("error is there")}
        else{res.send(response)}
    })
})
app.post("/a",(req,res)=>{
    data=req.body
    connection.query("insert into employee2 set ?",data,(err,response)=>{
        if(err){res.send({msg:err.code})}
        else{res.send({msg:"sucess"})}
    })
    
})
app.post("/aa",(req,res)=>{
    data=req.body
    connection.query("select * from employee2 where empid=?",data.id,(err,response)=>{
        if(err){res.send({msg:"error"})}
        else{res.send(response)}
    })})
app.listen(ports,()=>{
    console.log("running")
})