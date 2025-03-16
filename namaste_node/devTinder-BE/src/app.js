const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");
const app = express();

 
app.listen(8888, () => {
  console.log("Server is listening on port 8888.....");
});
