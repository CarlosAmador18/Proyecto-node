import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js'

import userRoutes from "./routes/user.route.js"

dotenv.config()

const app = express()

app.use(express.json());

app.use("/api/users",userRoutes);

app.listen(5000, () => {
    connectDB();
    console.log('Servidor abierto en puerto 5000')
});
