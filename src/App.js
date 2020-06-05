import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
}from 'react-router-dom';
import Header from './Component/Header'
import India from './Component/India'
import World from './Component/World'
import Statedata from './Component/Statedata'


import './App.css';

function App() {
  return (
    <div  className="container-fluid">
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/"> <India/><Statedata/></Route>
          <Route exact path="/India"> <India/><Statedata/></Route>
          <Route exact path="/World"> <World/></Route>
        </Switch>


      </Router>
      
      
      


      
    </div>
  );
}

export default App;
