const mongoose=require('mongoose')


const doctorSchema=mongoose.Schema({
      userid:
      {
          type:String,
          required:true
      },
      firstname:
      {
           type:String,
           required:true
      },
      lastname:
      {
          type:String,
          required:true
      },
      email:{
          type:String,
          required:true
      },
      phone:
      {
          type:String,
          required:true
      },
      specialization:
      {
           type:String,
           required:true
      },
      experience:
      {
           type:String,
           required:true
      },
      website:
      {
          type:String,
          required:true
      },
      feeperconsultation:
      {
           type:String,
           required:true
      },
      consultinghours:
      {
           type:String,
           required:true
      },
      status:
      {
          type:String,
          required:true
      }
})

module.exports=mongoose.model('doctors',doctorSchema)

