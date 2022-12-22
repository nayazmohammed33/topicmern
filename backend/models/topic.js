const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  // userid: { type: String, required: true },
  topic: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  
}, {
  timestamps: true
});


const Task = mongoose.model("Task", taskSchema);
module.exports = Task;