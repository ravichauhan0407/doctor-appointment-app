const mongoose=require('mongoose')


mongoose.connect(process.env.MONGO_URL)

const connection=mongoose.connection

connection.on('connected',()=>
{
     console.log('successfully connected')
})

connection.on('error',()=>
{
      console.log('Error in connecting with database')
})


module.exports=mongoose