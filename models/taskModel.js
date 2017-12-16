const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let taskSchema = mongoose.Schema({
  author : {
    type : Schema.Types.ObjectId,
    ref : 'User'
  },
  task : String,
  createdAt : new Date(),
  completion : {
    type : String,
    enum : ['Pending', 'Completed'],
    default : 'Pending'
  }
})

const Task = mongoose.model('Task', taskSchema);

module.exports = User