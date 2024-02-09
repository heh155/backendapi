import express from 'express';
import { User } from '../models/user.js';

const router = express.Router();

router.post("/users/new", async (req, res) => {
    const { name, email, password } = req.body;
  
    await User.create({ name, email, password });
    res.status(201).cookie("tempi","lol").json({
      success: true,
      message: "registered successful",
    });
  });
  router.get("/userid/iid",async(req,res)=>{
    const {id} = req.body;
    console.log(req.body);
    const user = await User.findById({id})
    console.log(user)
    // res.json({
    //     success:true,
    //     user,
    // })
})

export default router ;