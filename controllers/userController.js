const User = require('../models/userModel')

class UserController {
  static findAll() {
    User.find()
    .then( users => {
      res.status(200).json({
        message : 'list all user',
        user : users
      })
    })
    .catch( err => res.status(500).send(err))
  }
}