import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
// import Nav from "./components/Nav";
import Listings from "./components/Listings";
import Signup from "./components/Signup";
import FAQ from "./pages/faq";
import Contact from "./pages/contact"

function App() {
  return (
    <div>
      <Router>
        <main>
          <Header></Header>

          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/contact" component={Contact} />
          
          {/* <Nav></Nav> */}
          <Listings></Listings>
          <Signup></Signup>
        </main>
      </Router>
    </div>
  );
}

export default App;
