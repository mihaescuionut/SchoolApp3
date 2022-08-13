import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './Api/config/config.js';
import courseRoutes from './Api/routes/courseRoutes.js';
import userRoutes from './Api/routes/userRoutes.js';
import bookRoutes from './Api/routes/bookRoutes.js';
import enrolmentRoutes from './Api/routes/enrolmentRoutes.js';
import path from "path";


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', courseRoutes);
app.use('/api', userRoutes);
app.use('/api', bookRoutes);
app.use('/api', enrolmentRoutes);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, './frontend')));
app.get('*', (req, res)=>
    res.sendFile(path.resolve(__dirname, 'frontend', 'index.html')));

db.sequelize.sync().then(()=>{
    app.listen(process.env.PORT || 5000, ()=>{
        console.log('ceva');
    })
})

