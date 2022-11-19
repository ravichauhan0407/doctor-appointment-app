import React from "react";
import { Layout } from "../components/Layout";
import axios from 'axios'
import { Form, Row, Col ,Input, Button} from "antd";
import { useDispatch } from "react-redux";
import {showLoading,hideLoading} from '../redux/alertsReducer'
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'
export const ApplyDoctor = () => {

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const onfinish=async(content)=>
  {
      try
      {
        dispatch(showLoading())

        const response=await axios.post('api/user/apply-for-doctor',content,{
            headers:
            {
                 Authorization:'Bearer '+localStorage.getItem("token")
            }
        })

        dispatch(hideLoading())
        
        if(!response.data.success)
        {
             toast.success(response.data.message) 
             navigate('/')
        }
        else
        {
             navigate('/')
        }
      }
      catch(error)
      {
        toast.error(error) 
      }
  }


  return (
    <Layout>
      <h1 className="page-title">APPLY DOCTOR</h1>
      <hr/>
      <Form onFinish={onfinish} layout="vertical"
       >
        <h3>Personal Information</h3>
        <Row gutter={20}>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label="First Name"
              name="firstname"
              rules={[{ required: true, message: "Field cannot be Empty" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label="Last Name"
              name="lastname"
              rules={[{ required: true, message: "Field cannot be Empty" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label="Mobile No."
              name="phone"
              rules={[{ required: true, message: "Field cannot be Empty" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Field cannot be Empty" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Field cannot be Empty" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label="Website"
              name="website"
              rules={[{ required: true, message: "Field cannot be Empty" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          
        </Row>
        <hr/>
        <h3>Profession Information</h3>
        <Row gutter={20}>
        <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label="Specialization"
              name="specialization"
              rules={[{ required: true, message: "Field cannot be Empty" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label="Experience"
              name="experience"
              rules={[{ required: true, message: "Field cannot be Empty" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label="Timmings"
              name="consultinghours"
              rules={[{ required: true, message: "Field cannot be Empty" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label="Fee Per Consultation"
              name="feeperconsultation"
              rules={[{ required: true, message: "Field cannot be Empty" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <div className="align-end">
            <Button htmlType="submit" className="apply-button">Apply</Button>
        </div>
      </Form>
    </Layout>
  );
};
