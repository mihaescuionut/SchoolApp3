import expressAsyncHandler from "express-async-handler";
import db from "../config/config.js";


const getAllBooks=expressAsyncHandler(async(req,res)=>{

    let books =  await db.models.book.findAll();
    console.log(books);

    if(books.length==0){

        let err = new Error("Nu exista carti");
        err.status = 501;
        throw err;
    }

    res.status(200).json(books);
})

export {getAllBooks}