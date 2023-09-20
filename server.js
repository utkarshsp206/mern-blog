const express = require("express");
const { animationFrameScheduler } = require("rxjs");
const app = express();
const PORT = process.env.PORT || 8000;


//Initialising Middleware
//Earlier we use to install body parser but now it is a built in middleware
// Function of Express: It parses the incoming JSON Payload
app.use(express.json({extended: animationFrameScheduler}))


app.get("/", (req,res) => res.send("Hello, World!"));
app.post("/", (req,res) => res.send(`Hello ${req.body.name}`));

app.listen(PORT, ()=>console.log(`Server Running at port ${PORT}`))