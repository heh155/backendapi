import express, { query } from "express";
import mongoose from "mongoose";
import Userrouter from "./routes/user.js"


const app = express();
// we can add custom routes like this 
app.use("/users",Userrouter);

app.use(express.json())
mongoose
  .connect("mongodb://localhost:27017", {
    dbName: "backendapi",
  })
  .then(() => console.log("database connected"))
  .catch((e) => console.log(e));



app.get("/", (req, res) => {
  res.send("nice");
});


app.get("/users", async (req, res) => {
  const users=await User.find({})
  console.log(req.query)
  res.json({
    success: true,
    users,
  });
});



app.listen(4000, () => {
  console.log("server running");
});
