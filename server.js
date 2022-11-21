const expres=require('express')
const app=expres()
const userRoutes=require('./routes/userRoutes.js')
const adminRoutes=require('./routes/adminRoutes.js')
require('dotenv').config()
const  dbconfig=require('./config/dbconfig.js')
app.use(expres.json())

app.use('/api/user',userRoutes)

app.use('/api/admin',adminRoutes)

app.use((req,res)=>
{
     console.log('ROUTE DOES NOT FOUND')
})


const port=process.env.PORT||5000;
app.listen(port,()=>{
      
})