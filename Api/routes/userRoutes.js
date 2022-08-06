import express from "express";
import { errorHandler } from "../middleware/errorMiddleware.js";
import {getAllUsers} from '../controllers/userController.js';


const router = express.Router();

router.route('/users') 
.get(getAllUsers, errorHandler)


export default router;