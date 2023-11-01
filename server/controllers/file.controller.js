const  File  = require('../models/file.model');
const Post = require('../models/post.model')

const uploadFile = async (req, res) => {
    try {
        const imagePaths = req.files.map(file => 'http://localhost:8000/images/' + file.filename)
        // console.log("-++-+-+-+-+-+-+", imagePaths, "+-+-+-+-+-+-+-+-+-+");
        const post = await Post.findById(req.params.id)
        console.log(post);
        imagePaths.map(async (imagePath) => {
            const newFile = await File.create({ path: imagePath,post: post.id})
            await Post.findByIdAndUpdate(post.id,{$push:{files:newFile._id}})
        });
      
        res.send({ status: "ok" });
    } catch (error) {
        res.json({ status: "ERROR create", error });
    }

};
const getFiles = async (req, res)=>{
try{
const files = await File.find().populate('post')
res.json(files)

}catch(err){
res.json(err)
} 
// const deleteFile= async (req, res) => {
//         const {id: Id} = req.params
//         try {
//             const deletedFile = await File.findByIdAndDelete(Id)
//             await Post.findByIdAndUpdate(Id, { $pull: { files: Id } })
//             res.status(200).json(deletedFile)
//         } catch (error) {
//             res.status(400).json(error)
//         }
//     }
}



module.exports = {
    uploadFile,getFiles, 
};




   