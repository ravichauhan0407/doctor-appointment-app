import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react'
export const Register = () => {
  return (
    <div className='authentication'>
          <div className='authentication-form card p-2'>
          <Form
      layout='vertical'
    //   onFinish={onFinish}
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
        name="username"
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
    </Form>
          </div>
    </div>
  )
}
