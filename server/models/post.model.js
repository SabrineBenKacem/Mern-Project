const mongoose  = require('mongoose')
// const UserSchema = require('./user.model');

const PostSchema  = new mongoose.Schema({
    category:{
        type:String,
        enum:["Party","Portrait","Wedding","Food","Product","Conference","Sports","Fashion","Family"],
        required:true
    },
    images:
    {
        type: [mongoose.Schema.Types.ObjectId],
        ref:'File',required:true
    },
    likes: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        },
    ],
    postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps:true});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post