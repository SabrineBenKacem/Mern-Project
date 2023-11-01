const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    path: String,
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }
},{timestamps:true});

const File = mongoose.model('File', fileSchema);
module.exports =File
