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
    res.json({ sucess: true, message: "User Added Succesfully" });
  } catch (error) {
    res.status(400).json({
      sucess: false,
      message: "Eroor saving user :" + error.message,
    });
  }
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  if(!userEmail){
    return res.status(400).json({success:false,message:"Invalid credentails"})
  }
  try {
    const users = await User.findOne({ emailId: userEmail });
    if (!users) {
      res.status(404).json({ success: true, message: "User not found" });
    } else {
      res.json({ users });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: "Some thing went wrong" });
  }
});

app.delete("/user", async (req, res) => {
  const userId = await req.body.userId;
  if (!userId) {
    return res
      .status(400)
      .json({ succes: false, message: "user ID is required" });
  }
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      res.status(404).json({ succes: false, message: "user not found" });
    }
  } catch (error) {
    res.status(404).json({ success: false, message: "Some thing went wrong" });
  }
});
connectDb()
  .then(() => {
    console.log("Database connection established ......................");
    app.listen(6666, () => {
      console.log("empm sucess fully runnin on 1122,,,,,,,,,,,,,,");
    });
  })
  .catch((error) => {
    console.error("Databnase cannot be connected");
  });
