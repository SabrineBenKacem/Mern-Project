const userController = require('../controllers/user.controller')
const bookingController = require('../controllers/booking.controller')
const postController = require('../controllers/post.controller')


module.exports = app => {

    // app.get('/api/bookings' ,bookingController.findAll)

    // app.get('/api/bookings/' ,bookingController.findAllBookingsClient)

    // app.get('/api/bookings/:status' ,bookingController.findAllBookingsPhotographer)

    // app.get('/api/bookings/:id' , bookingController.findOne)

    // app.post('/api/bookings', bookingController.create)    

    app.put('/api/like/:post_id', postController.likePost)
    app.put('/api/unlike/:post_id', postController.unlikePost)

    // app.put('/api/bookings/:id', bookingController.update)

    // app.delete('/api/bookings/:id', bookingController.delete)

}
