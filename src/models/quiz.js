const validator = require("validator");
const mongoose = require("mongoose");


// schema of a user

const quizSchema = new mongoose.Schema({

    category: {
        type : String,
        required : true,
        minlength: 3
    },

    type: {
        type : String,
        required : true,
        minlength: 3
    },

    difficulty: {
        type : String,
        required : true,
        minlength: 3
    },

    question : {
        type : String,
        required: true,
        minlength: 3,
    },

    option_A : {
        type : String,
        required: true,
        minlength: 3,
    },

    option_B : {
        type : String,
        required: true,
        minlength: 3,
    },

    option_C : {
        type : String,
        required: true,
        minlength: 3,
    },

    option_D : {
        type : String,
        required: true,
        minlength: 3,
    },

    correct_option : {
        type : String,
        required: true,
        minlength: 3,
    }

    
})


// now we create a new collection

const Quiz = new mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
