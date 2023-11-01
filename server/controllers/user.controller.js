const {User} = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SECRET = process.env.SECRET

module.exports = {

    findAll: async (req, res) =>{
        
        try {
            const response = await User.find()
            res.status(200).json(response)
        }catch(error){
            console.log("DATABASE ERROR  :", error);
            res.status(400).json(error)
        }
        
    },
    findOne: async (req, res) =>{
        try {
            const response  = await User.findOne({_id:req.params.id}).populate('likes').populate('posts')
            console.log("+++++++++++++++++++++++++Database response : ", response);
            res.status(200).json(response)
            
        } catch (error) {
            console.log("ERROR: ", error);
            
        }
    },
    // create: (req, res)=>{
    //     User.create(req.body)
    //     .then(response=>
    //         res.status(201).json(response)
    //         )
    //     .catch(error=>res.status(400).json(error))
    // },
    update : async (req,res) => {
        try{
            const response = await User.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
            res.status(200).json(response)

        }catch(error){
            console.log("DATABASE ERROR  :", error);
            res.status(400).json(error)
        }
        
    },

    delete : async (req, res) => {
        
        try{
            const response = await User.findByIdAndDelete(req.params.id)
            res.status(200).json(response)

        }catch(error){
            console.log("DATABASE ERROR  :", error);
            res.status(400).json(error)
        }
    },
    
    register: async (req, res) => {
        try {
            const user = new User(req.body);
            const newUser = await user.save()
            const userToken = jwt.sign({id:newUser._id}, SECRET)
            console.log(`USER ID ${newUser._id} \nuserToken : ${userToken} `);

            res.status(201).cookie("userToken", userToken, {httpOnly:true}).json(newUser)
            

        }
        catch (error) {
            res.status(400).json(error)
        }
    },
    login: async (req, res) => {
        const userFromDB = await User.findOne({ email: req.body.email });
        if (!userFromDB) {
            res.status(404).json({ message: "Invalid email/password" })
        } else {
            try {
                const isPasswordValid = await bcrypt.compare(req.body.password, userFromDB.password)
                if (isPasswordValid) {
                    const userToken = jwt.sign({id: userFromDB._id}, SECRET)
                    console.log(`USER ID ${userFromDB._id} \nuserToken : ${userToken} `);
                    res.status(200).cookie("userToken", userToken, {httpOnly:true}).json({ message: "User Logged in successfully !!", user:userFromDB })
                    // res.status(200).json({ message: "User Logged in successfully !!" })
                } else {
                    res.status(400).json({ message: "Invalid email/password" })
                }
            }
            catch (error) {
                res.status(400).json({ message: 'Invalid email/password', error })
            }
        }
    },

    logout: async (req, res) => {
        try {
            console.log('****',req.cookies.userToken,'****');
            res.clearCookie("userToken")
            res.status(200).json({message:"User logged out Successfully!!"})
        } catch (error) {
            res.status(500).json({message:'Somenthing went wrong', error})
        }
    },
    getLoggedUser: async (req,res) => {
        try {
            const userToken = req.cookies.userToken;
            const loggedUserId = jwt.verify(userToken, SECRET)
            console.log('userToken : ',userToken,'\nuser id: ',loggedUserId);
            const user = await User.findOne({_id: loggedUserId.id}).populate('posts').populate('likes')
            res.status(200).json(user)
        } catch (error) {
            console.log(error);
            res.status(500).json({message:'no token provided'})
        }
    }
    
}