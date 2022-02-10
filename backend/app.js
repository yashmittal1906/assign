const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const auth = require("./routes/auth")
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGODB_URL)
.then(() => {
    console.log("Connected to mongodb");
})  
.catch ((err) => {
    console.log("Error connecting to database:"+err);
});

app.get("/", (req,res) => {
    req.send("Hello, Welcome to the site")
});

app.use("/auth",auth);

app.listen(3000, function() {
    console.log("Backend connected");
});