import React ,{useEffect}from 'react'
import { Button, Layout } from 'antd';
import { useDispatch, connect } from "react-redux";
import { List} from 'antd';
import './home.css'
import { deletePost, getPosts } from '../../redux/actions/userActionCreator';
import { NavLink } from 'react-router-dom';
import DeleteModal from '../../Components/DeleteModal/deletePost';
import Nav from '../../Layout/nav';


function Home(props) {
  const dispatch = useDispatch();
    const {  Content, Footer } = Layout;
    const [deleteModalShow, setDeleteModalShow] = React.useState(false);
      useEffect(()=>{
          dispatch(getPosts())
      },[dispatch])
    const handleDelete = (id) => {
     
        dispatch(deletePost(id));
      
      setDeleteModalShow(false);
    };
    // console.log(props.posts);
    return (
        <>
        <div>
  <Layout className="layout">
<Nav/>  
    <Content style={{ padding: '0 50px' }}>
      
      <div className="site-layout-content"><List
    itemLayout="horizontal"
    // dataSource={data}
>
{
        props.posts &&  props.posts.length !== 0 ? (
            props.posts.map(
        item => (
        
      <List.Item key={item.id} className="text-left">
        <List.Item.Meta
        
          title={
            <>
          <h3 className="post-title">{item.title}</h3>  <NavLink
          // type="primary"
          className="edit-chalet"
     
          shape="circle"
        
         to={{
          pathname: `/editpost/${item.id}`,
          aboutProps: {
            item:item,
          },
        }}
        >
          <i className="fas fa-pen text-warning editIcon"></i>
          
        </NavLink>
        <Button
              className="border-0 bg-transparent btn-trash"
              onClick={() => setDeleteModalShow(true)}
            >
              <i className="fas fa-trash-alt text-danger"></i>
            </Button>

            <DeleteModal
              show={deleteModalShow}
              onHide={() => setDeleteModalShow(false)}
              handleDelete={()=>handleDelete(item.id)}
            />
        </>
        }
          description={item.body}
        />
      </List.Item>
   ))
   ) : (
     <p>No posts </p>
   )}
</List>
  </div>
    </Content>
    <Footer className="home-footer" style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
        </div>
        
    </>
    )
}
const mapStateToProps = (reduxState) => {
    return {
      user: reduxState.User.currentUser,
      err: reduxState.User.errorMessg,
      posts:reduxState.User.posts
    };
  };
  export default connect(mapStateToProps)(Home)