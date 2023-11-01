const Booking = require('../models/booking.model')
const {User} = require('../models/user.model')

const jwt = require('jsonwebtoken')

const SECRET = process.env.SECRET

module.exports = {

    findAll : async (req,res) => {
        try {
            const response = await Booking.find().populate("client").populate("photographer")
            res.status(200).json(response)
        }catch(error){
            console.log("DATABASE ERROR  :", error);
            res.status(400).json(error)
        }
        
    },

    findAllBookingsPhotographer : async (req,res) => {
        const userToken = req.cookies.userToken;
        const {id:userId} = jwt.verify(userToken, SECRET)

        try {
            const response = await Booking.find({photographer:userId, status: req.params.status}).populate("photographer").populate("client")
            res.status(200).json(response)
        }catch(error){
            console.log("DATABASE ERROR  :", error);
            res.status(400).json(error)
        }
        
    },
    findAllBookingsClient : async (req,res) => {
        const userToken = req.cookies.userToken;
        const {id:userId} = jwt.verify(userToken, SECRET)

        try {
            const response = await Booking.find({client:userId}).populate("client").populate("photographer")
            res.status(200).json(response)
        }catch(error){
            console.log("DATABASE ERROR  :", error);
            res.status(400).json(error)
        }
        
    },
    findAllBookingsPh : async (req,res) => {
        const userToken = req.cookies.userToken;
        const {id:userId} = jwt.verify(userToken, SECRET)

        try {
            const response = await Booking.find({photographer:userId}).populate("photographer").populate("client")
            res.status(200).json(response)
        }catch(error){
            console.log("DATABASE ERROR  :", error);
            res.status(400).json(error)
        }
        
    },

    findOne : async (req,res) => {
        try {
            const response = await Booking.findById(req.params.id).populate("client")
            res.status(200).json(response)
        }catch(error){
            console.log("DATABASE ERROR  :", error);
            res.status(400).json(error)
        }
    },

    create : async (req,res) => {
        const userToken = req.cookies.userToken;
        const {id:userId} = jwt.verify(userToken, SECRET)
        try {
            const newBooking = await Booking.create({...req.body, client:userId})
            await User.findByIdAndUpdate(userId, {$push:{bookings:newBooking._id}})
            res.status(201).json(newBooking)
        }catch(error){
            console.log("DATABASE Create :", error);
            res.status(400).json(error.errors)
        }
    },

    update : async (req,res) => {
        
        try {
            const response = await Booking.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
            res.status(200).json(response)
        }catch(error){
            console.log("DATABASE ERROR  :", error);
            res.status(400).json(error)
        }
        
    },

    delete : async (req, res) => {
        const userToken = req.cookies.userToken;
        const {id:userId} = jwt.verify(userToken, SECRET)
        try {
            const deletedBooking = await Booking.findByIdAndDelete(req.params.id)
            await User.findByIdAndUpdate(userId, {$pull:{bookings:deletedBooking._id}})
            res.status(200).json(deletedBooking)
        }catch(error){
            console.log("DATABASE ERROR  :", error);
            res.status(400).json(error)
        }
    }
}