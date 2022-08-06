import express from "express";

import {errorHandler} from '../middleware/errorMiddleware.js';

import {getAllCourses, editCourse, deleteCourse, createCourse} from "../controllers/courseController.js";


const router=express.Router();

router.route("/courses")
.get(getAllCourses,errorHandler);

router.route("/editCrs/:id")
.put(editCourse, errorHandler);

router.route("/deleteCourse/:id")
.delete(deleteCourse, errorHandler);

router.route("/createCourse")
.post(createCourse, errorHandler);

export default router;