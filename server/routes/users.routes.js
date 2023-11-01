const userController = require('../controllers/user.controller')


module.exports = app => {
    app.get('/api/users',userController.findAll)
    app.get('/api/users/:id',userController.findOne)
    app.put('/api/users/:id',userController.update)
    app.delete('/api/users/:id',userController.delete)

}