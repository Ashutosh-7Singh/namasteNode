const express = require("express");
const connectDb = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User Added Succesfully");
  } catch (err) {
    res.status(400).send("Error saving the user :" + err.message);
  }
});

// GEt user by email

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const users = await User.findOne({emailId:userEmail});
    if(!users){
      res.status(404).send("User not found")
    }else{
    res.send(users);
    }
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

// Feed API - GET/feed -get alll the users fron the database
app.get("/feed",async (req,res)=>{
  try{
    const users=  await User.find({});
    res.send(users)
  }catch(error){
    res.status(404).send("Something went wrong")
  }
})


app.delete("/user",async (req,res)=>{
const userId=await req.body.userId

if (!userId) {
  return res.status(400).json({ success: false, message: "User ID is required" });
}
  try{
    const user = await User.findByIdAndDelete(userId)
    if(!user){
      return res.status(404).json({sucess:false,message:"User not found"})
    }

    // res.send("User deleted Successfully")
    res.json({success:true,message:"User deleted sucessfully"})
  }catch(error){
    res.status(404).send("Something went wrong")
  }
})


app.patch("/user",async(req,res)=>{
  const userId = req.body.userId;
  // console.log(userId);
  const data=req.body;
  // console.log(data);
  try{
    // const user =await User.findByIdAndUpdate({_id:userId},data,{returnDocument:"before"});
    const user =await User.findByIdAndUpdate({_id:userId},data);
    res.json({success:true,message:"User updated Sucessfully"});
    console.log(user);
    
  }
  catch(error){
    res.status(404).json({sucess:false,message:"Faild to update"})
  }
})


connectDb()
  .then(() => {
    console.log("Database connection established............");
    app.listen(8888, () => {
      console.log("Server is listening on port 8888.....");
    });
  })
  .catch((err) => {
    console.error("Databse cannot be connected !!!");
  });
