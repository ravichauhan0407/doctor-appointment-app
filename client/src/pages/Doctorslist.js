import React,{useEffect, useState} from 'react'
import { Layout } from '../components/Layout'
import axios from 'axios'
import { hideLoading, showLoading } from '../redux/alertsReducer'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { Table } from 'antd'

export const Doctorslist = () => {

    const [users,setUsers]=useState([])

    const dispatch=useDispatch()


    const updateStatus=async(content)=>
    {
       
      try
      {
        dispatch(showLoading())  
          const response=await axios.post('api/admin/change-doctor-status',content,{
          headers:
          {
              Authorization:'Bearer '+localStorage.getItem("token")
          }
       })
       dispatch(hideLoading())
       if(response.data.success)
       {
            getDoctorList()
       }
       else
       {
           console.log('hello')
           toast.error(response.data.message)
       }
      }
      catch(error)
      {
            
            toast.error(error)
      }

    
    }

    const getDoctorList=async()=>
     {
         dispatch(showLoading())    
          try
          {
            
           const response=await axios.get('api/user/get-all-doctor',{
              headers:
              {
                  Authorization:'Bearer '+localStorage.getItem("token")
              }
           })
           dispatch(hideLoading())
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

        
     }
     
     useEffect(()=>
     {
         getDoctorList()
     },[])

     const column= [
      {
        title: 'Name',
        key: 'name',
        render: (text,data) => {
        return (<div className=''>{`${data.firstname} ${data.lastname}`}</div>)
        }
      },
      {
        title: 'Email',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: 'Status',
        key: 'status',
        dataIndex:'status',
        render:(text)=>(<a>{text}</a>)
      },
      {
          title:"Actions",
          ket:"actions",
          render:(_,data)=>{
              if(data.status=='pending')return (<a onClick={()=>{updateStatus({_id:data._id,userid:data.userid})}} className='anchor text-decoration-underline ' >Approve</a>)
              else return ((<div className='anchor text-decoration-underline' >Block</div>))
          }
      }
    ];

  return (
    <Layout>
        <h1>Users</h1>
        <Table columns={column} dataSource={users}></Table>
    </Layout>
  )
}
