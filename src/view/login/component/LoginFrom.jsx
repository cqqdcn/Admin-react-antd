/* eslint-disable react/style-prop-object */
import React, { useState } from 'react'
import { LockOutlined, UserOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, message} from 'antd';
import { useNavigate } from 'react-router-dom'

export default function LoginFrom() {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const [loading, setloading] = useState(false)
  const onFinish = (values) => {
    if (values.username === 'admin' || values.password === 123456) {
      setloading(true)
      message.success('登录成功!');
      setTimeout(() => {
        navigate('/home')
      }, 2000)
    } else {
      message.error('密码或账号错误！')
    }
  };
  const onReset = (values) => {
    form.resetFields();
  }
  return (
    <Form
      name="normal_login"
      className="login-form"
      form={form}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: '请输入用户名!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名(admin)" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="请输入密码(123456)"
        />
      </Form.Item>
      <Form.Item>
        <div className="loginButton">
          <Button icon={<CloseCircleOutlined />} size="large" onClick={onReset}>重置</Button>
          <Button type="primary" htmlType="submit" className="login-form-button" icon={<UserOutlined />} size="large" loading={loading}>登录</Button>
        </div>
      </Form.Item>
    </Form>
  )
}
