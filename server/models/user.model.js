const mongoose = require('mongoose')
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')
// const {PostSchema} = require('./post.model')


const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required"],
        minlength: [3, "minimum length is 3"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required"],
        minlength: [3, "minimum length is 3"]
    },
    address: {
        country:{
            type:String,
            required: [true, "Country is required"]
        },
        city: {
            type:String,
            required: [true, "City is required"]
        }
    },
    email: {
        type: String,
        required: [true, "email is required"],
        validate: [isEmail, "Email not valid"],
        unique: [true, "email already in use"]
        // validate: {
        //     validator: val => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val),
        //     message: "PLEASE ENTER A VALID EMAIL"
        // }
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minlength: [6, "password minimum length is 6"]
    },
    role: {
        type:String,
        enum: ['p','c'],
        required: [true, "type is required"]
    },
    profilePhoto :{
        type: String,
        default: "https://th.bing.com/th/id/OIP.EHKlS38MIH4Am9QLr5SoIgHaHa?pid=ImgDet&rs=1"
    },
    bookings : 
        {
        type :[mongoose.Schema.Types.ObjectId],
        ref:'Booking'
        }
    ,
    posts : {
        type :[mongoose.Schema.Types.ObjectId],
        ref:'Post'
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    pricePerHour: {
        type: Number,
    },
    description: {
        type: String
    }
},{timestamps:true})

UserSchema.pre('validate',function(next){
    console.log('INSIDE VALIDATE Role');
    console.log(`Password: ${this.pricePerHour} \n Confirm password : ${this.role}`);
    if (!this.pricePerHour &&this.role=='p'){
        this.invalidate('Price', 'Price is required')
    }
    next()
})

UserSchema.virtual('confirmPassword')
.get(()=>this._confirmPassword)
.set(value=>this._confirmPassword = value)


UserSchema.pre('validate',function(next){
    console.log('INSIDE VALIDATE CONFIRM PASSWORD');
    console.log(`Password: ${this.password} \n Confirm password : ${this.confirmPassword}`);
    if (this.password != this.confirmPassword){
        this.invalidate('confirmPassword', 'Password Must match')
    }
    next()
    this.createdAt = Date.now()
    this.updatedAt = Date.now()
})


UserSchema.pre('save', async function(next){
    console.log('Inside Pre Save Hook');
    try{
        const hashedPassword = await bcrypt.hash(this.password, 10);
        console.log('PASSWORD text : ',this.password,'\nPASSWORD hashed : ',hashedPassword);
        this.password= hashedPassword
    }
    catch(error){
        console.log(error);
    }
    next()
})
const User = mongoose.model("User", UserSchema)
module.exports = {User, UserSchema}