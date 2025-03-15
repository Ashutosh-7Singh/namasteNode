const express= require("express")
const app=express();

app.use("/test",(req,res)=>{
    res.send("Heloo from test")
})

app.listen(8888,()=>{
    console.log("Server is listening on port 888.....");
    
})