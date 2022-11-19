import React, { useEffect } from 'react'

import   axios from 'axios'
import toast from 'react-hot-toast'

import { useSelector } from 'react-redux'
import { Layout } from '../components/Layout'
import { showLoading } from '../redux/alertsReducer'

export const Home = () => {
  
 const {loading} =useSelector((state)=>state.alerts)

   

  return (
      <Layout>
         <h1>HOME PAGE</h1>
      </Layout>
  )
}
