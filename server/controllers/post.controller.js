const Post = require('../models/post.model')
const jwt = require('jsonwebtoken')
const { User } = require('../models/user.model')
const File = require('../models/file.model')
const { uploadFile } = require('./file.controller')
const SECRET = process.env.SECRET

module.exports = {


    findAll: async (req, res) => {
        try {
            const response = await Post.find().populate('postedBy').populate('likes')
            res.status(200).json(response)
        } catch (error) {
            console.log("DATABASE ERROR  :", error);
            res.status(400).json(error)
        }

    },

    findAllByCategory: async (req, res) => {
        try {
            const response = await Post.find({category:req.params.category}).populate('postedBy').populate('likes').populate('images')
            res.status(200).json(response)
        } catch (error) {
            console.log("DATABASE ERROR  :", error);
            res.status(400).json(error)
        }

    },

    findAllById: async (req, res) => {
        try {
            const response = await Post.find({postedBy:req.params.id}).populate('postedBy').populate('likes').populate('images')
            res.status(200).json(response)
        } catch (error) {
            console.log("DATABASE ERROR  :", error);
            res.status(400).json(error)
        }

    },

    findAllPostsPhotographer: async (req, res) => {
        const userToken = req.cookies.userToken;
        const { id: userId } = jwt.verify(userToken, SECRET)

        try {
            const response = await Post.find({ postedBy: userId }).populate("postedBy").populate('images')
            res.status(200).json(response)
        } catch (error) {
            console.log("DATABASE ERROR  :", error);
            res.status(400).json(error)
        }

    },

    // findByUserId : (req,res) => {
    //     console.log(req.params,'request params');
    //     Post.find({user:req.params.userId}).populate('user')


    //     .then(dbResponse => {
    //         console.log("DATABASE RESPONSE :", dbResponse );
    //         res.status(200).json(dbResponse)
    //     })
    //     .catch(dbError => {
    //         console.log("DATABASE ERROR  :", dbError);
    //         res.status(400).json(dbError)
    //     } )
    // },

    findOne: async (req, res) => {
        // Post.findById(req.params.id).populate('postedBy')
        try {
            const response = await Post.findById(req.params.id).populate('postedBy')
            res.status(200).json(response)

        } catch (error) {
            console.log("DATABASE ERROR  :", error);
            res.status(400).json(error)
        }

    },

    create: async (req, res) => {
        const userToken = req.cookies.userToken;
        const { id: userId } = jwt.verify(userToken, SECRET);
      
        try {
          const newPost = await Post.create({ ...req.body, postedBy: userId });
        //   const newPost = await Post.create(userId,req.body);
      
          // Handle the single uploaded image
          if (req.file) {
            const imagePath = 'http://localhost:8000/images/' + req.file.filename;
            const newFile = await File.create({ path: imagePath, post: newPost._id });
            await Post.findByIdAndUpdate(newPost._id, { $push: { images: newFile._id } });
          }
      
          await User.findByIdAndUpdate(userId, { $push: { posts: newPost._id } });
      
          res.status(201).json(newPost);
        } catch (error) {
          console.log("DATABASE Create:", error);
          res.status(400).json(error.errors);
        }
      },

    update: async (req, res) => {
        // Post.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
        try {
            const response = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate('postedBy')
            res.status(200).json(response)

        } catch (error) {
            console.log("DATABASE ERROR  :", error);
            res.status(400).json(error)
        }

    },

    delete: async (req, res) => {
        // Post.findByIdAndDelete(req.params.id)
        const userToken = req.cookies.userToken;
        const { id: userId } = jwt.verify(userToken, SECRET)
        try {
            const deletedPost = await Post.findByIdAndDelete(req.params.id)
            await User.findByIdAndUpdate(userId, { $pull: { posts: deletedPost._id } })
            res.status(200).json(deletedPost)

        } catch (error) {
            console.log("DATABASE ERROR  :", error);
            res.status(400).json(error)
        }

    },

    // likePost: async (req, res) => {
    //     const userToken = req.cookies.userToken;
    //     const { id: userId } = jwt.verify(userToken, SECRET)
    //     const post_id = req.params.post_id
    //     try {
    //         const post = await Post.find({
    //             _id: post_id,
    //             likes: userId,
    //           });
    //           if (post.length > 0) {
    //             return res
    //               .status(400)
    //               .json({ msg: "You have already liked this post" });
    //           }
    //         const likedPost = await Post.findOneAndUpdate({ _id: post_id },{$push: { likes: userId}},{new: true});
    //         await User.findByIdAndUpdate(userId, {$push:{likes:likedPost._id}})
    //         res.status(200).json({message: "post liked succesfully!!"})
    //     } catch (error) {
    //         console.log("DATABASE ERROR  :", error);
    //         res.status(400).json(error)
    //     }

    // },

    likePost: async (req, res) => {
        const userToken = req.cookies.userToken;
        const { id: userId } = jwt.verify(userToken, SECRET)
        const post_id = req.params.post_id
        try {
            const post = await Post.find({
                _id: post_id,
                likes: { $in: [userId] }
              });
              if (post.length > 0) {
                return res
                  .status(400)
                  .json({ msg: "You have already liked this post" });
              }
            const likedPost = await Post.findOneAndUpdate({ _id: post_id },{$push: { likes: userId}},{new: true});
            await User.findByIdAndUpdate(userId, {$push:{likes:likedPost._id}})
            res.status(200).json({message: "post liked succesfully!!"})
        } catch (error) {
            console.log("DATABASE ERROR  :", error);
            res.status(400).json(error)
        }
    },

    unlikePost: async (req, res) => {
        const userToken = req.cookies.userToken;
        const { id: userId } = jwt.verify(userToken, SECRET)
        const post_id = req.params.post_id
        try {
            
            const likedPost = await Post.findOneAndUpdate({ _id: post_id },{$pull: { likes: userId}},{new: true});
            await User.findByIdAndUpdate(userId, {$pull:{likes:likedPost._id}})
            res.status(200).json({message: "post unliked succesfully!!"})
        } catch (error) {
            console.log("DATABASE ERROR  :", error);
            res.status(400).json(error)
        }

    }
}