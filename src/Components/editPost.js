import React from 'react'
import { Form, Input, Button,Row,Col } from 'antd';
import { useDispatch } from "react-redux";
import { editPost } from '../redux/actions/userActionCreator';
import { NavLink } from 'react-router-dom';
export default function EditPost(props) {
  const{location}=props
  const dispatch = useDispatch();
        const onFinish =async values => {
          console.log('Received values of form: ', values);
await dispatch(editPost(values,location.aboutProps.item.id))
props.history.push(`/home`);
        };
    
    return (


<Row>
      
      <Col span={8}>
      
     <h1 className="m-5 text-left">Edit Post</h1>
     <Form
      className="m-5"

      onFinish={onFinish}
    >
      <Form.Item
       name="title"
       rules={[
         
         {
           required: true,
           message: "Please input your post title!",
         },
       ]}
       initialValue={location.aboutProps&&location.aboutProps.item.title}
      >
        <Input placeholder="enter Post Title" />
      </Form.Item>
      <Form.Item
        name="body"
        rules={[
            {
              required: true,
              message: "Please input your post body",
            },
            
          ]}
          initialValue={location.aboutProps&&location.aboutProps.item.body}
      >
        <Input
         
          type="text"
          placeholder="Please input your post body"
        />
      </Form.Item>
     

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button m-5">
         save
        </Button>
        <NavLink to="/home"  className="login-form-button">
        Cancel
        </NavLink>
      </Form.Item>
    </Form>

    </Col>

    </Row>

    
    )
}
