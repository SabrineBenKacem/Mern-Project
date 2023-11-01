const mongoose  = require('mongoose')
const {UserSchema} = require('./user.model');

const BookingSchema  = new mongoose.Schema({
    client:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:[true, " 🛑🛑🛑"],
    },
    photographer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:[true, " 🛑🛑🛑"]
    },
    category:{
        type:String,
        enum:["Party","Portrait","Wedding","Food","Product","Conference","Sports","Fashion","Family"],
        required:[true, " 🛑🛑🛑"]
    },
    status:{
        type:String,
        enum:['pending','declined', 'accepted'],
        default : 'pending'
    },
    address: {
        country:{
            type:String,
            required:[true, " 🛑🛑🛑"]
        },
        city: {
            type:String,
            required:[true, " 🛑🛑🛑"]
        }
    },
    dateTime:{
        type:Date,
        required:[true, "❌❌❌"]
    },
    duration:{
        type:Number,
        required:[true, "❌❌❌"]
    }
}, {timestamps:true , toJSON: { virtuals: true }, toObject: { virtuals: true }});


// Add a virtual getter method to calculate the price based on your logic
BookingSchema.virtual('totalPrice')
.get(function() {
    // Your logic to calculate the price goes here
    // You can access other fields of the document using `this.fieldName`
    // For example, if you want to calculate the price based on duration:
    const duration = this.duration;
    console.log(duration,'⏰⏰⏰');
    // Add your pricing logic here, for example:
    console.log('+++', this.photographer, '+++');
    const pricePerHour = this.photographer.pricePerHour;
    // const basePrice = 100; // Change this to your actual pricing logic
    const price = pricePerHour * duration;
    console.log(price,"💲💲💲");
    return price;
})




const Booking = mongoose.model('Booking', BookingSchema);
module.exports = Booking