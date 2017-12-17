const express = require('express');
const router  = express.Router();
const Task    = require('../controllers/taskController')
const isLogin = require('../helper/authentication')
const isAdmin = require('../helper/authorizationAdmin')

router.get('/', Task.findAll)
router.get('/:id', isLogin, Task.findUserTask)
router.post('/add', isLogin, Task.addTask)

module.exports = router