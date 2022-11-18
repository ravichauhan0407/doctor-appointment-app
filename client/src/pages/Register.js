import { Button, Form, Input } from 'antd';
import React from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom';
export const Register = () => {

   const onFinish=async (content)=>
   {
       try
       {
            const response= await axios.post('/api/user/register',content)

            if(response.data.success)
            {
                toast.success(response.data.message)
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


  return (
    <div className='authentication'>
          <div className='authentication-form card p-2'>
          <Form
      layout='vertical'
       onFinish={onFinish}
    >
        <div className='card-title'>BE HEALTHY BE WEALTHY</div>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input  />
      </Form.Item>
      <Form.Item
        label="Username"
        name="name"
        rules={[{ required: true, message: 'Please input your Username!' }]}
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
          Register
        </Button>
      </Form.Item>
      <Link to='/login' className='h5'><u>click here for Login</u></Link>
    </Form>
          </div>
    </div>
  )
}
