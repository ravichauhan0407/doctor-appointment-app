import React, { useEffect } from 'react'

import   axios from 'axios'
import toast from 'react-hot-toast'

import { useSelector } from 'react-redux'

export const Home = () => {
  
 const {loading} =useSelector((state)=>state.alerts)

 

 const getData=async()=>
 {
     try
     {
       const response=await axios.get('/api/user/get-user-info-by-id',{
           headers:
           {
               Authorization:'Bearer '+localStorage.getItem('token')
           }
       })
        
       if(response.data.success)
       {
             console.log(response.data.data)
             toast.success('Working fine!')
       }
       else
       {
              toast.error(response.data.message)
       }
      }
     catch(error)
     {
            toast.error(error)
     }
 }


  useEffect(()=>
  {
       getData()
  },[])


  return (
    <div>Home</div>
  )
}
