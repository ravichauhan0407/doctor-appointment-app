const express=require('express')

const User=require('../models/userModel.js')
const Doctor=require('../models/doctorModels')
const authMiddleware=require('../middlewares/authmiddleware')
const router=express.Router()


router.get('/get-all-user',authMiddleware,async(req,res)=>
{
     try
     {
          const user=await User.find({isadmin:false})

          res.status(200).send({success:true,data:user})

     }
     catch(error)
     {
         res.status(500).send({message:"Something went wrong",success:false})
     }


})
router.post('/change-doctor-status',authMiddleware,async(req,res)=>
{
        try
        {
            const user=await User.findById(req.body.userid)
        

            const  unseennotification=user.unseennotification
            unseennotification.push(
                {
                    type:"doctor-request-changed",
                    message:`Your request is approved for doctor`,
                })
            await   User.findByIdAndUpdate(user._id,{unseennotification})
            await  Doctor.findByIdAndUpdate(req.body._id,{status:"success"})
            res.status(200).send({success:true})
        }
        catch
        {
             res.status(500).send({message:"something went wrong",success:false})
        }
})
router.get('/get-all-doctor',authMiddleware,async(req,res)=>
{
     try
     {
          const user=await Doctor.find({})

          res.status(200).send({success:true,data:user})

     }
     catch(error)
     {
         res.status(500).send({message:"Something went wrong",success:false})
     }


})
module.exports=router
