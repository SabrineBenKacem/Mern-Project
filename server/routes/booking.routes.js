const bookingController = require('../controllers/booking.controller')


module.exports = app => {

    app.get('/api/bookings' ,bookingController.findAll)

    app.get('/api/bookings/client' ,bookingController.findAllBookingsClient)
    app.get('/api/bookings/photographer' ,bookingController.findAllBookingsPh)


    app.get('/api/bookings/:status' ,bookingController.findAllBookingsPhotographer)

    app.get('/api/bookings/:id' , bookingController.findOne)

    app.post('/api/bookings', bookingController.create)    

    app.put('/api/bookings/:id', bookingController.update)

    app.delete('/api/bookings/:id', bookingController.delete)

}
