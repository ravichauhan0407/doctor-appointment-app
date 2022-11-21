import React,{useEffect, useState} from 'react'
import { Layout } from '../components/Layout'
import axios from 'axios'
import { hideLoading, showLoading } from '../redux/alertsReducer'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { Table } from 'antd'

export const Userslist = () => {

    const [users,setUsers]=useState([])

    const dispatch=useDispatch()

    const getUserList=async()=>
     {
         dispatch(showLoading())    
          try
          {
            
           const response=await axios.get('api/admin/get-all-user',{
              headers:
              {
                  Authorization:'Bearer '+localStorage.getItem("token")
              }
           })

           if(response.data.success)
           {
                    setUsers(response.data.data)    
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

        dispatch(hideLoading())
     }
     
     useEffect(()=>
     {
         getUserList()
     },[])

     const column= [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Actions',
        key: 'action',
        dataIndex:'actions',
        render: (text,data) => {
          console.log(text);
          console.log(data);
        return (<a className=''>Block</a>)
        }
      },
    ];

  return (
    <Layout>
        <h1>Users</h1>
        <Table columns={column} dataSource={users}></Table>
    </Layout>
  )
}
