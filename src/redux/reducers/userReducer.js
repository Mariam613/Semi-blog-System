import {
   
    Get_Posts,
    Post_Login,
    Add_Posts,
    Edit_Post,
    Delete_Post
    // GET_Error,

  } from "../actionTypes";
  const initialState = {
    currentUser: {},
    token: "",
    posts:[]
    // errorMessg: "",
  };
  export default (state = initialState, action) => {
    let newState;
    switch (action.type) {
    
        case Post_Login:
            newState = { ...state };
        newState.currentUser = { ...state.currentUser };
        newState.currentUser = action.payload.data;
        newState.errorMessg = "";
        newState.token = action.payload.token;
        break;
        case Get_Posts:
            newState = { ...state };
            newState.posts = action.payload;
          
        break;
        case Add_Posts:
          newState = { ...state };
          newState.posts = [...state.posts, action.payload];
          break;
        case Edit_Post:
          newState = { ...state };
          newState.posts = newState.posts.map(post =>
            post.id === action.payload.id ? action.payload : post
            );
          break;
        case Delete_Post:
          newState = { ...state };
          newState.posts = action.payload; 
          break;       
      // case GET_Error:
      //   newState = { ...state };
      //   console.log(action.payload);
      //   newState.errorMessg = action.payload;

      //   break;
        default:
        newState = state;
        break;
    }
    return newState;
  };
  