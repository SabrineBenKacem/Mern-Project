const postController = require('../controllers/post.controller')
const authentication = require('../config/jwt.config')


module.exports = app => {
    app.get('/api/posts', postController.findAll)
    app.get('/api/posts/photographer', postController.findAllPostsPhotographer)
    app.get('/api/posts/photographer/:id', postController.findAllById)
    app.get('/api/posts/categories/:category', postController.findAllByCategory)
    // app.get('/api/posts/users/:userId' ,postController.findByUserId)
    app.get('/api/posts/:id', postController.findOne)
    // app.post('/api/posts', postController.create)
    app.put('/api/posts/:id', postController.update)
    app.delete('/api/posts/:id', postController.delete)
}