
import expressAsyncHandler from "express-async-handler"
import db from "../config/config.js"

const getAllCourses=expressAsyncHandler(async(req,res)=>{


     let all = await db.models.course.findAll();


     if(all.length==0){

        let error=new Error("Nu exista cursuri");

        error.status=501;

        throw  error;
     }

     res.status(200).json(all);
})


const editCourse=expressAsyncHandler(async(req, res)=>{

          const id = req.params.id;
          let course = req.body;
          let obj = await db.models.course.findByPk(id);
          console.log(course);
          if(obj){
              if(course.name){
                  obj.name = course.name;
              }
              if(course.department){
                  obj.department = course.department;
              }

              await obj.save();
              res.status(200).json(obj);
              
          } 
      
          if(obj.length == 0){
            let error = new Error("nu exista cursuri");
            error.status = 501;
            throw error;
          }

          
})

const deleteCourse=expressAsyncHandler(async(req,res)=>{
    
            const id = req.params.id;
            let obj = await db.models.course.findByPk(id);
            if(obj){
                await obj.destroy();
                res.status(200).json(id);
            }

            if(obj.length == 0){
                let error = new Error("nu exista cursul")
                error.status = 501;
                throw error;
            }

})

const createCourse=expressAsyncHandler(async(req, res)=>{
    let course = req.body;
    let create = await db.models.course.create(course);

    if(course.length==0){
        let error = new Error('nu exista curs');
        error.status = 501;
        throw error;
    }

    res.status(200).json(course)

})

export {getAllCourses, editCourse, deleteCourse, createCourse};