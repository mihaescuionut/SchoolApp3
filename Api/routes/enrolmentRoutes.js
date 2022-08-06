import express from "express";
import { errorHandler } from "../middleware/errorMiddleware.js";
import { getEnrolmentById, unrolCourseById, enrolCourseById, getStatistics, getStatsById, getCourseOfProfesorById} from "../controllers/enrolmentController.js";


const router=express.Router();

router.route('/enrolments/:id')
.get(getEnrolmentById, errorHandler)

router.route('/unrol/:id')
.delete(unrolCourseById, errorHandler)

router.route('/enrol/:id')
.put(enrolCourseById, errorHandler)

router.route('/stats')
.get(getStatistics, errorHandler)

router.route('/stats/:id')
.get(getStatsById, errorHandler)

router.route('/profesor/:id')
.get(getCourseOfProfesorById, errorHandler)


export default router;