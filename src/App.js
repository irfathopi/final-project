import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Post from './components/Post/Post';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetails from './components/PostDetails/PostDetails';


function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/post">
          <Post></Post>
        </Route>
        <Route path = "/about/:aboutId">
          <PostDetails></PostDetails>
        </Route>
        <Route exact path = "/">
          <Post></Post>
        </Route>
        <Route path = "*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
