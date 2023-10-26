import express from 'express';
import cors from 'cors';
import "./options.js"
import dotenv from 'dotenv';
import router from './routes/index.js';
dotenv.config();

const corsOptions = {
    origin: process.env.ROOT_CLIENT, //YOU ROOT APP REACT/REACT NATIVE
    methods: ["GET", "POST"],
    credentials: true
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api", router);


const PORT = process.env.PORT_SERVER || 8080;

const server = app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
});
server.on("Error", err => console.log(err));