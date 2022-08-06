import expressAsyncHandler from "express-async-handler";
import db from '../config/config.js';

const getAllUsers=expressAsyncHandler(async(req, res)=>{

    let users = await db.models.user.findAll();

    if(users.length==0){
        let err = new Error("Nu exista useri");
        err.status = 501;
        throw err;
    }

    res.status(200).json(users);
})

export {getAllUsers};