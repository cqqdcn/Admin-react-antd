import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { Layout, Breadcrumb } from 'antd';
import Main from '../components/Main';

const { Header } = Layout;
export default function Heade(props) {
  const [collapsed, setCollapsed] = useState(true);
  const clickColl = () => {
    setCollapsed(!collapsed)
    props.folding(collapsed)
  }
  return (
    <Layout className="site-layout">
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
        }}
      >
        <div onClick={clickColl} className="trigger">
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        <div className="Breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item href="/">  
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
            <Breadcrumb.Item>Application</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="loginOut">
          
        </div>
      </Header>
      <Main />
    </Layout>
  )
}
