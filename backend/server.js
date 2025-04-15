import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js'

import userRoutes from "./routes/user.route.js"

dotenv.config()

const app = express()

app.use(express.json()); // allows us to accept JSON data in the req.body

const PORT = process.env.PORT || 5000;

app.use("/api/users",userRoutes);

app.listen(PORT, () => {
    connectDB()
    console.log('Servidor abierto en puerto ' + PORT)
});
