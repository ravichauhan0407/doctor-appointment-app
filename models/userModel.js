const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
      name:{
         type:String,
         required:true
      },
      email:
      {
          type:String,
          required:true
      },
      password:
      {
          type:String,
          required:true
      },
      isadmin:
      {
           type:Boolean,
           default:false
      },
      isdoctor:
      {
           type:Boolean,
           default:false
      },
      seennotifications:
      {
           type:Array,
           default:[]
      },
      unseennotification:
      {
          type:Array,
          default:[]
      }
},
{
    timestamps:true
});


const userModel=mongoose.model('users',userSchema)


module.exports=userModel