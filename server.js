const express = require('express');
const app = express();
const fs = require('fs');
app.listen(3000, ()=>console.log("server up port 3000"))

app.get('/', (req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.use("/assets", express.static(__dirname+"/assets"))