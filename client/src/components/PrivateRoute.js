import React from 'react'
import { Navigate } from 'react-router-dom'
export const PrivateRoute = (props) => {
  
     if(localStorage.getItem("token"))
     {
          return  props.children
     }
     else
     {
          return <Navigate to='/login'/>
     }
}