import expressAsyncHandler from "express-async-handler";
import db from '../config/config.js';
import bcrypt from 'bcrypt';
import generateToken from "../utils/utilities.js";

const getAllUsers=expressAsyncHandler(async(req, res)=>{

    let users = await db.models.user.findAll();

    if(users.length==0){
        let err = new Error("Nu exista useri");
        err.status = 501;
        throw err;
    }

    res.status(200).json(users);
})


const registerUser=expressAsyncHandler(async(req, res)=>{
    const password = bcrypt.hashSync(req.body.password, 10);
    let user = {
        id: req.body.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: password,
        age: req.body.age,
        role: req.body.role
    }

    await db.models.user.create(user);
    res.status(200).end();
});


const login=expressAsyncHandler(async(req,res)=>{
    let obj = req.body;
    let user = await db.models.user.findOne({where: {email: `${obj.email}`}});
    if(user){
        let authentificate = bcrypt.compareSync(obj.password, user.password);
        if(authentificate){
            res.status(200).json({
                id: user.id,
                name: user.first_name,
                email: user.email,
                role: user.role,
                token: generateToken(user.id)
            });
        }else{
            res.status(401);
            throw new Error('Wrong password');
        }
    }else{
        res.status(401);
        throw new Error('Cant find name')
    }
});

export {getAllUsers, registerUser, login};