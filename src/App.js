import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Products from './pages/Products'
import styled from 'styled-components';
import { AccountBox } from './components/auth';
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/login' component={AccountBox} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;