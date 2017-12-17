const Task = require('../models/taskModel')

class TaskController {
  
  static findAll(req, res) {
    Task.find()
    .then( tasks => {
      res.status(200).json({
        message : 'list of all Task',
        task : tasks
      })
    })
    .catch( err => res.status(500).send(err))
  }

  static findUserTask(req, res) {
  
    Task.findOne({
      _id : req.params.id,
      author : req.decoded.id
    })
    .populate('author', 'username')
    .then( userTask => {
      console.log(userTask)
      res.status(200).json({
        message : 'your task',
        task : userTask
      })
    })
    .catch( err => res.status(500).send(err))
  }

  static addTask(req, res) {
    let task = new Task({
      author : req.decoded.id,
      title  : req.body.title || `${req.body.task.substr(0,10)}...`,
      task   : req.body.task
    })

    task.save()
    .then( task => {
      res.status(200).json({
        message : 'success create new task',
        task : task
      })
    })
    .catch( err => res.status(500).send(err))
  }

}

module.exports = TaskController