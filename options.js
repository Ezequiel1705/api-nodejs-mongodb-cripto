import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const URL = process.env.URL_MONGO; //you URL
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connection Ok')
})
