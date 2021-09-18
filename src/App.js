import React from 'react';
import styled from 'styled-components';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import Details from './components/Details';
import Login from './components/Login';

function App() {
  return (
    <div className="App">

    <Router>
       <Header/>

       <Switch>

         <Route path="/details">
           <Details />
         </Route>

         <Route path="/Login">
           <Login />
         </Route>

         <Route path="/">
         <Home/>
         </Route>

       </Switch>
      

    </Router>
      
    </div>
  );
}

export default App;



