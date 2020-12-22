import React ,{useEffect,useState}from 'react'
import { Form, Input, Button, Checkbox,Row,Col,Card, Space } from 'antd';
import { MailOutlined , LockOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { logIn } from '../../redux/actions/userActionCreator';
import "./login.css"
import LoadingPage from '../loadingPage/loading';

export default function Login(props) {
  const dispatch = useDispatch();
  const[loading,setLoading]=useState(true)
  useEffect(()=>{
      setTimeout(()=>{

          setLoading(false)
      },4500)
    })
  const onFinish =async values => {
    console.log('Received values of form: ', values);
    await dispatch(logIn(values))
    props.history.push(`/home`);
        };
  
    return (
      <div className="space-align-container">
      {loading===true?<LoadingPage/>:(

        <Row>
              <Col span={8}></Col>
              <Col span={8}>
              <div className="space-align-block login">
                  <Space align="center">
              <Card style={{ width: 300 }}>
             <h1>Login</h1>
             <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
               name="email"
               rules={[
                 {
                   type: "email",
                   message: "The input is not valid E-mail!",
                 },
                 {
                   required: true,
                   message: "Please input your E-mail!",
                 },
               ]}
              >
           
        
                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E-mail" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                    {
                      min: 8,
                      message: "The password must be at least 8 characters.",
                    },
                  ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
        
                <a className="login-form-forgot" href="/">
                  Forgot password
                </a>
              </Form.Item>
        
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                Or <a href="/">register now!</a>
              </Form.Item>
            </Form>
            </Card>
            </Space>
            </div>
            </Col>
            <Col span={8}></Col>
            </Row>
        
        )}
                </div>
   
  
    )
}
