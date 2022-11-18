import { Button, Form, Input } from 'antd';
import React from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom';
export const Login = () => {

   const navigate=useNavigate()
   const onFinish=async(content)=>
   {
         const  response=await axios.post('/api/user/login',content)
        

         if(response.data.success)
         {
                  toast.success(response.data.message)

                  localStorage.setItem("token",response.data.data)

                  navigate('/')
         }
         else
         {
                   toast.error(response.data.message)
         }
   }
   
  return (
    <div className='authentication'>
          <div className='authentication-form card p-2 '>
          <Form
      layout='vertical'
       onFinish={onFinish}
    >
        <div className='card-title mb-5'>BE HEALTHY BE WEALTHY</div>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input  />
      </Form.Item>
      <Form.Item
        label="Passwod"
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          type="password"
        />
      </Form.Item>
      <Form.Item>
        <Button    type="primary" htmlType="submit" className="login-form-button">
          LOGIN
        </Button>
      </Form.Item>
      <Link to='/register' className='h5'><u>click here for signup</u></Link>
    </Form>
   
          </div>
    </div>
  )
}
