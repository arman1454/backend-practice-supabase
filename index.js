import 'dotenv/config';
import express from 'express';
import userRoutes from './routes/users.js';


const app = express();

app.use(express.json());

app.use('/api',userRoutes);

app.listen(5000,()=>{
    console.log('Server running on port 5000');
})

