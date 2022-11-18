const express=require('express')

const User=require('../models/userModel.js')
const becrypt=require('bcryptjs')
const router=express.Router()

const jwt=require('jsonwebtoken')

const authMiddleware=require('../middlewares/authmiddleware.js')

router.post('/register',async(req,res)=>
{
    
         try
         {
            const isUserPresent=await User.findOne({email:req.body.email})

                if(isUserPresent)
                {
                      return  res.status(200).send({message:"user already present!",success:false})
                }
            const salt=await becrypt.genSalt(12)
            const password=req.body.password
            const hashedpassword=await becrypt.hash(password,salt)

            req.body.password=hashedpassword

            const user =new User(req.body)

             await user.save()
             
             res.status(200).send({message:'user created successfully',success:true})
         }
         catch(error)
         {
             console.log(error)
         }
})

router.post('/login',async(req,res)=>
{
    
    try
    {
      const  user=await User.findOne({email:req.body.email})

      if(!user)
      {
            return res.status(200).send({message:"user doesn't exist",success:false})
      }

      const matched=await becrypt.compare(req.body.password,user.password)

      console.log(matched)

      if(!matched)
      {
           return res.status(200).send({message:'Incorrect password!',success:false})
      }
      else
      {
          const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"})

         return  res.status(200).send({message:"successfully LogedIn",success:true,data:token})
      }
    }
    catch(error)
    {
        res.status(500).send({message:"Error in database"})
    }

})

router.get('/get-user-info-by-id',authMiddleware,async (req,res)=>
{
   try
   {
         const user=await User.findOne({_id:req.userId})

         if(!user)
         {
               return res.status(200).send({message:"User doesn't exist",success:false})
         }

         res.status(200).send({success:true,
            data:
            {
                 name:user.name,
                 email:user.email
            }
        })
         
   }
   catch(error)
   {
         res.status(500).send({message:"Error getting User Info",success:false})
   }
})
module.exports=router