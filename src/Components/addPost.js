import React from 'react'
import { Form, Input, Button,Row,Col } from 'antd';
import { useDispatch} from "react-redux";
import { addPost } from '../redux/actions/userActionCreator';
import { NavLink } from 'react-router-dom';
export default function AddPost(props) {
  const dispatch = useDispatch();
  const onFinish =async values => {
          console.log('Received values of form: ', values);
          await dispatch(addPost(values))
          props.history.push(`/home`);
        };
    
    return (


<Row>

      <Col span={8}>
      
     <h1 className="text-left m-5"> Add Post</h1>
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
          
      >
        <Input
         
          type="text"
          placeholder="Please enter your post body"
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
