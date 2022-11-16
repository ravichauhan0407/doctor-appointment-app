const expres=require('express')
const app=expres()
require('dotenv').config()

const  dbconfig=require('./config/dbconfig.js')

const port=process.env.PORT||5000;
app.listen(port,()=>{
      
})