import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './config/config.js';
import courseRoutes from './routes/courseRoutes.js';
import userRoutes from './routes/userRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import enrolmentRoutes from './routes/enrolmentRoutes.js';
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
app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
})

db.sequelize.sync().then(()=>{
    app.listen(3000, ()=>{
        console.log('ceva');
    })
})

