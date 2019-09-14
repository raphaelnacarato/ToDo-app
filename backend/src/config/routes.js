const express = require('express')

module.exports = function (server) {
    
    // API Routes
    const router = express.Router()
    server.use('/api', router)

    //ToDo Routes
    const toDoService = require('../api/toDo/toDoService')
    toDoService.register(router, '/todos')
}