import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import AddPost from "./Components/addPost";
import EditPost from "./Components/editPost";
import Home from "./Pages/HomePage/home";
import Login from "./Pages/LoginPage/login";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Switch>
        <Route
            exact
            path="/editpost/:id"
            render={(props) => <EditPost {...props}></EditPost>}
          />
          <Route
            exact
            path="/addpost"
            render={(props) => <AddPost {...props}></AddPost>}
          />
        <Route
            exact
            path="/home"
            render={(props) => <Home {...props}></Home>}
          />
          <Route
            exact
            path="/"
            render={(props) => <Login {...props}></Login>}
          />
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
