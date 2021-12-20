import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Listings from './components/Listings'
import Signup from './components/Signup'


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
          <Header></Header>
          <Listings></Listings>
          <Signup></Signup>
      </main> 
    </div>
  );
}

export default App;
