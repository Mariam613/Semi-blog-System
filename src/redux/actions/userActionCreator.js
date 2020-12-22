import axios from "axios";
import { baseUrl } from "../../api/authApi";
import {
   
  Add_Posts,
  Delete_Post,
  Edit_Post,
    Get_Posts,
    Post_Login,
//  GET_Error
  } from "../actionTypes";
  /////////////////////////////login///////////////////
export const logIn = (user) => (dispatch) => {
    return axios
      .post(`${baseUrl}login`, user)
      .then((response) => {
        console.log(response);
       
        if (response.status === 200) {

          const { token,user } = response.data;

          localStorage.setItem("token", token);
    
          dispatch(loginSuccess(user, token));

        }
      })
      .catch((error) => {
        console.log(error.response.status);
        // if(error.response.status===401){
        //        dispatch(LoginFailed("email or password is not correct "));
        // }
        
      });
  };
  const loginSuccess = (data, token) => {
    return { type: Post_Login, payload: { data, token } };
  };
//   const LoginFailed = (errMsg) => {
//     return { type: GET_Error, payload: errMsg };
//   };
////////////////////////////////get posts////////////////
export const getPosts = () => (dispatch) => {
    const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
    axios
      .get(`${baseUrl}posts`,config)
      .then((response) => {
          console.log(response.data);
        const posts = response.data.data;
        dispatch(getPostsSuccess(posts));
      })
      .catch((error) => {
          console.log(error.response);
        // dispatch(getPostsFailed(error.response.data.message));
      });
  };
  
  const getPostsSuccess = (posts) => {
    return { type: Get_Posts, payload: posts };
  };
//   const getPostsFailed = (err) => {
//     return { type: GET_Error, payload: err };
//   };
////////////////////////add post////////////////////////////////////
export const addPost = newPost => dispatch => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  axios
    .post(`${baseUrl}posts`, newPost,config)
    .then(response => {
      const { data } = response;
     console.log(data);
      if (response.status === 200) dispatch(addPostSuccess(newPost));
    })
    .catch(console.log);
};

const addPostSuccess = post => {
  return { type: Add_Posts, payload: post };
};
////////////////////////edit post////////////////////////////////////
export const editPost = (editPost, id) => dispatch => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .put(
      `${baseUrl}posts/${id}`,
      editPost,config
    )
    .then(response => {
      const { data } = response;
      console.log(data);
      if (response.status === 200) dispatch(EditJobSuccess(data));
    })
    .catch((error) => {
      console.log(error.response);

  });
    };


const EditJobSuccess = (post) => {
  return { type: Edit_Post, payload: post };
};
//////////////////////Delete post////////////
export const deletePost = (id) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  axios
    .delete(`${baseUrl}posts/${id}`, config)
    .then((response) => {
      const { data } = response.data;
      console.log(data);
      if (response.status === 200) dispatch(deleteChaletSuccess(data));
    })
    .catch(console.log);
};

const deleteChaletSuccess = (data) => {
  return { type: Delete_Post, payload: data };
};