
// adding module 

const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
require("./db/conn");

// addding routers 

const studentRouter = require("./router/student");
const quizRuoter = require("./router/quizroute");


// 3: Register router

app.use("/api",studentRouter);

app.use("/api", quizRuoter);



// server request 

app.listen(port, ()=>{

    console.log(`App is running on port ${port}`);

})