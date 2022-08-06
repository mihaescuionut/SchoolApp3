import express from "express";
import { errorHandler } from "../middleware/errorMiddleware.js";
import {getAllBooks} from "../controllers/bookController.js";


const router = express.Router();

router.route('/books')
.get(getAllBooks, errorHandler)

export default router;