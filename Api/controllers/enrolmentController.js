import expressAsyncHandler from "express-async-handler";
import db from "../config/config.js";
import { QueryTypes } from "sequelize";



const getEnrolmentById=expressAsyncHandler(async(req, res)=>{

    let id = req.params.id;
    const  courses= await db.sequelize.query(`SELECT Enrolments.id, course_id,name,department FROM Enrolments join Courses C on C.id = Enrolments.course_id where Enrolments.user_id=${id}`, { type: QueryTypes.SELECT });

    if(courses.length==0){
        let err = new Error("Nu exista enrolmenturi")
        err.status=501;
        throw err;      
    }
    res.status(200).json(courses);
})

const unrolCourseById=expressAsyncHandler(async (req, res)=>{
    let id = req.params.id;
    
    let del = await db.sequelize.query(`DELETE FROM Enrolments WHERE id=${id}`, {type: QueryTypes.SELECT});

    if(del.length==0){
        let err = new Error("Nu exista id");
        err.status = 501;
        throw err;
    }

    res.status(200).json(del);
})

const enrolCourseById=expressAsyncHandler(async(req,res)=>{
    let enrol = {
        user_id: req.params.user_id,
        course_id: req.params.course_id
    }
    console.log(req.params.userid);
    console.log(req.params.id);
    let verify = await db.sequelize.query(`SELECT * from Enrolments where user_id = ${enrol.user_id} and course_id = ${enrol.course_id}`);
    console.log(verify[0].length);

    if(verify[0].length>0){
        let err = new Error('Exista deja enrol');
        err.status = 400;
        throw err;
    }else if(verify[0].length==0){
        await db.sequelize.query(`INSERT INTO Enrolments (user_id, course_id) VALUES (${enrol.user_id}, ${enrol.course_id})`)
    }
    res.status(200).json(verify);
})

const getStatistics=expressAsyncHandler(async (req,res)=>{
    let stats = await db.sequelize.query(`select course_id, name, department, count(*) as 'nr'
    from Enrolments
    inner join Courses C on Enrolments.course_id = C.id
    group by course_id
    order by nr desc`);
    
    if(stats.length == 0){
        let err = new Error('Nu exista enrolments pe acest id');
        err.status = 400;
        throw err;
    }
    res.status(200).json(stats);
})

const getStatsById=expressAsyncHandler(async(req,res)=>{
    let courseId = req.params.id;
    let stats = await db.sequelize.query(`select  count(*) as "numar" from  Enrolments where course_id=${courseId}`)
    if(stats.length == 0){
        let err = new Error('Nu exista enrolments pe acest id');
        err.status = 400;
        throw err;
    }
    res.status(200).json(stats);
})

const getCourseOfProfesorById=expressAsyncHandler(async(req,res)=>{
    let id = req.params.id;
    let course = await db.sequelize.query(`select name, department, role
    from Enrolments
    inner join Courses C on Enrolments.course_id = C.id
    inner join Users U on Enrolments.user_id = U.id
    where user_id=2 and course_id=${id};
    `)

    if(course.length == 0){
        let err = new Error('Nu exista enrolment');
        err.status = 400;
        throw err;
    }
    res.status(200).json(course);
})

export {getEnrolmentById, unrolCourseById, enrolCourseById, getStatistics, getStatsById, getCourseOfProfesorById}