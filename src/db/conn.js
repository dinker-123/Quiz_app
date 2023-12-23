const mongoose = require("mongoose");

// connect to localhost database

mongoose.connect("mongodb://49.36.239.154/students-api", {
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{

    console.log("Connected!!!");

}).catch((e)=>{

    console.log(e);

});



