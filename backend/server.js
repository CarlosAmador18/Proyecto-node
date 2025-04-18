import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js'
import cookieParser from 'cookie-parser'
import userRoutes from "./routes/user.routes.js"
import taskRoutes from "./routes/task.routes.js"

const PORT = process.env.PORT || 5000;
dotenv.config()

const app = express()

app.use(cookieParser()) 
app.use(express.json()); 
app.use("/api",userRoutes);
app.use("/api",taskRoutes);

app.listen(PORT, () => {
    connectDB()
    console.log('Servidor abierto en puerto ' + PORT)
});
