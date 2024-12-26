const mongoose = require('mongoose');
const { string } = require('zod');

mongoose.connect("mongodb+srv://keven3605y:3lBAaYlLnrMGqXNw@cluster0.ld2av.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : {
        type : Boolean,
        default : false
    }
})

const todo = mongoose.model('todo',todoSchema);

module.exports = {
    todo,
}