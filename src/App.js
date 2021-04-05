import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';
import Container from '@material-ui/core/Container';
import Header from './components/Header/Header';


function App() {


  return (
      <div>
       <Header></Header>
      <Container  >
    <Router>
       <Switch>
         <Route path = '/home'>
           <Home/>
         </Route>
         <Route path ='/post/:postId'>
          <PostDetail></PostDetail>
         </Route>
         <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
       </Switch>
    </Router>
    </Container>
    </div>
  );
}

export default App;
