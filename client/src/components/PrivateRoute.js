import axios from 'axios'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { setUser } from '../redux/userReducer'
export const PrivateRoute = (props) => {

     const dispatch=useDispatch()
     const getUser=async()=>
     {
          try
          {
           const response=await axios.get('api/user/get-user-info-by-id',{
              headers:
              {
                  Authorization:'Bearer '+localStorage.getItem("token")
              }
           })

           if(response.data.success)
           {
               dispatch(setUser(response.data.data))
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
         getUser()
     },[])

  
     if(localStorage.getItem("token"))
     {
          return  props.children
     }
     else
     {
          return <Navigate to='/login'/>
     }
}
