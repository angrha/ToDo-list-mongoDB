const User = require('../models/userModel')

class UserController {
  static findAll(req, res) {
    User.find()
    .then( users => {
      res.status(200).json({
        message : 'list all user',
        user : users
      })
    })
    .catch( err => res.status(500).send(err))
  }

  static createUser(req, res){
    let objUser = {
      username : req.body.username,
      password : req.body.password,
      status   : req.body.status || 'user'
    }

    let user = new User(objUser)

    user.save()
    .then( dataUser => {
      res.status(200).json({
        message : 'new user created!',
        user    : dataUser
      })
    })
    .catch( err => res.status(500).send(err))
  }

  static updateUser(req, res) {
    User.findById(req.params.id)
    .then( user => {
      user.username = req.body.username || user.username,
      user.password = req.body.password || user.password,
      user.status   = req.body.status || user.status,

      user.save()
      .then( updatedUser => {
        res.status(200).json({
          message : 'user updated!',
          user    : updatedUser
        })
      })
      .catch( err => res.status(500).send(err))
    })
    .catch( err => res.status(500).send(err))
  }

  static deleteUser(req, res) {
    User.findByIdAndRemove(req.params.id)
    .then( user => {
      res.status(200).json({
        message : 'succesfully deleted',
        user : user
      })
    })
    .catch(err => res.status(500).send(err))
  }
}

module.exports = UserController