const express = require("express");
const connectDb=require("./config/database")
const app = express();


connectDb().then(()=>{
  console.log("Database connection established............");
  app.listen(8888, () => {
    console.log("Server is listening on port 8888.....");
  });
}).catch(err=>{
  console.error("Databse cannot be connected !!!")
})
 
