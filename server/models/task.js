const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide name!"],
        trim: true,
        maxLength: [20,"name cannot be longer than 20 characters!"]
        
    },
    completed: {
        type: Boolean,
        default:false,
    }
});

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name!"],
  },
  email: {
    type: String,
    required: [true, "must provide email!"],
  },
  password: {
    type: String,
    required: [true, "must provide password!"],
  },
});

module.exports = mongoose.model("Task",taskSchema)