import React from 'react';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
          <Header></Header>
      </main> 
    </div>
  );
}

export default App;
