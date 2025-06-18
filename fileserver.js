const express = require('express');
const fs = require('fs');
const path = require('path');

const app=express();



app.get('/files',(req,res)=>{
  fs.readdir(path.join(__dirname,'./files'),(err,data)=>{
    if(err){
      res.status(500).send("Error")
      return;
    }

    res.send(data);
  })
})


app.get('/files/:filename',(req,res)=>{
  const pathy = path.join(__dirname,'./files',req.params.filename)
  fs.readFile(pathy,'utf-8',(err,data)=>{
      res.send(data);
  })
})

app.all('*',(req,res)=>{
  res.status(404).send("<h1>Hola Error Man</h1>")
})


app.listen(3000,(req,res)=>{
  console.log("server running")
})



module.exports = app;