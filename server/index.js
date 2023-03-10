import bodyParser from "body-parser";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";

import postRoutes from './routes/posts.js'

const app = express();

app.use("/posts", postRoutes)

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors()); 

const CONNECTION_URL = "mongodb+srv://admin:admin@cluster0.7sapscl.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err.message))

///////////////////////////////////////////////////////

