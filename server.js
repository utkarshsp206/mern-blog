const express = require("express");
const { animationFrameScheduler } = require("rxjs");
const app = express();
const PORT = process.env.PORT || 8000;

const articlesInfo={
    "learn-react":{
        comments:[],
    },
    "learn-node":{
        comments:[],
    },
    "my-thoughts-on-learning-react":{
        comments:[],
    }
}


//Initialising Middleware
//Earlier we use to install body parser but now it is a built in middleware
// Function of Express: It parses the incoming JSON Payload
app.use(express.json({extended: animationFrameScheduler}))

app.post('/api/articles/:name/add-comments', (req,res)=>{
    const {username, text}=req.body;
    const articlesName = req.params.name;
    articlesInfo[articlesName].comments.push({username, text});
    res.status(200).send(articlesInfo[articlesName])

})


app.get("/", (req,res) => res.send("Hello, World!"));
app.post("/", (req,res) => res.send(`Hello ${req.body.name}`));

app.listen(PORT, ()=>console.log(`Server Running at port ${PORT}`))