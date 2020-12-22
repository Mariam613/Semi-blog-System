import React from 'react'
import { Navbar} from "react-bootstrap";
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
export default function Nav() {
    return (
        <div>
             <Navbar bg="dark" variant="dark"className="home-nav">
    <Navbar.Brand href="#home"className="nav-header">Posts</Navbar.Brand>  
      <Button variant="success"> <NavLink to="/addpost" >
                <i className="fas fa-plus-circle"></i>
                <span>ADD NEW Post</span>
              </NavLink></Button>
    
  </Navbar>
        </div>
    )
}
