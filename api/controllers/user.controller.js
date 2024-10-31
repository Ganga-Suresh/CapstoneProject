import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const deleteUser = async (req,res) => {

    const user = await User.findById(req.params.id)
    

    if(req.userId !== user._id.toString()){
        return next(createError(403, "You can delete only your account!"));
    }else{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send("deleted.");
    };
    
}

export const getUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);
  
    res.status(200).send(user);
  };
