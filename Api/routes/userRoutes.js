import express from "express";
import { errorHandler } from "../middleware/errorMiddleware.js";
import {getAllUsers, registerUser, login} from '../controllers/userController.js';
import protect from "../middleware/authentification.js";


const router = express.Router();

router.route('/users') 
.get(getAllUsers, errorHandler)

router.route('/register')
.post(registerUser, errorHandler)

router.route('/login')
.post(login, errorHandler)


export default router;