import React from 'react'
import { Layout } from '../components/Layout'

import {Tabs} from 'antd'

export const Notifications = () => {

  return (
    <Layout>
          <h1>Notifications</h1>
        <Tabs> 
              <Tabs.TabPane tab="unseen" key={0}>
                <div className='d-flex justify-content-end '>
                    <div className='text-decoration-underline cursor-pointer'>Mark as read</div></div>
              </Tabs.TabPane>
              <Tabs.TabPane tab="seen" key={1}>
              <div className='d-flex justify-content-end '>
                <div  className='text-decoration-underline cursor-pointer'>Delete All</div></div>
              </Tabs.TabPane>
        </Tabs>
    </Layout>
  )
}
