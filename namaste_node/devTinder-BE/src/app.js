const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Ashutosh", lastName: "Singh" });
});

app.post("/user", (req, res) => {
  res.send("Data Successfully saved to the database !");
});

app.use("/test", (req, res) => {
  res.send("Heloo fomr the server!");
});

app.listen(8888, () => {
  console.log("Server is listening on port 8888.....");
});
